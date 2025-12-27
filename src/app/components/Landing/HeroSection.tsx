"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      style={{
        backgroundColor: "#08090a",
        width: "1024px",
        height: "392px",
        paddingTop: "104px",
        paddingLeft: "24px",
      }}
      className="mx-auto"
    >
      <div className="max-w-5xl text-left">

        {/* Heading with your exact typography */}
        <h1
          className="mb-6"
          style={{
            fontFamily:
              '"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
            fontSize: "64px",
            fontWeight: 510,
            lineHeight: "67.84px",
            letterSpacing: "-1.408px",
            color: "#f7f8f8",
          }}
        >
          Linear is a purpose-built tool for planning and building products
        </h1>

        {/* Paragraph */}
        <p
          className="mb-8 max-w-3xl"
          style={{
            fontFamily:
              '"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
            fontSize: "17px",
            fontWeight: 400,
            lineHeight: "27.2px",
            color: "rgb(138, 143, 152)",
          }}
        >
          Meet the system for modern software development.<br />
          Streamline issues, projects, and product roadmaps.
        </p>

        {/* Button */}
        <div className="flex gap-4 justify-start flex-wrap">
          <Link
            href="/app"
            className="inline-flex items-center justify-center gap-1.5 rounded-[10px] shadow-none"
            style={{
              backgroundColor: "#e6e6e6",
              borderColor: "#e6e6e6",
              borderStyle: "solid",
              borderWidth: "0.666667px",
              boxShadow: "0px 8px 2px 0px #0000",
              color: "#08090a",
              fontFamily:
                '"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
              fontSize: "15px",
              fontWeight: 510,
              lineHeight: "40px",
              padding: "0px 16px",
            }}
          >
            Start Building
          </Link>
        </div>
      </div>
    </section>
  );
}
