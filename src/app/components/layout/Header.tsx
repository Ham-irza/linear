'use client';

export function Header() {
  return (
    <header
      // Moved paddingLeft to className to handle responsiveness (0px on mobile, 244px on desktop)
      className="w-full pl-0 md:pl-[244px]"
      style={{
        height: "8px", // keep thin header
        backgroundColor: "#0a0a0a",
        borderBottom: "1px solid #222429",
        borderBottomRightRadius: "16px", // curve merges with sidebar
        boxSizing: "border-box",
      }}
    />
  );
}