import type { Metadata } from "next";
import RootCanalClient from "../root-canal/RootCanalClient";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("root-canal-treatment-harrisburg-pa", "/Images/Root Canal.jpg");

export default function RootCanalTreatmentHarrisburg() {
  return <RootCanalClient />;
}
