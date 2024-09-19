'use client'

import { Button } from "@/components/ui/button"

export function OTStreamingLanding() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-600 to-blue-600 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center">
            OT-Streaming
          </h1>
          <p className="mt-3 max-w-md mx-auto text-xl text-center sm:text-2xl md:mt-5 md:max-w-3xl">
            Watch unlimited anime, completely free!
          </p>
          <div className="mt-10 flex justify-center">
            <Button size="lg" className="bg-green-500 hover:bg-green-600">
              Start Watching Now
            </Button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12">Why Choose OT-Streaming?</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="🆓"
              title="100% Free"
              description="No hidden fees, no credit card required. Ever."
            />
            <FeatureCard
              icon="🌟"
              title="High-Quality Anime"
              description="Stream a vast library of anime series and movies."
            />
            <FeatureCard
              icon="📱"
              title="Watch Anywhere"
              description="Enjoy on your TV, phone, tablet, or computer."
            />
          </div>
        </div>
      </section>

      {/* Popular Anime Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12">Popular on OT-Streaming</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="aspect-w-2 aspect-h-3 bg-gray-700 rounded-lg overflow-hidden">
                <img
                  src={`/placeholder.svg?height=450&width=300`}
                  alt={`Anime cover ${i + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <StepCard
              number="1"
              title="Sign Up"
              description="Create a free account in seconds."
            />
            <StepCard
              number="2"
              title="Browse"
              description="Explore our vast library of anime."
            />
            <StepCard
              number="3"
              title="Watch"
              description="Stream your favorite anime anytime, anywhere."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2023 OT-Streaming. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">Supported by ads and community contributions.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function StepCard({ number, title, description }) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 text-center">
      <div className="text-3xl font-bold text-green-500 mb-4">{number}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

export default OTStreamingLanding;
