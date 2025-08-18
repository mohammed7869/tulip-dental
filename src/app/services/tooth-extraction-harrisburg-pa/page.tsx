import type { Metadata } from "next";
import ToothExtractionClient from "../tooth-extraction/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("tooth-extraction-harrisburg-pa", "/Images/Tooth Extraction.webp");

export default function ToothExtractionHarrisburg() {
  return <ToothExtractionClient />;
}
