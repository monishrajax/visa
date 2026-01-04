export function ThemeScript() {
  // Runs before React to avoid theme flash.
  const code = `
    (function () {
      try {
        var stored = localStorage.getItem('theme');
        var theme = stored ? stored : 'system';
        var systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        var resolved = theme === 'system' ? (systemDark ? 'dark' : 'light') : theme;
        if (resolved === 'dark') document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
      } catch (e) {}
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}


