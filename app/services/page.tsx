import Button from '../components/Button';

export default function Services() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-semibold text-black mb-4">Our Services</h1>
        <p className="text-2xl text-gray-600 mb-6">
          Tailored solutions for your unique needs.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-semibold text-black mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-3xl font-semibold mb-4">Service One</h3>
              <p className="text-lg text-gray-600 mb-6">
                Innovative and effective solutions to drive your business forward.
              </p>
              <Button href="/services/service-one" className="bg-black text-white hover:bg-gray-800">
                Learn More
              </Button>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-3xl font-semibold mb-4">Service Two</h3>
              <p className="text-lg text-gray-600 mb-6">
                Bespoke development services designed to fit your specific requirements.
              </p>
              <Button href="/services/service-two" className="bg-black text-white hover:bg-gray-800">
                Learn More
              </Button>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-3xl font-semibold mb-4">Service Three</h3>
              <p className="text-lg text-gray-600 mb-6">
                Cutting-edge technology solutions for modern challenges.
              </p>
              <Button href="/services/service-three" className="bg-black text-white hover:bg-gray-800">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
