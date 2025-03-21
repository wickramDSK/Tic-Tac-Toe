export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button className="theme-toggle" onClick={onToggle}>
      {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
