# Email Implementation Plan (cPanel SMTP)

This document outlines the plan and implementation for sending form submissions to Sabhuku Corporation email addresses hosted on cPanel.

---

## Recipient Addresses

| Form | Sends to |
|------|----------|
| **Contact Us** | info@sabhukucorporation.com |
| **Work With Us** | careers@sabhukucorporation.com |
| **Invest In Us** | invest@sabhukucorporation.com |

---

## Email Configuration (cPanel)

- **Sender account:** One cPanel email account is used to send (SMTP). Emails are sent *to* the addresses above.
- **Outgoing server:** mail.sabhukucorporation.com  
- **SMTP port:** 465 (SSL)  
- **Incoming (reference):** mail.sabhukucorporation.com — IMAP 993, POP3 995  

Environment variables (in `.env.local`, never committed):

- `SMTP_HOST=mail.sabhukucorporation.com`
- `SMTP_PORT=465`
- `SMTP_SECURE=true`
- `SMTP_USER` = full sender email (e.g. Info@sabhukucorporation.com)
- `SMTP_PASS` = password for that email account

---

## Implementation Summary

1. **Dependency:** Nodemailer (`npm install nodemailer`).
2. **Shared helper:** `lib/email.js` — creates Nodemailer transporter, exports `sendEmail({ to, subject, html, attachments })`.
3. **API routes (App Router):**
   - `app/api/contact/route.js` — POST JSON (name, email, subject, message) → send to **info@sabhukucorporation.com**
   - `app/api/work-with-us/route.js` — POST FormData (fullName, email, position, message, cv file) → send to **careers@sabhukucorporation.com** with PDF attached
   - `app/api/invest/route.js` — POST JSON (name, email, investmentInterest, message, phone?) → send to **invest@sabhukucorporation.com**
4. **Frontend:** Each form submits to its API route and shows success or error.

---

## File Structure

```
app/
  api/
    contact/route.js      → POST → info@sabhukucorporation.com
    work-with-us/route.js → POST → careers@sabhukucorporation.com (+ CV attachment)
    invest/route.js       → POST → invest@sabhukucorporation.com
  contact/page.js         → handleSubmit → /api/contact
  work-with-us/page.js    → handleSubmit → /api/work-with-us (FormData)
  invest/page.js          → Invest form + handleSubmit → /api/invest
lib/
  email.js                → Nodemailer transporter + sendEmail()
.env.local                → SMTP_* variables (do not commit)
.env.example              → Placeholder SMTP_* (no real password)
```

---

## Notes

- **Security:** Keep `.env.local` out of version control (`.env*` is in `.gitignore`). Do not put real passwords in this file or in the repo.
- **File upload (Work With Us):** CV must be PDF; max size enforced in API (e.g. 5MB).
- **JSX:** Use `&apos;` and `&quot;` where needed to avoid build errors.
- **Cookies:** If you add cookie logic later, keep it outside try/catch blocks.
