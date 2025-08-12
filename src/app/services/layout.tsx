// components/DetailsLayout.tsx

"use client";

import ServiceSidebar from "@/components/ServiceSidebar";
import { useState } from "react";

export default function DetailsLayout({ children }: { children: React.ReactNode }) {
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
            <ServiceSidebar setISSidebarOpen={toggleSidebar}/>
        {children}
        </div>
      </main>
  );
}
