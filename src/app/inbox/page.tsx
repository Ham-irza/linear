'use client';

import { MainLayout } from "@/app/components/layout/MainLayout";

export default function Inbox() {
  return (
    <MainLayout title="Inbox" subtitle="Your notifications and assigned issues">
      <div
        className="min-h-screen w-full"
        style={{ backgroundColor: "#101012" }}
      />
    </MainLayout>
  );
}
