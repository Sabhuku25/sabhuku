import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

const TO = 'info@sabhukucorporation.com';

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '');
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body || {};
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Name, email, subject and message are required.' },
        { status: 400 }
      );
    }
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }
    const html = `
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
    `;
    const result = await sendEmail({
      to: TO,
      subject: `[Sabhuku Contact] ${(subject || '').slice(0, 60)}`,
      html
    });
    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }
    return NextResponse.json({ message: 'Thank you for your message. We will get back to you soon!' });
  } catch (e) {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

function escapeHtml(text) {
  if (text == null) return '';
  const s = String(text);
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
