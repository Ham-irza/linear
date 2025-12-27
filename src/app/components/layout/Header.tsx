'use client';

export function Header() {
  return (
    <header
      className="w-full"
      style={{
        height: "8px", // keep thin header
        backgroundColor: "#0a0a0a",
        borderBottom: "1px solid #222429",
        borderBottomRightRadius: "16px", // curve merges with sidebar
        paddingLeft: "244px", // shift content so border meets sidebar
        boxSizing: "border-box",
      }}
    />
  );
}
