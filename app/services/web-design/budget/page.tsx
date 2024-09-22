import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Button from '../../../components/Button'; // Assuming you have this Button component

export default function Budget() {
  const router = useRouter();
  const [industry, setIndustry] = useState('');

  // Ensure the query parameter is ready before setting the industry
  useEffect(() => {
    if (router.isReady) {
      const { industry } = router.query;
      if (industry) {
        setIndustry(industry);
      }
    }
  }, [router.isReady, router.query]);

  const handleBudgetSelection = (budget: string) => {
    window.location.href = `/services/confirmation?industry=${industry}&budget=${budget}`;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-semibold text-black mb-4">Select Your Budget</h1>
        <p className="text-2xl text-gray-600 mb-6">
          Please choose a budget for your {industry || 'project'}.
        </p>
      </section>

      {/* Budget Options */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-3xl font-semibold mb-4">Basic Package</h3>
              <p className="text-lg text-gray-600 mb-6">For small projects with limited scope.</p>
              <Button onClick={() => handleBudgetSelection('basic')} className="bg-black text-white hover:bg-gray-800">
                Select
              </Button>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-3xl font-semibold mb-4">Standard Package</h3>
              <p className="text-lg text-gray-600 mb-6">Ideal for growing businesses with more features.</p>
              <Button onClick={() => handleBudgetSelection('standard')} className="bg-black text-white hover:bg-gray-800">
                Select
              </Button>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition">
              <h3 className="text-3xl font-semibold mb-4">Premium Package</h3>
              <p className="text-lg text-gray-600 mb-6">For large-scale projects requiring advanced features.</p>
              <Button onClick={() => handleBudgetSelection('premium')} className="bg-black text-white hover:bg-gray-800">
                Select
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
