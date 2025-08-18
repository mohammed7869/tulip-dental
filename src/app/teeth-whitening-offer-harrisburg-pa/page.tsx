import type { Metadata } from "next";
import OffersClient from "../offers/page";
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata("teeth-whitening-offer-harrisburg-pa", "/Images/teeth-whitening.png.png");

export default function TeethWhiteningOfferHarrisburg() {
  return <OffersClient />;
}
