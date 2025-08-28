import type { Metadata } from "next";
import CosmeticDentistryClient from "../cosmetic-dentistry/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("cosmetic-dentistry-maplewood-nj", "/Images/Cosmetic Dentistry.jpg");

export default function CosmeticDentistryHarrisburg() {
  return <CosmeticDentistryClient />;
}
