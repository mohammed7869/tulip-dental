import type { Metadata } from "next";
import { generatePageMetadata } from '@/lib/metadata';
import SimranjeetDhaliwalClient from './simranjeet-dhaliwal-client';

export const metadata: Metadata = generatePageMetadata("simranjeet-dhaliwal-harrisburg-pa-dentist", "/Images/Dr-Dhariwal1.png");

export default function SimranjeetDhaliwalHarrisburgPaDentist() {
  return <SimranjeetDhaliwalClient />;
}
