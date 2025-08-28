import type { Metadata } from "next";
import ProgressServiceAreaClient from "../progress/page";
import { generateServiceAreaMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateServiceAreaMetadata(
  "progress-pa-dentist-near-you",
  "/Images/progress service area.webp"
);

export default function ProgressPaDentistNearYou() {
  return <ProgressServiceAreaClient />;
}
