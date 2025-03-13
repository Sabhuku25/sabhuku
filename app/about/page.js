import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  const companies = [
    {
      name: 'Kurapa Healthcare',
      description: 'Leading healthcare solutions provider focused on improving medical access and quality in Zimbabwe.',
      href: '/companies/kurapa-healthcare',
      color: 'from-blue-500 to-blue-700',
      logo: '/images/kurapa.png'
    },
    {
      name: 'Kudyara Agriculture',
      description: 'Innovative agricultural solutions for sustainable farming and food security.',
      href: '/companies/kudyara-agriculture',
      color: 'from-green-500 to-green-700',
      logo: '/images/kudyara.png'
    },
    {
      name: 'Kuvhakacha Living',
      description: 'Modern living spaces and real estate development for contemporary lifestyles.',
      href: '/companies/kuvhakacha-living',
      color: 'from-orange-500 to-orange-700',
      logo: '/images/kuvhakacha.png'
    },
    {
      name: 'Kuenda Green',
      description: 'Sustainable energy and environmental solutions for a greener future.',
      href: '/companies/kuenda-green',
      color: 'from-emerald-500 to-emerald-700',
      logo: '/images/kuenda.png'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900 to-black animate-gradient-x"></div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 inline-block p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="bg-black/80 rounded-full px-4 py-1">
              <span className="text-white text-sm font-medium">Building Zimbabwe's Future</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-8 text-white">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Sabhuku Corporation</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Sabhuku Corporation is a leading multi-sectoral industrial group founded in Zimbabwe, 
            whose subsidiary companies focus on providing customers with Innovative Cutting-Edge 
            Products & Services.
          </p>
        </div>
      </section>

      {/* Companies Grid Section */}
      <section className="relative py-24 bg-white">
        {/* Watermark background */}
        <div className="absolute inset-0 opacity-[0.03] z-0">
          <Image
            src="/images/logo.png"
            alt="Watermark"
            fill
            className="object-contain"
            style={{ filter: 'grayscale(100%)' }}
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <div className="absolute top-24 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-24 left-10 w-40 h-40 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <span className="h-1 w-10 bg-blue-600 rounded-full mr-2"></span>
              <span className="text-blue-600 font-medium">OUR SUBSIDIARIES</span>
              <span className="h-1 w-10 bg-blue-600 rounded-full ml-2"></span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Our Companies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companies.map((company, index) => (
              <Link
                key={index}
                href={company.href}
                className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl bg-white"
              >
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${company.color}`}></div>
                <div className="p-8">
                  <div className="mb-6 w-full h-32 rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors">
                    <div className="relative w-full h-full">
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {company.description}
                  </p>
                  <span className="inline-flex items-center text-blue-600 group-hover:text-blue-700 font-medium">
                    Visit
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-24 bg-gradient-to-r from-gray-900 to-black text-white overflow-hidden">
        {/* Futuristic grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            animation: 'pulse 4s ease-in-out infinite'
          }}></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <span className="h-1 w-10 bg-white/50 rounded-full mr-2"></span>
            <span className="text-white/80 font-medium">OUR VISION</span>
            <span className="h-1 w-10 bg-white/50 rounded-full ml-2"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
            Shaping Tomorrow's Zimbabwe
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            To be the leading force in Zimbabwe's industrial transformation, 
            driving innovation and sustainable development across healthcare, 
            agriculture, real estate, and environmental sectors.
          </p>
        </div>
      </section>
    </div>
  );
} 