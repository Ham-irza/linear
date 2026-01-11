"use client";
import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { usePathname } from "next/navigation";

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  showHeader?: boolean;
}

export function MainLayout({
  children,
  title,
  subtitle,
  showHeader = true,
}: MainLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar wrapper: 
        Hidden on mobile to prevent blocking content (standard responsive pattern).
        Visible on desktop (md:block).
      */}
      <div className="hidden md:block">
        <Sidebar currentPath={pathname} />
      </div>

      {/* Main Content Area:
        ml-0 on mobile (full width).
        ml-[244px] on desktop to account for sidebar width.
      */}
      <div className="flex-1 flex flex-col ml-0 md:ml-[244px] overflow-hidden">
        {showHeader && <Header title={title} subtitle={subtitle} />}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}