import type { Metadata } from "next";
import EndodonticsClient from "../endodontics/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("endodontics-harrisburg-pa", "/Images/Endodontics.webp");

export default function EndodonticsHarrisburg() {
  return <EndodonticsClient />;
}
