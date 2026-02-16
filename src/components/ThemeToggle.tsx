import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const current = document.documentElement.classList.contains('dark');
    setIsDark(current);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);

    // Add transition class briefly
    document.documentElement.classList.add('theme-transition');

    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    // Dispatch custom event for particle canvas
    window.dispatchEvent(
      new CustomEvent('theme-change', { detail: { dark: next } })
    );

    // Remove transition class after animation completes
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 350);
  };

  // Render placeholder during SSR to prevent layout shift
  if (!mounted) {
    return (
      <button
        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs tracking-wide"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: 'var(--color-text-secondary)',
          border: '1px solid var(--color-border)',
          background: 'transparent',
          cursor: 'pointer',
          minWidth: '88px',
          justifyContent: 'center',
        }}
        aria-label="Toggle theme"
      >
        <span style={{ opacity: 0.6 }}>...</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs tracking-wide"
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        color: 'var(--color-text-secondary)',
        border: '1px solid var(--color-border)',
        background: 'transparent',
        cursor: 'pointer',
        transition: 'all 300ms ease',
        minWidth: '88px',
        justifyContent: 'center',
      }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Toggle indicator dot */}
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: isDark ? '#4A9EFF' : '#0F6B8A',
          transition: 'background 300ms ease',
          flexShrink: 0,
        }}
      />
      <span
        style={{
          transition: 'opacity 300ms ease',
        }}
      >
        {isDark ? 'dark' : 'light'}
      </span>
    </button>
  );
}
