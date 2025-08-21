import type { Metadata } from "next";
import CrownsAndBridgesClient from "../crowns-and-bridges/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("crowns-and-bridges-harrisburg-pa", "/Images/Dental Crown Bridge.jpg");

export default function CrownsAndBridgesHarrisburg() {
  return <CrownsAndBridgesClient />;
}
