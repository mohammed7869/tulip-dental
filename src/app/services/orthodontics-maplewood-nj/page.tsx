import type { Metadata } from "next";
import OrthodonticsClient from "../orthodontics/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("orthodontics-maplewood-nj", "/Images/Orthodontics.jpg");

export default function OrthodonticsHarrisburg() {
  return <OrthodonticsClient />;
}
