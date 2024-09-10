// app/projects/page.tsx

import Link from 'next/link';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Ridney Silva</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="py-20 container mx-auto text-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="mt-2 text-gray-600">Brief description of the project.</p>
            <Link href="https://github.com"
              className="mt-4 inline-block text-blue-600">View on GitHub
            </Link>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="mt-2 text-gray-600">Brief description of the project.</p>
            <Link href="https://github.com"
               className="mt-4 inline-block text-blue-600">View on GitHub
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
