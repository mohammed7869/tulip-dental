import type { Metadata } from "next";
import HomePage from "./home/page";

export const metadata: Metadata = {
  title: "Tulip Dental | Dentist in Maplewood NJ | Maplewood Cosmetic Dentist | Family Dentist in Maplewood",
  description: "Top-rated cosmetic & family dentist in Maplewood, NJ. Serving patients from South Orange, Millburn, West Orange, and nearby. Call 973-671-5500 or visit us at 1585 Springfield Avenue, Store #1, Maplewood, NJ 07040.",
};

export default function Home() {
  return (
    <HomePage/>
  );
}
