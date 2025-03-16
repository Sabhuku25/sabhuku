import Link from 'next/link';
import Image from 'next/image';


const companies = {
  'kurapa-healthcare': {
    name: 'Kurapa Healthcare',
    overview: 'Kurapa Healthcare (Private) Limited is an Integrated Healthcare company focused initially on distribution of leading medical supplies sourced from reputable manufacturers of the highest standards both local and international. The company is a subsidiary of Sabhuku Corporation founded by Mr Takudzwa Kangai.',
    mission: `An integrated healthcare company that is involved in pharmaceutical product distribution, pharmacy retailing and medical service provision at its medical centres, with plans to expand into the greater Africa region providing highly accessible, efficient and affordable care.`,
    color: 'from-blue-500 to-blue-700',
    logo: '/images/kurapa.png',
    bgImage: '/images/kurapabg.jpeg',
    features: [
      'Medical Supply Distribution',
      'Retail Pharmacy Chain',
      'Medical Centre Network',
      'Laboratory Technologies'
    ],
    pitchdeck:"/docs/kurapa.pdf"
  },
  'kudyara-agriculture': {
    name: 'Kudyara Agriculture',
    overview: `Kudyara Agriculture is revolutionizing farming practices in Zimbabwe.
    We combine traditional knowledge with modern technology to enhance crop yields, 
    promote sustainable farming, and ensure food security for future generations.`,
    mission: `Kudyara Agriculture's mission is to revolutionise Zimbabwe's agriculture sector through innovative, sustainable greenhouses and climate-smart solutions, promoting food security, climate resilience and resource efficiency in peri-urban and urban areas.`,
    color: 'from-green-500 to-green-700',
    logo: '/images/kudyara.png',
    bgImage: '/images/kudyarabg.jpg',
    features: [
      'Enhanced Productivity',
      'Hydroponics',
      'Empowering Communities',
      'Limited Reliance On Soil'
    ],
    pitchdeck:"/docs/kudyara.pdf"
  },
  'kuvhakacha-living': {
    name: 'Kuvhakacha Living',
    mission: `At Kuvhakacha Living, our mission is to redefine luxury living in Zimbabwe through the creation of exceptional executive property development that harmoniously blend modern design, sustainable practices and a deep appreciation for the local culture. We are committed to delivering a superior lifestyle experience for our residents by crafting living spaces that prioritise comfort, elegance and functionality. Through innovative development, ethical practices and community engagement, we aspire to set new benchmarks in the real estate industry while contributing to the enrichment of Zimbabwe's urban landscape.`,
    overview: `Kuvhakacha Living is transforming the real estate landscape in Zimbabwe. 
    We create modern, sustainable living spaces that combine comfort, functionality, and 
    aesthetic appeal to meet the evolving needs of our communities.`,
    color: 'from-orange-500 to-orange-700',
    logo: '/images/kuvhakacha.png',
    bgImage: '/images/kuvakachabg.jpg',
    features: [
      'Modern residential developments',
      'Smart Home Solutions',
      'Sustainable Building Practices',
      'Property Management Services'
    ],
    pitchdeck:"/docs/kuvhakacha.pdf"
  },
  'kuenda-green': {
    name: 'Kuenda Green',
    overview: `Kuenda Green is Zimbabwe's first eco-friendly transport and logistics service company, offering a fleet of low-carbon light and heavy vehicles.`,
    mission: `To provide eco-friendly, efficient, and innovative transport and logistics solutions in Zimbabwe by utilizing low-carbon and hybrid technologies, while building a sustainable infrastructure that fosters the adoption of electric vehicles (EVs) across the country`,
    color: 'from-emerald-500 to-emerald-700',
    logo: '/images/kuenda.png',
    bgImage: '/images/kuendabg.jpg',
    features: [
      'Source Hybrid Cars for Ecofriendly Fleet',
      'Offer Travel and Logistics Services',
      'Scale To across Zimbabwe Rhen Regionally',
      'Establish A Continent Wide Recharge Network'

    ],
    pitchdeck:"/docs/kuenda.pdf"
  }
};

export default function CompanyPage({ params }) {
  // Access the company slug directly from params
  const companySlug = params.company;
  const company = companies[companySlug];
  
  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Company not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${company.bgImage})` }}
        ></div>
        
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${company.color} opacity-80`}></div>
        
       

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 inline-block p-1 rounded-full bg-gradient-to-r from-white/20 to-white/40">
            <div className="bg-black/80 rounded-full px-4 py-1">
              <span className="text-gray-400 text-sm font-medium">Division of Sabhuku Corporation</span>
            </div>
          </div>
          
          {/* Company Logo */}
          <div className="mb-8 w-48 h-48 mx-auto relative">
            <div className="absolute inset-0 bg-white/10 rounded-xl backdrop-blur-sm"></div>
            <div className="relative w-full h-full p-6">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold mb-8 text-gray-400">
            {company.name}
          </h1>
        </div>
      </section>
      {/* Main Content Section */}
      <section className="relative py-24 bg-white">
        {/* Decorative elements */}
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${company.color}`}></div>
        <div className="absolute top-24 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-24 left-10 w-40 h-40 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center mb-4">
              <span className="h-1 w-10 bg-gray-600 rounded-full mr-2"></span>
              <span className="text-gray-600 font-medium">OVERVIEW</span>
              <span className="h-1 w-10 bg-gray-600 rounded-full ml-2"></span>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {company.overview}
            </p>
          </div>

          {/* Mission Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <span className="h-1 w-10 bg-gray-600 rounded-full mr-2"></span>
              <span className="text-gray-600 font-medium">OUR MISSION</span>
              <span className="h-1 w-10 bg-gray-600 rounded-full ml-2"></span>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {company.mission}
            </p>
          </div>

          {/* Features Grid */}
          <div className="mt-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-600">
              Our Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {company.features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg mr-4 bg-gradient-to-r ${company.color} bg-opacity-10`}>
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-600">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <Link
              href={company.pitchdeck}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block bg-gradient-to-r ${company.color} text-white px-10 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 