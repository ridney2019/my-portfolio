import Button from './components/Button';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-semibold text-black mb-4">Ridney Silva</h1>
        <p className="text-2xl text-gray-600 mb-6">Innovation meets simplicity.</p>
        
        <Button href="/projects" className="bg-black text-white hover:bg-gray-800">
          <span>Discovery My Work</span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
          </svg>
        </Button>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-semibold text-black mb-8">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            I build software that’s fast, intuitive, and impactful. With a passion for design and functionality, I craft solutions that push the boundaries of what’s possible in the digital world.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-semibold text-black mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-medium mb-4">Project One</h3>
              <p className="text-gray-600">A groundbreaking app designed to change the way we interact with technology.</p>
              <Button href="/projects/one" className="text-blue-600 hover:text-blue-800">
                Learn more
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                </svg>
              </Button>
            </div>
            {/* Repeat similar blocks for other projects */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-semibold text-black mb-12">What I Offer</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            From end-to-end product development to bespoke software solutions, I deliver results that are as powerful as they are beautiful.
          </p>
          <Button href="/services" className="bg-black text-white hover:bg-gray-800">
            Explore Services
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
            </svg>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-semibold text-black mb-8">Let’s Collaborate</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Ready to bring your vision to life? Get in touch, and let's create something remarkable together.
          </p>
          <Button href="/contact" className="bg-black text-white hover:bg-gray-800">
            Contact Me
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
            >
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
            </svg>
          </Button>
        </div>
      </section>
    </div>
  );
}
