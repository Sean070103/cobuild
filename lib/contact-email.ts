import nodemailer from 'nodemailer';
import {
  classicEmailHtml,
  teamInquiryInnerHtml,
  userConfirmationInnerHtml,
} from '@/lib/email-templates';

export type ContactPayload = {
  name: string;
  email: string;
  project: string;
  message: string;
};

function normalizeSmtpPass(raw: string) {
  /** Gmail app passwords are 16 chars; pasting often includes spaces—remove them. */
  let s = raw.trim().replace(/\s+/g, '');
  if (
    (s.startsWith('"') && s.endsWith('"')) ||
    (s.startsWith("'") && s.endsWith("'"))
  ) {
    s = s.slice(1, -1);
  }
  return s;
}

export function getMailConfig() {
  const user = (process.env.SMTP_USER ?? process.env.EMAIL_USER)?.trim();
  const passRaw = process.env.SMTP_PASS ?? process.env.EMAIL_PASS ?? '';
  const pass = normalizeSmtpPass(passRaw);
  const hostRaw = process.env.SMTP_HOST?.trim().toLowerCase();
  const teamInbox = process.env.CONTACT_TO?.trim();

  const isGmail =
    Boolean(user?.endsWith('@gmail.com')) ||
    hostRaw === 'smtp.gmail.com' ||
    hostRaw === 'gmail';

  if (!user || !pass || !teamInbox) {
    return null;
  }

  if (!isGmail && !hostRaw) {
    return null;
  }

  const port = Number(process.env.SMTP_PORT) || 587;
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;
  /** Shown as From: "Name" <address> — must match what your SMTP provider allows. */
  const fromAddress = process.env.SMTP_FROM?.trim() || user;
  /** Display name in From header (set MAIL_FROM_NAME in .env). */
  const fromName = process.env.MAIL_FROM_NAME?.trim() || 'Contact';
  return {
    isGmail,
    host: hostRaw || 'smtp.gmail.com',
    port,
    secure,
    user,
    pass,
    teamInbox,
    fromAddress,
    fromName,
  };
}

function teamEmailText(payload: ContactPayload): string {
  return [
    `New inquiry — ${payload.project}`,
    '',
    `From: ${payload.name} <${payload.email}>`,
    '',
    payload.message,
    '',
    'Reply to this message to email the sender.',
  ].join('\n');
}

function userConfirmationText(payload: ContactPayload, brandName: string): string {
  const first = payload.name.split(/\s+/)[0] || 'there';
  return [
    `Hi ${first},`,
    '',
    `Thanks for contacting ${brandName} about "${payload.project}". We've received your message and will reply soon.`,
    '',
    `This email confirms we got your note. You can keep this message for your records.`,
    '',
    `— ${brandName}`,
  ].join('\n');
}

/**
 * Sends (1) notification to the company inbox and (2) confirmation to the visitor.
 */
export async function sendContactEmails(payload: ContactPayload) {
  const config = getMailConfig();
  if (!config) {
    throw new Error('MAIL_CONFIG_MISSING');
  }

  /** Gmail: explicit 465 + TLS avoids some AUTH failures seen with `service: 'gmail'` on certain networks. */
  const transporter = config.isGmail
    ? nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: config.user,
          pass: config.pass,
        },
      })
    : nodemailer.createTransport({
        host: config.host,
        port: config.port,
        secure: config.secure,
        auth: {
          user: config.user,
          pass: config.pass,
        },
      });

  const fromHeader = `"${config.fromName}" <${config.fromAddress}>`;
  const { name, email, project, message } = payload;

  const teamSubject = `New inquiry: ${project} — ${name}`;
  const teamHtml = classicEmailHtml({
    brandName: config.fromName,
    preheader: `New message from ${name} about ${project}`,
    title: 'New contact form submission',
    innerHtml: teamInquiryInnerHtml({ name, email, project, message }),
    footerLine: `Sent via ${config.fromName} website contact form.`,
  });

  await transporter.sendMail({
    from: fromHeader,
    to: config.teamInbox,
    replyTo: email,
    subject: teamSubject,
    text: teamEmailText(payload),
    html: teamHtml,
  });

  const userSubject = `We received your message — ${config.fromName}`;
  const userHtml = classicEmailHtml({
    brandName: config.fromName,
    preheader: 'Thanks — we will reply soon.',
    title: 'Thanks for getting in touch',
    innerHtml: userConfirmationInnerHtml({
      name,
      project,
      brandName: config.fromName,
    }),
    footerLine: 'This is an automated message.',
  });

  await transporter.sendMail({
    from: fromHeader,
    to: email,
    subject: userSubject,
    text: userConfirmationText(payload, config.fromName),
    html: userHtml,
  });
}
