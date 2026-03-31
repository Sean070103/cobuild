import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendContactEmails } from '@/lib/contact-email';

export const runtime = 'nodejs';

const bodySchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  project: z.string().trim().min(1).max(200),
  message: z.string().trim().min(1).max(8000),
});

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Please check all fields and try again.' }, { status: 400 });
  }

  try {
    await sendContactEmails(parsed.data);
  } catch (err) {
    const code = err instanceof Error ? err.message : '';
    if (code === 'MAIL_CONFIG_MISSING') {
      return NextResponse.json(
        { error: 'Contact form is not configured on the server.' },
        { status: 503 },
      );
    }
    console.error('[contact]', err);
    return NextResponse.json(
      { error: 'Could not send message. Please try again later.' },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
