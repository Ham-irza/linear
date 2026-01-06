'use client';

interface InboxItemProps {
  className?: string;
}

export default function InboxItem({ className }: InboxItemProps) {
  return (
    <div
      className={className}
      style={{
        width: '349px',
        height: '39px',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        border: '0.5px solid #222429', // very thin border
      }}
    >
      <span
        style={{
          marginLeft: '16px',
          fontFamily:
            '"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Linear Thai", sans-serif',
          fontSize: '13px',
          fontWeight: 500,
          lineHeight: 'normal',
          color: 'lch(100 0 272)',
        }}
      >
        Inbox
      </span>
    </div>
  );
}
