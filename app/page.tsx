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
<span className="group relative cursor-pointer inline-block rounded-full p-px text-md font-medium leading-6 tracking-wide text-white">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle, rgb(2, 0, 36) 0%, rgb(9, 9, 121) 35%, rgb(0, 212, 255) 100%)] opacity-100 transition-opacity duration-500 group-hover:opacity-100"></span>
  </span>
  <div className="relative z-10 flex items-center space-x-2 rounded-full bg-blue-600 py-4 px-10 ring-1 ring-white/10 shadow-md transition-colors duration-300 hover:bg-blue-700">
    <span>See My Work</span>
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
    </svg>
  </div>
  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-white to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
</span>


        </Link>
      </main>
    </div>
  );
}
