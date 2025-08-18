import type { Metadata } from "next";
import EmergencyDentistryClient from "../emergency-dentistry/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("emergency-dentistry-harrisburg-pa", "/Images/Emergency Dentistry.jpg");

export default function EmergencyDentistryHarrisburg() {
  return <EmergencyDentistryClient />;
}
