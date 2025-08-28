import type { Metadata } from "next";
import ColonialParkServiceAreaClient from "../colonial-park/page";
import { generateServiceAreaMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateServiceAreaMetadata(
  "colonial-park-pa-dentist-near-you",
  "/Images/colonial park service area.webp"
);

export default function ColonialParkPaDentistNearYou() {
  return <ColonialParkServiceAreaClient />;
}
