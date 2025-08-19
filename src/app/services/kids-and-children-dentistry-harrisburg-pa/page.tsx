import type { Metadata } from "next";
import KidsDentistryClient from "../kids-&-children-dentistry/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("kids-and-children-dentistry-harrisburg-pa", "/Images/Kids Dentistry.jpg");

export default function KidsAndChildrenDentistryHarrisburg() {
  return <KidsDentistryClient />;
}
