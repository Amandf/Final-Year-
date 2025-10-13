import React, { createContext, useContext, useState, ReactNode } from 'react';

type Page = 'home' | 'projects' | 'mentors' | 'students' | 'proposals' | 'workspace' | 'progress' | 'settings';

interface NavigationContextType {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  showLanding: boolean;
  setShowLanding: (show: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [showLanding, setShowLanding] = useState<boolean>(true);

  return (
    <NavigationContext.Provider value={{ currentPage, setCurrentPage, showLanding, setShowLanding }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}