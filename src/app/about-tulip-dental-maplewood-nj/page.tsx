import type { Metadata } from "next";
import AboutUsClient from "../about-us/AboutUsClient";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata(
  "about-tulip-dental-maplewood-nj",
  "/Images/About-Tulip-Dental.jpg"
);

export default function AboutTulipDentalMaplewood() {
  return <AboutUsClient />;
}
