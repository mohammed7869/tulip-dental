import type { Metadata } from "next";
import PerioProtectClient from "../perio-protect/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("perio-protect-harrisburg-pa", "/Images/Perio Protect.webp");

export default function PerioProtectHarrisburg() {
  return <PerioProtectClient />;
}
