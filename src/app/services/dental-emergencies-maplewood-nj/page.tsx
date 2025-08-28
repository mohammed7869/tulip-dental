import type { Metadata } from "next";
import DentalEmergenciesClient from "../dental-emergencies/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("dental-emergencies-maplewood-nj", "/Images/dental emergencies Harrisburg.webp");

export default function DentalEmergenciesHarrisburg() {
  return <DentalEmergenciesClient />;
}
