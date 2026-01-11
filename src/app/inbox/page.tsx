'use client';

import { MainLayout } from "@/app/components/layout/MainLayout";
import FirstHalf from "@/app/components/Inbox/first_half";

export default function Inbox() {
  return (
    <MainLayout title="Inbox" subtitle="Your notifications and assigned issues">
      <div
        // Changed flex to flex-col (mobile) and md:flex-row (desktop)
        className="min-h-screen w-full flex flex-col md:flex-row"
        style={{ backgroundColor: "#101012" }}
      >
        {/* Left Half: Full width on mobile, 50% on desktop */}
        <div className="w-full md:w-1/2">
          <FirstHalf />
        </div>

        {/* Right Half: Full width on mobile, 50% on desktop (empty for now) */}
        <div className="w-full md:w-1/2" />
      </div>
    </MainLayout>
  );
}