import type { Metadata } from "next";
import PenbrookServiceAreaClient from "../penbrook/page";
import { generateServiceAreaMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateServiceAreaMetadata(
  "penbrook-pa-dentist-near-you",
  "/Images/penbrook service area.webp"
);

export default function PenbrookPaDentistNearYou() {
  return <PenbrookServiceAreaClient />;
}
