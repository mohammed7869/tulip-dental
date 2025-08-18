import type { Metadata } from "next";
import HalitosisClient from "../halitosis/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("halitosis-harrisburg-pa", "/Images/Halitosis.webp");

export default function HalitosisHarrisburg() {
  return <HalitosisClient />;
}
