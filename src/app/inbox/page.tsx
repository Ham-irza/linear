'use client';

import { MainLayout } from "@/app/components/layout/MainLayout";
import FirstHalf from "@/app/components/Inbox/first_half";

export default function Inbox() {
  return (
    <MainLayout title="Inbox" subtitle="Your notifications and assigned issues">
      <div
        className="min-h-screen w-full flex"
        style={{ backgroundColor: "#101012" }}
      >
        {/* Left 50% */}
        <div className="w-1/2">
          <FirstHalf />
        </div>

        {/* Right 50% (empty for now) */}
        <div className="w-1/2" />
      </div>
    </MainLayout>
  );
}
