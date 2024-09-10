// app/services/page.tsx
import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Ridney Silva</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="py-20 container mx-auto text-center">
        <h2 className="text-3xl font-bold">Services</h2>
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Service 1</h3>
            <p className="mt-2 text-gray-600">Description of service.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg mt-6">
            <h3 className="text-xl font-semibold">Service 2</h3>
            <p className="mt-2 text-gray-600">Description of service.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
