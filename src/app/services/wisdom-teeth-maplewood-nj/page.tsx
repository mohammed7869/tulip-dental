import type { Metadata } from "next";
import WisdomTeethClient from "../wisdom-teeth/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("wisdom-teeth-maplewood-nj", "/Images/Wisdom Teeth.jpg");

export default function WisdomTeethHarrisburg() {
  return <WisdomTeethClient />;
}
