import type { Metadata } from "next";
import DentalFillingsClient from "../dental-fillings/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("dental-fillings-harrisburg-pa", "/Images/Dental Fillings.webp");

export default function DentalFillingsHarrisburg() {
  return <DentalFillingsClient />;
}
