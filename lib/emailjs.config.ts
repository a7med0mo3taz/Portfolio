/* ─────────────────────────────────────────────────────────────────
   lib/emailjs.config.ts
   Single source of truth for EmailJS configuration.
   All values are loaded from environment variables (.env.local).
   ───────────────────────────────────────────────────────────────── */

export const EMAILJS_CONFIG = {
  serviceId:  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  publicKey:  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  ?? "",
} as const;

/* WhatsApp number (without '+') */
export const WHATSAPP_NUMBER = "201009234199";

/* Default direct-chat message */
export const WHATSAPP_DEFAULT_MSG = "Hello Ahmed, I'm interested in working with you.";
