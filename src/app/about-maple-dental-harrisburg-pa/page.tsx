import type { Metadata } from "next";
import AboutUsClient from "../about-us/AboutUsClient";
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata("about-maple-dental-harrisburg-pa", "/Images/About-Maple-Dental.jpg");

export default function AboutMapleDentalHarrisburg() {
  return <AboutUsClient />;
}
