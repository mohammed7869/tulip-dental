import type { Metadata } from "next";
import OffersClient from "../offers/page";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata(
  "teeth-whitening-offer-maplewood-nj",
  "/Images/teeth-whitening.png.png"
);

export default function TeethWhiteningOfferHarrisburg() {
  return <OffersClient />;
}
