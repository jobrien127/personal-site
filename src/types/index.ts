import type { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface MetaProps {
  title: string;
  description: string;
  keywords?: string[];
}

// Add more shared types as needed
