import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - More futuristic with animated gradient */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-yellow-600 to-green-800 animate-gradient-x"></div>
        
        {/* Subtle grid overlay instead of circular patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8 inline-block p-1 rounded-full bg-gradient-to-r from-yellow-500 to-green-600">
            <div className="bg-gray-900/90 rounded-full px-4 py-1">
              <span className="text-gray-400 text-sm font-medium">{`Cutting Edge innovation for Africa's Future`}</span>
            </div>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-white tracking-tight">
            <span className="bg-clip-text text-gray-400">Sabhuku Corporation</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-10 max-w-3xl mx-auto font-bold text-gray-400">
            EMBRACE THE TRUE YOU
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-transparent text-gray-400 border-2 border-gray-400 px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Business Pillars Section */}
      <section className="py-36 px-4 sm:px-6 lg:px-8 bg-white relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-600 via-yellow-500 to-green-600"></div>
        <div className="absolute top-24 right-10 w-32 h-32 bg-yellow-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-24 left-10 w-40 h-40 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <span className="h-1 w-10 bg-gray-600 rounded-full mr-2"></span>
              <span className="text-gray-600 font-medium">OUR COMPANIES</span>
              <span className="h-1 w-10 bg-gray-600 rounded-full ml-2"></span>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving innovation and excellence across multiple sectors to build a stronger Africa
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Kurapa Healthcare',
                description: 'Integrated healthcare solutions for a Africa',
                href: '/companies/kurapa-healthcare',
                color: 'from-blue-500 to-blue-700',
                logo: '/images/kurapa.png'
              },
              {
                title: 'Kudyara Agriculture',
                description: 'Sustainable cutting-edge agriculture solutions',
                href: '/companies/kudyara-agriculture',
                color: 'from-green-500 to-green-700',
                logo: '/images/kudyara.png'
              },
              {
                title: 'Kuvhakacha Living',
                description: 'High-end leisure property development',
                href: '/companies/kuvhakacha-living',
                color: 'from-orange-500 to-orange-700',
                logo: '/images/kuvhakacha.png'
              },
              {
                title: 'Kuenda Green',
                description: 'Eco-friendly mobility and transport solutions',
                href: '/companies/kuenda-green',
                color: 'from-emerald-500 to-emerald-700',
                logo: '/images/kuenda.png'
              }
            ].map((pillar, index) => (
              <Link
                key={index}
                href={pillar.href}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col"
              >
                <div className={`h-2 bg-gradient-to-r ${pillar.color}`}></div>
                <div className="p-6 bg-white flex-grow flex flex-col">
                  <div className="mb-4 p-3 rounded-xl bg-gray-50 w-full h-32 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                    <div className="relative w-full h-full">
                      <Image
                        src={pillar.logo}
                        alt={`${pillar.title} logo`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-600 group-hover:text-green-600 transition-colors text-center">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow text-center">
                    {pillar.description}
                  </p>
                  <span className="text-green-600 group-hover:text-green-700 font-medium inline-flex items-center justify-center mt-2 w-full">
                    Visit
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Zebra Pattern Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Zebra pattern background with animation */}
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 24 }).map((_, i) => (
            <div 
              key={i} 
              className={`absolute h-[4vh] w-full ${i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-100'}`} 
              style={{ 
                top: `${i * 4}vh`,
                animation: `slideIn 1.5s ease-out ${i * 0.1}s both`,
                transform: 'skewY(-5deg)'
              }}
            ></div>
          ))}
        </div>
        
        {/* Content overlay with improved styling */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-gray-100">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center mb-4">
                <span className="h-1 w-10 bg-gray-400 rounded-full mr-2"></span>
                <span className="text-gray-400 font-medium">OUR HERITAGE</span>
                <span className="h-1 w-10 bg-gray-400 rounded-full ml-2"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-gray-600">
                Our African Heritage
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Proudly African, we draw inspiration from our rich cultural heritage while embracing innovation and technology to build a brighter future.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Local Expertise',
                  description: "Our team combines deep local knowledge with global best practices to deliver solutions tailored to Africa's unique needs.",
                  icon: (
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )
                },
                {
                  title: 'Sustainable Growth',
                  description: "We're committed to sustainable development that benefits communities while preserving our natural resources for future generations.",
                  icon: (
                    <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: 'Innovation Focus',
                  description: "By embracing cutting-edge technologies, we're helping Africa leapfrog into a more prosperous and connected future.",
                  icon: (
                    <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-center mb-4 justify-center">
                    <div className="p-2 bg-gray-50 rounded-lg mr-3">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-600">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-green-900 text-white relative overflow-hidden">
        {/* Futuristic grid overlay with animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            animation: 'pulse 4s ease-in-out infinite'
          }}></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-clip-text text-gray-400">
            Ready to work with us?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
            Discover opportunities to work with us and learn more about our companies. 
          </p>
          <p className="text-xl text-gray-400 mb-10 font-bold max-w-3xl mx-auto">
          Together, we can build a stronger Africa.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/work-with-us"
              className="inline-block bg-yellow-500 text-gray-900 px-10 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg shadow-yellow-500/50"
            >
              Work With Us
            </Link>
            <Link
              href="/invest"
              className="inline-block bg-transparent border-2 border-green-400 text-green-400 px-10 py-4 rounded-full text-lg font-semibold hover:bg-green-400 hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Investment In Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
