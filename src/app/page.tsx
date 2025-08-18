import type { Metadata } from "next";
import HomePage from "./home/page";

export const metadata: Metadata = {
  title: "Maple Dental | Dentist in Harrisburg PA | Harrisburg Cosmetic Dentist | Family Dentist in Progress",
  description: "Top-rated cosmetic & family dentist in Harrisburg, PA. Serving patients from Colonial Park, Linglestown, Paxtang, and nearby. Call 717-745-2700 or visit us at 2017 Eg Drive, Suite 200, Harrisburg, PA 17110.",
};

export default function Home() {
  return (
    <HomePage/>
  );
}
