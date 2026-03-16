import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

const TO = 'careers@sabhukucorporation.com';
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '');
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const fullName = formData.get('fullName')?.toString()?.trim();
    const email = formData.get('email')?.toString()?.trim();
    const position = formData.get('position')?.toString()?.trim();
    const message = formData.get('message')?.toString()?.trim();
    const cv = formData.get('cv');

    if (!fullName || !email || !position || !message) {
      return NextResponse.json(
        { error: 'Full name, email, position and message are required.' },
        { status: 400 }
      );
    }
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }
    if (!cv || !(cv instanceof File)) {
      return NextResponse.json(
        { error: 'Please upload your CV (PDF).' },
        { status: 400 }
      );
    }
    if (cv.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'CV must be a PDF file.' },
        { status: 400 }
      );
    }
    if (cv.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'CV file must be 5MB or smaller.' },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await cv.arrayBuffer());
    const attachments = [
      { filename: cv.name || 'cv.pdf', content: buffer }
    ];

    const html = `
      <p><strong>Full Name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Position of interest:</strong> ${escapeHtml(position)}</p>
      <p><strong>Why they want to join:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      <p><em>CV attached.</em></p>
    `;
    const result = await sendEmail({
      to: TO,
      subject: `[Sabhuku Work With Us] Application from ${(fullName || '').slice(0, 40)}`,
      html,
      attachments
    });
    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to send application. Please try again.' },
        { status: 500 }
      );
    }
    return NextResponse.json({ message: 'Thank you for your application! We will review it and get back to you soon.' });
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
