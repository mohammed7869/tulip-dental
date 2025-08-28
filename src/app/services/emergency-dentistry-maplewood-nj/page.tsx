import type { Metadata } from "next";
import EmergencyDentistryClient from "../emergency-dentistry/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("emergency-dentistry-maplewood-nj", "/Images/Emergency Dentistry.jpeg");

export default function EmergencyDentistryHarrisburg() {
  return <EmergencyDentistryClient />;
}
