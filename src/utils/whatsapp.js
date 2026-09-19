export const WHATSAPP_NUMBER = "918010127005";

export function openWhatsApp(message) {
  const encodedMessage = encodeURIComponent(message);

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
    "_blank"
  );
}