import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center p-4">
      <h1 className="text-3xl font-bold mb-4">BestOfLinux</h1>
      <p className="mb-6 text-fd-muted-foreground">
        Discover and compare Linux packages across distributions
      </p>
      <Link 
        href="/docs" 
        className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white"
      >
        View Documentation
      </Link>
    </main>
  );
}
