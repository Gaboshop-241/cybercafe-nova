/** SMART CYBER PK11 — horaires réels, évalués dans le fuseau de Libreville. */
export type CafeStatus = {
  isOpen: boolean;
  label: string;
  detail: string;
};

const serviceDays = new Set(["Mon", "Tue", "Wed", "Fri"]);
const hours = "Lun. · Mar. · Mer. · Ven. : 8 h–20 h";

export function getCyberCafeStatus(date = new Date()): CafeStatus {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Libreville",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const value = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? "";
  const minutes = Number(value("hour")) * 60 + Number(value("minute"));
  const isOpen = serviceDays.has(value("weekday")) && minutes >= 8 * 60 && minutes < 20 * 60;

  return isOpen
    ? { isOpen: true, label: "OUVERT MAINTENANT", detail: "Heure de Libreville · jusqu’à 20 h" }
    : { isOpen: false, label: "FERMÉ ACTUELLEMENT", detail: `${hours} · fermé jeu., sam. et dim.` };
}
