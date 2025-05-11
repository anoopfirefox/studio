"use client";

import { useState, useEffect } from 'react';

export default function AppFooter() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-background py-8 text-center border-t border-border/50"> {/* Subtle top border */}
      <div className="container-mx px-4 sm:px-6 lg:px-8"> {/* Ensure consistent padding */}
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear !== null ? currentYear : new Date().getFullYear()} Anoop P Hegde. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
