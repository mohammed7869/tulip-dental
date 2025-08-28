import type { Metadata } from "next";
import InvisalignClient from "../invisalign/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("invisalign-clear-aligners-maplewood-nj", "/Images/Invisalign.jpeg");

export default function InvisalignClearAlignersHarrisburg() {
  return <InvisalignClient />;
}
