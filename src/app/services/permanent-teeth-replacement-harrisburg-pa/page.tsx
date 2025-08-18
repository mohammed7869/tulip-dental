import type { Metadata } from "next";
import PermanentTeethReplacementClient from "../permanent-teeth-replacement/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("permanent-teeth-replacement-harrisburg-pa", "/Images/Teeth Replacement.webp");

export default function PermanentTeethReplacementHarrisburg() {
  return <PermanentTeethReplacementClient />;
}
