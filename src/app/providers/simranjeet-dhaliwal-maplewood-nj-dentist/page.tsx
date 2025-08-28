import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import SimranjeetDhaliwalClient from "./simranjeet-dhaliwal-client";

export const metadata: Metadata = generatePageMetadata(
  "simranjeet-dhaliwal-maplewood-nj-dentist",
  "/Images/Dr Urvashi Banerjee DMD.png"
);

export default function SimranjeetDhaliwalHarrisburgPaDentist() {
  return <SimranjeetDhaliwalClient />;
}
