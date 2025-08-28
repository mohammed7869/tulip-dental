import type { Metadata } from "next";
import IrvingtonServiceAreaClient from "./IrvingtonServiceAreaClient";
import { generateServiceAreaMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateServiceAreaMetadata(
  "irvington-nj-dentist-near-you",
  "/Images/irvington service area.webp"
);

export default function IrvingtonNjDentistNearYou() {
  return <IrvingtonServiceAreaClient />;
}
