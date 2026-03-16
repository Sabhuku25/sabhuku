import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: process.env.SMTP_SECURE !== 'false',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

/**
 * Send an email via cPanel SMTP.
 * @param {Object} options
 * @param {string} options.to - Recipient email
 * @param {string} options.subject - Email subject
 * @param {string} options.html - HTML body
 * @param {Array<{ filename: string, content: Buffer }>} [options.attachments] - Optional attachments
 * @returns {Promise<{ success: boolean, error?: string }>}
 */
export async function sendEmail({ to, subject, html, attachments = [] }) {
  const from = process.env.SMTP_USER;
  if (!from || !process.env.SMTP_PASS) {
    return { success: false, error: 'Email not configured' };
  }
  try {
    await transporter.sendMail({
      from,
      to,
      subject,
      html,
      attachments: attachments.length ? attachments : undefined
    });
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message || 'Failed to send email' };
  }
}
