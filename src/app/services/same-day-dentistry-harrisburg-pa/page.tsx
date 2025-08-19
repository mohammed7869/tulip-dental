import type { Metadata } from "next";
import SameDayDentistryClient from "../same-day-dentistry/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("same-day-dentistry-harrisburg-pa", "/Images/Same-day Dentistry.jpeg");

export default function SameDayDentistryHarrisburg() {
  return <SameDayDentistryClient />;
}
