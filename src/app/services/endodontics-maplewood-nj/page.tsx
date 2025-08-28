import type { Metadata } from "next";
import EndodonticsClient from "../endodontics/page";
import { generateServiceMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateServiceMetadata("endodontics-maplewood-nj", "/Images/Endodontics.jpeg");

export default function EndodonticsHarrisburg() {
  return <EndodonticsClient />;
}
