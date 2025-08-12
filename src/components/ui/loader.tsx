'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoaderProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    
    // Add loading class to body
    if (typeof document !== 'undefined') {
      document.body.classList.add('loading');
    }

    const timeout = setTimeout(() => {
      setLoading(false);
      
      // Remove loading class from body
      if (typeof document !== 'undefined') {
        document.body.classList.remove('loading');
      }
    }, 500); // adjust based on animation time

    return () => {
      clearTimeout(timeout);
      // Ensure loading class is removed on cleanup
      if (typeof document !== 'undefined') {
        document.body.classList.remove('loading');
      }
    };
  }, [pathname]);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
}


const Loader: React.FC = () => (
    <div className='fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden'>
      <div className="flex flex-col items-center justify-center relative">
        <Image
          src="/Images/heart.gif"
          alt="Loading..."
          width={100}
          height={100}
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32"
          priority
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        {/* <p className="mt-4 text-gray-600 font-medium text-lg">Loading...</p> */}
      </div>
    </div>
);
