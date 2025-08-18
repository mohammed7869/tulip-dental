import type { Metadata } from "next";
import { generateServiceMetadata } from '@/lib/metadata';
import RootCanalClient from './RootCanalClient';

export const metadata: Metadata = generateServiceMetadata("root-canal", "/Images/Root Canal.webp");

export default function RootCanalPage() {
  return <RootCanalClient />;
}