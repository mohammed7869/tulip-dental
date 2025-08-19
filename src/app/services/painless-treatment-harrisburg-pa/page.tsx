import type { Metadata } from "next";
import PainlessTreatmentClient from "../painless-treatment/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("painless-treatment-harrisburg-pa", "/Images/Painless Treatment.jpeg");

export default function PainlessTreatmentHarrisburg() {
  return <PainlessTreatmentClient />;
}
