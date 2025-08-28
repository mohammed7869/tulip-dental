import type { Metadata } from "next";
import SouthOrangeServiceAreaClient from "./SouthOrangeServiceAreaClient";
import { generateServiceAreaMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateServiceAreaMetadata(
  "south-orange-nj-dentist-near-you",
  "/Images/south-orange service area.webp"
);

export default function SouthOrangeNjDentistNearYou() {
  return <SouthOrangeServiceAreaClient />;
}
