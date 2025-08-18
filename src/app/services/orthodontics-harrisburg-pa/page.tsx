import type { Metadata } from "next";
import OrthodonticsClient from "../orthodontics/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("orthodontics-harrisburg-pa", "/Images/Orthodontics.webp");

export default function OrthodonticsHarrisburg() {
  return <OrthodonticsClient />;
}
