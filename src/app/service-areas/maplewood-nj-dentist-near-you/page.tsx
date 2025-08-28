import type { Metadata } from "next";
import HarrisburgServiceAreaClient from "../harrisburg/HarrisburgServiceAreaClient";
import { generateServiceAreaMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateServiceAreaMetadata(
  "maplewood-nj-dentist-near-you",
  "/Images/maplewood service area.webp"
);

export default function MaplewoodNjDentistNearYou() {
  return <HarrisburgServiceAreaClient />;
}
