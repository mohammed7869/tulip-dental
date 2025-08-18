import type { Metadata } from "next";
import WhiteningVeneersClient from "../whitening-&-veneers/page";
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata("whitening-&-veneers-harrisburg-pa", "/Images/Whitening Veneers.webp");

export default function WhiteningVeneersHarrisburg() {
  return <WhiteningVeneersClient />;
}
