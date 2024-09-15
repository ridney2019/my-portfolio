import Button from '../components/Button';

export default function Projects() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-semibold text-black mb-4">My Projects</h1>
        <p className="text-2xl text-gray-600 mb-6">
          Explore my portfolio of innovative and impactful projects.
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-semibold text-black mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-3xl font-semibold mb-4">Project One</h3>
              <p className="text-lg text-gray-600 mb-6">
                A transformative app that redefines user experience.
              </p>
              <Button href="/projects/one" className="bg-black text-white hover:bg-gray-800">
                View Project
              </Button>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-3xl font-semibold mb-4">Project Two</h3>
              <p className="text-lg text-gray-600 mb-6">
                A powerful tool designed to enhance productivity.
              </p>
              <Button href="/projects/two" className="bg-black text-white hover:bg-gray-800">
                View Project
              </Button>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-3xl font-semibold mb-4">Project Three</h3>
              <p className="text-lg text-gray-600 mb-6">
                A cutting-edge solution that pushes technological boundaries.
              </p>
              <Button href="/projects/three" className="bg-black text-white hover:bg-gray-800">
                View Project
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
