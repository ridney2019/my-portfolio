// app/page.tsx
import Link from 'next/link';

export default function Home() {
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
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center h-screen text-center">
        <h2 className="text-4xl font-bold text-gray-800">Welcome to My Portfolio</h2>
        <p className="text-lg text-gray-600 mt-4">I build fast, scalable software solutions.</p>
        <Link href="/projects">
          <span className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition duration-300">
            See My Work
          </span>
        </Link>
      </main>
    </div>
  );
}
