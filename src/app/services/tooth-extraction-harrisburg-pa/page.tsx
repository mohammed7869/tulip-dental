import type { Metadata } from "next";
import ToothExtractionClient from "../tooth-extraction/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("tooth-extraction-harrisburg-pa", "/Images/Tooth Extraction.jpeg");

export default function ToothExtractionHarrisburg() {
  return <ToothExtractionClient />;
}
