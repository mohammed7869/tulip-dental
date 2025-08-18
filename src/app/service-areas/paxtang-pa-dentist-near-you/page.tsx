import type { Metadata } from "next";
import PaxtangServiceAreaClient from "../paxtang/page";
import { generateServiceAreaMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceAreaMetadata("paxtang-pa-dentist-near-you", "/Images/paxtang service area.webp");

export default function PaxtangPaDentistNearYou() {
  return <PaxtangServiceAreaClient />;
}
