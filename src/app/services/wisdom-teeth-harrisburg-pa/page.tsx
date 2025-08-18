import type { Metadata } from "next";
import WisdomTeethClient from "../wisdom-teeth/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("wisdom-teeth-harrisburg-pa", "/Images/Wisdom Teeth.webp");

export default function WisdomTeethHarrisburg() {
  return <WisdomTeethClient />;
}
