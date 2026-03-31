/**
 * Simple, email-client–friendly HTML (table layout, inline styles).
 */

function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export type ClassicEmailOptions = {
  brandName: string;
  preheader?: string;
  title: string;
  innerHtml: string;
  footerLine?: string;
};

export function classicEmailHtml(opts: ClassicEmailOptions): string {
  const pre = opts.preheader
    ? `<div style="display:none;font-size:1px;color:#fff;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">${escapeHtml(opts.preheader)}</div>`
    : '';

  const footer = opts.footerLine
    ? `<p style="margin:24px 0 0;font-size:12px;color:#737373;line-height:1.5;">${opts.footerLine}</p>`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:Georgia,'Times New Roman',serif;">
  ${pre}
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0a0a0a;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:560px;border-collapse:collapse;background:#141414;border:1px solid #262626;border-radius:8px;overflow:hidden;">
          <tr>
            <td style="padding:24px 28px 8px;border-bottom:1px solid #262626;">
              <p style="margin:0;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#a3a3a3;">${escapeHtml(opts.brandName)}</p>
              <h1 style="margin:12px 0 0;font-size:20px;font-weight:600;color:#fafafa;line-height:1.3;">${escapeHtml(opts.title)}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 28px 32px;color:#d4d4d4;font-size:15px;line-height:1.6;">
              ${opts.innerHtml}
              ${footer}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function teamInquiryInnerHtml(payload: {
  name: string;
  email: string;
  project: string;
  message: string;
}): string {
  const { name, email, project, message } = payload;
  return `
    <p style="margin:0 0 16px;"><strong style="color:#fafafa;">From</strong><br />${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
    <p style="margin:0 0 16px;"><strong style="color:#fafafa;">Project</strong><br />${escapeHtml(project)}</p>
    <p style="margin:0 0 8px;"><strong style="color:#fafafa;">Message</strong></p>
    <div style="padding:16px;background:#0a0a0a;border:1px solid #262626;border-radius:6px;white-space:pre-wrap;font-family:ui-monospace,monospace;font-size:13px;color:#e5e5e5;">${escapeHtml(message)}</div>
    <p style="margin:20px 0 0;font-size:13px;color:#a3a3a3;">Reply directly to this email to reach the sender.</p>
  `;
}

export function userConfirmationInnerHtml(payload: {
  name: string;
  project: string;
  brandName: string;
}): string {
  const first = payload.name.split(/\s+/)[0] || 'there';
  return `
    <p style="margin:0 0 16px;">Hi ${escapeHtml(first)},</p>
    <p style="margin:0 0 16px;">Thanks for reaching out about <strong style="color:#fafafa;">${escapeHtml(payload.project)}</strong>. We&apos;ve received your message and will get back to you as soon as we can.</p>
    <p style="margin:0 0 16px;padding:12px 14px;background:#0a0a0a;border:1px solid #262626;border-radius:6px;font-size:14px;color:#a3a3a3;">This email confirms we got your note. Keep this message for your records if you like.</p>
    <p style="margin:0;">— ${escapeHtml(payload.brandName)}</p>
  `;
}
