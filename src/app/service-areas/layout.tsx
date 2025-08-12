"use client";

import ServiceAreasSidebar from "@/components/ServiceAreasSidebar";
import { useState } from "react";

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <main
      className={`transition-all duration-300 ease-in-out ${
        sidebarOpen ? "lg:ml-60" : "ml-0"
      }`}
    >
      <div>
        <ServiceAreasSidebar setISSidebarOpen={toggleSidebar} />
        {children}
      </div>
    </main>
  );
} 