import type { Metadata } from "next";
import SportsDentistryClient from "../sports-dentistry/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("sports-dentistry-maplewood-nj", "/Images/Sports Dentistry.jpeg");

export default function SportsDentistryHarrisburg() {
  return <SportsDentistryClient />;
}
