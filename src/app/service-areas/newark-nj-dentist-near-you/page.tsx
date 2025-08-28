import type { Metadata } from "next";
import NewarkServiceAreaClient from "./NewarkServiceAreaClient";
import { generateServiceAreaMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateServiceAreaMetadata(
  "newark-nj-dentist-near-you",
  "/Images/newark service area.webp"
);

export default function NewarkNjDentistNearYou() {
  return <NewarkServiceAreaClient />;
}
