import type { Metadata } from "next";
import DentalImplantsClient from "../dental-implants/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("dental-implants-harrisburg-pa", "/Images/Dental Implants.webp");

export default function DentalImplantsHarrisburg() {
  return <DentalImplantsClient />;
}
