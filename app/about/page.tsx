import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Ridney Silva</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="py-20 container mx-auto text-center">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          I am a passionate software engineer with expertise in building efficient, scalable, and user-centric software applications.
          With a strong background in:
        </p>
        <ul className="mt-4 space-y-3 text-lg text-gray-700 max-w-3xl mx-auto list-disc list-inside text-left">
          <li><strong>Analyzing ideas & data, anticipating problems</strong></li>
          <li><strong>Planning & implementing solutions</strong></li>
          <li><strong>Developing & streamlining systems</strong></li>
        </ul>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          I specialize in delivering high-quality solutions for clients.
        </p>
      </main>
    </div>
  );
}
