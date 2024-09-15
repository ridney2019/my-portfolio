import Link from 'next/link';

export default function footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold text-white">Ridney Silva</p>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="https://twitter.com">
            <a target="_blank" className="text-gray-400 hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337 3.6a9.864 9.864 0 01-3.127 1.195 4.918 4.918 0 00-8.384 4.482A13.958 13.958 0 011.671 3.149a4.917 4.917 0 001.524 6.564A4.898 4.898 0 01.96 9.579v.062a4.918 4.918 0 003.946 4.827 4.902 4.902 0 01-2.212.084 4.917 4.917 0 004.588 3.416A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.213c9.055 0 14.002-7.506 14.002-14.002 0-.213-.005-.425-.014-.637A10.025 10.025 0 0024 4.557z" />
              </svg>
            </a>
          </Link>
          <Link href="https://linkedin.com">
            <a target="_blank" className="text-gray-400 hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.732-.784-1.732-1.732s.784-1.732 1.732-1.732c.966 0 1.732.784 1.732 1.732s-.784 1.732-1.732 1.732zm12.5 12.268h-3v-5.604c0-3.36-4-3.1-4 0v5.604h-3v-11h3v1.757c1.396-2.586 7-2.777 7 2.477v6.766z" />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}