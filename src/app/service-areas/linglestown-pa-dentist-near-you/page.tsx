import type { Metadata } from "next";
import LinglestownServiceAreaClient from "../linglestown/page";
import { generateServiceAreaMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceAreaMetadata("linglestown-pa-dentist-near-you", "/Images/linglestown service area.webp");

export default function LinglestownPaDentistNearYou() {
  return <LinglestownServiceAreaClient />;
}
