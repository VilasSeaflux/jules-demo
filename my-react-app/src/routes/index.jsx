import { createFileRoute } from '@tanstack/react-router';

function HomePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold dark:text-white">Welcome to the Home Page!</h1>
      <p className="dark:text-gray-300">This is the main landing page of our application.</p>
    </div>
  );
}

export const Route = createFileRoute('/')({
  component: HomePage,
});
