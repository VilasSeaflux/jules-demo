import React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import ThemeSwitcher from '../components/ThemeSwitcher';
// Note: Theme state and toggle function need to be handled,
// This basic example assumes ThemeSwitcher might have its own context or be adapted.
// For now, we'll pass dummy props or assume it's self-contained for simplicity in this step.

const RootLayout = () => {
  // Dummy theme state and toggle for now, will be properly handled in App.jsx or context
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  React.useEffect(() => {
    // Initialize theme from localStorage or default
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);


  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">My App</h1>
        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      </header>
      <hr className="mb-4 border-gray-300 dark:border-gray-700"/>
      <main>
        <Outlet />
      </main>
      <footer className="mt-8 pt-4 border-t border-gray-300 dark:border-gray-700 text-center text-sm">
        <p>&copy; 2024 My App</p>
      </footer>
    </div>
  );
};

export const Route = createRootRoute({
  component: RootLayout,
});
