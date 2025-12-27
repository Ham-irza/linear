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
      <Sidebar currentPath={pathname} />

      <div className="flex-1 flex flex-col ml-sidebar overflow-hidden">
        {showHeader && <Header title={title} subtitle={subtitle} />}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
