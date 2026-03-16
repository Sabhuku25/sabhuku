import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

const TO = 'invest@sabhukucorporation.com';

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '');
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, investmentInterest, message, phone } = body || {};
    if (!name?.trim() || !email?.trim() || !investmentInterest?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Name, email, investment interest and message are required.' },
        { status: 400 }
      );
    }
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }
    const phoneLine = phone?.trim() ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : '';
    const html = `
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${phoneLine}
      <p><strong>Investment interest:</strong> ${escapeHtml(investmentInterest)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
    `;
    const result = await sendEmail({
      to: TO,
      subject: `[Sabhuku Invest] Inquiry from ${(name || '').slice(0, 40)}`,
      html
    });
    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }
    return NextResponse.json({ message: 'Thank you for your interest. Our investment team will be in touch soon!' });
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
