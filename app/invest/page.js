'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Invest() {
  const [activeTab, setActiveTab] = useState('opportunities');
  
  const investmentOpportunities = [
    {
      title: 'Healthcare Innovation Fund',
      description: 'Invest in cutting-edge healthcare technologies and facilities that are transforming medical care in Africa.',
      minInvestment: '$50,000',
      sector: 'Healthcare',
      returns: '12-15% projected annual returns',
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Sustainable Agriculture Projects',
      description: 'Support sustainable farming initiatives that enhance food security while providing attractive returns.',
      minInvestment: '$25,000',
      sector: 'Agriculture',
      returns: '10-14% projected annual returns',
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'Modern Living Developments',
      description: 'Participate in real estate projects that are creating contemporary living spaces across Africa.',
      minInvestment: '$100,000',
      sector: 'Real Estate',
      returns: '15-18% projected annual returns',
      color: 'from-orange-500 to-orange-700'
    },
    {
      title: 'Renewable Energy Ventures',
      description: "Invest in clean energy solutions that are powering Africa's sustainable future.",
      minInvestment: '$75,000',
      sector: 'Energy',
      returns: '13-16% projected annual returns',
      color: 'from-emerald-500 to-emerald-700'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-yellow-600 to-green-800 animate-gradient-x"></div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-8 text-gray-400">
            Invest in Us
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 font-bold max-w-4xl mx-auto leading-relaxed">
            {`Join us in building Africa's industrial future through strategic investments in our portfolio companies.`}
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('opportunities')}
                className={`${
                  activeTab === 'opportunities'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200`}
              >
                {`Investment Opportunities`}
              </button>
              <button
                onClick={() => setActiveTab('process')}
                className={`${
                  activeTab === 'process'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200`}
              >
                Investment Process
              </button>
              <button
                onClick={() => setActiveTab('benefits')}
                className={`${
                  activeTab === 'benefits'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200`}
              >
                Benefits
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Content Section */}
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
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-600 via-yellow-500 to-green-600"></div>
        <div className="absolute top-24 right-10 w-32 h-32 bg-yellow-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-24 left-10 w-40 h-40 bg-green-100 rounded-full opacity-20 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'opportunities' && (
            <div>
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center mb-4">
                  <span className="h-1 w-10 bg-gray-600 rounded-full mr-2"></span>
                  <span className="text-gray-600 font-medium">OPPORTUNITIES</span>
                  <span className="h-1 w-10 bg-gray-600 rounded-full ml-2"></span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-600">
                  Current Investment Opportunities
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explore our carefully selected investment opportunities across our four key sectors.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {investmentOpportunities.map((opportunity, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className={`h-2 bg-gradient-to-r ${opportunity.color}`}></div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-4 text-gray-600 text-center">{opportunity.title}</h3>
                      <p className="text-gray-600 mb-6 text-center">{opportunity.description}</p>
                      <Link 
                        href="/contact" 
                        className="inline-flex items-center justify-center w-full py-4 px-6 rounded-xl text-white text-lg font-semibold
                          bg-gradient-to-r from-green-600 to-green-700
                          transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                      >
                        Request More Information
                        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div>
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center mb-4">
                  <span className="h-1 w-10 bg-green-600 rounded-full mr-2"></span>
                  <span className="text-green-600 font-medium">PROCESS</span>
                  <span className="h-1 w-10 bg-green-600 rounded-full ml-2"></span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-600">
                  Our Investment Process
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {`We've designed a streamlined process to make investing with us simple and transparent.`}
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 inset-y-0 w-0.5 bg-gradient-to-b from-green-600 via-green-700 to-green-800"></div>
                  
                  {/* Timeline items */}
                  <div className="space-y-16">
                    {[
                      {
                        step: 1,
                        title: 'Initial Consultation',
                        description: "We'll discuss your investment goals, risk tolerance, and preferred sectors to identify the right opportunities for you."
                      },
                      {
                        step: 2,
                        title: 'Detailed Proposal',
                        description: "Our team will prepare a comprehensive investment proposal tailored to your specific requirements and financial objectives."
                      },
                      {
                        step: 3,
                        title: 'Due Diligence',
                        description: "We provide full transparency with detailed documentation and arrange site visits where applicable."
                      },
                      {
                        step: 4,
                        title: 'Investment Agreement',
                        description: "Once you're ready to proceed, we'll finalize the investment agreement and handle all necessary paperwork."
                      },
                      {
                        step: 5,
                        title: 'Ongoing Management',
                        description: "Our team actively manages your investment and provides regular updates on performance and milestones."
                      }
                    ].map((item, index) => (
                      <div key={index} className="relative pl-16">
                        <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-gradient-to-r from-green-600 to-green-700 flex items-center justify-center text-white font-bold shadow-lg">
                          {item.step}
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                          <h3 className="text-xl font-bold mb-4 text-gray-600">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'benefits' && (
            <div>
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center mb-4">
                  <span className="h-1 w-10 bg-green-600 rounded-full mr-2"></span>
                  <span className="text-green-600 font-medium">BENEFITS</span>
                  <span className="h-1 w-10 bg-green-600 rounded-full ml-2"></span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-600">
                  Benefits of Investing With Us
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover why investors choose Sabhuku Corporation for their strategic investments in Africa.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Attractive Returns',
                    description: 'Our carefully selected projects offer competitive returns compared to traditional investment vehicles.',
                    icon: (
                      <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  },
                  {
                    title: 'Local Expertise',
                    description: 'Our deep understanding of the African market helps navigate complexities and identify unique opportunities.',
                    icon: (
                      <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  },
                  {
                    title: 'Diversification',
                    description: 'Spread your investment across multiple sectors to balance risk and optimize returns.',
                    icon: (
                      <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                      </svg>
                    )
                  },
                  {
                    title: 'Social Impact',
                    description: "Your investment contributes to Africa's economic development and creates positive social change.",
                    icon: (
                      <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    )
                  },
                  {
                    title: 'Transparent Management',
                    description: "Regular reporting and updates ensure you're always informed about your investment performance.",
                    icon: (
                      <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )
                  },
                  {
                    title: 'Long-term Growth',
                    description: 'Our focus on sustainable business models ensures long-term value creation and growth potential.',
                    icon: (
                      <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    )
                  }
                ].map((benefit, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="bg-green-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-600 text-center">{benefit.title}</h3>
                    <p className="text-gray-600 text-center">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-green-900 text-white relative overflow-hidden">
        {/* Futuristic grid overlay */}
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
            Invest In Us
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            {` Contact our investment team to discuss how you can be part of Africa's growth story.`}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-yellow-500 to-green-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:from-yellow-600 hover:to-green-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
} 