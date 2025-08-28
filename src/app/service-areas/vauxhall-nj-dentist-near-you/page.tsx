import type { Metadata } from "next";
import VauxhallServiceAreaClient from "./VauxhallServiceAreaClient";
import { generateServiceAreaMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateServiceAreaMetadata(
  "vauxhall-nj-dentist-near-you",
  "/Images/vauxhall service area.webp"
);

export default function VauxhallNjDentistNearYou() {
  return <VauxhallServiceAreaClient />;
}
