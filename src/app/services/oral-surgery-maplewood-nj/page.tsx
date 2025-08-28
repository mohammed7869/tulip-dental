import type { Metadata } from "next";
import OralSurgeryClient from "../oral-surgery/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("oral-surgery-maplewood-nj", "/Images/Oral Surgery.jpg");

export default function OralSurgeryHarrisburg() {
  return <OralSurgeryClient />;
}
