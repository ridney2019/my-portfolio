import Button from '../components/Button';

export default function Services() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-semibold text-black mb-4">Our Services</h1>
        <p className="text-2xl text-gray-600 mb-6">
          Tailored solutions for your business and brand success.
        </p>
      </section>

      {/* Web & App Design Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-semibold text-black mb-12">Web & App Design</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-3xl font-semibold mb-4">Website Design</h3>
              <p className="text-lg text-gray-600 mb-6">
                Custom and responsive website designs to enhance your digital presence.
              </p>
              <Button href="/services/web-design" className="bg-black text-white hover:bg-gray-800">
                Learn More
              </Button>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-3xl font-semibold mb-4">App Design</h3>
              <p className="text-lg text-gray-600 mb-6">
                Intuitive mobile app designs that engage and convert users.
              </p>
              <Button href="/services/app-design" className="bg-black text-white hover:bg-gray-800">
                Learn More
              </Button>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-3xl font-semibold mb-4">Landing Page Design</h3>
              <p className="text-lg text-gray-600 mb-6">
                High-conversion landing pages tailored for your business goals.
              </p>
              <Button href="/services/landing-page-design" className="bg-black text-white hover:bg-gray-800">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing & Advertising Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-semibold text-black mb-12">Marketing & Advertising</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-3xl font-semibold mb-4">Banner Ads</h3>
              <p className="text-lg text-gray-600 mb-6">
                Eye-catching banner ads for your digital marketing campaigns.
              </p>
              <Button href="/services/banner-ads" className="bg-black text-white hover:bg-gray-800">
                Learn More
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
              <h3 className="text-3xl font-semibold mb-4">Email Marketing</h3>
              <p className="text-lg text-gray-600 mb-6">
                Professionally designed emails that drive results and grow your audience.
              </p>
              <Button href="/services/email-marketing" className="bg-black text-white hover:bg-gray-800">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
