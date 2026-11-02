
import landingPageData from "../data/landingPageData";

export async function getLandingPageData() {
  return landingPageData;
}

export const getLandingPage = getLandingPageData;

export async function getRepairStatus(ticketId) {
  throw new Error(
    "Live repair tracking is not available yet."
  );
}
