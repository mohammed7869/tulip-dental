import type { Metadata } from "next";
import HarrisburgServiceAreaClient from "./HarrisburgServiceAreaClient";
import { generateServiceAreaMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceAreaMetadata("harrisburg", "/Images/harrisburg service area.webp");

export default function ServiceAreasPage() {
  return <HarrisburgServiceAreaClient />;
} 