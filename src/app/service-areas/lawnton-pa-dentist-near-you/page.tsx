import type { Metadata } from "next";
import LawntonServiceAreaClient from "../lawnton/page";
import { generateServiceAreaMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceAreaMetadata("lawnton-pa-dentist-near-you", "/Images/lawntown service area.jpg");

export default function LawntonPaDentistNearYou() {
  return <LawntonServiceAreaClient />;
}
