'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function WorkWithUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    position: '',
    message: '',
    cv: null
  });

  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setFormData(prev => ({
        ...prev,
        cv: file
      }));
      setSubmitStatus({ type: '', message: '' });
    } else {
      setSubmitStatus({
        type: 'error',
        message: 'Please upload a PDF file'
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just show a success message
    setSubmitStatus({
      type: 'success',
      message: 'Thank you for your application! We will review it and get back to you soon.'
    });
  };

  const values = [
    {
      icon: <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
        {/* Add your icon component here */}
      </div>,
      title: 'Innovation',
      description: 'We are committed to innovation and pushing the boundaries of what is possible.'
    },
    {
      icon: <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
        {/* Add your icon component here */}
      </div>,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do.'
    },
    {
      icon: <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
        {/* Add your icon component here */}
      </div>,
      title: 'Impact',
      description: 'We aim to create lasting impact through our work.'
    }
  ];

  const benefits = [
    {
      icon: <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
        {/* Add your icon component here */}
      </div>,
      title: 'Career Growth',
      description: 'We offer opportunities for career growth and development.'
    },
    {
      icon: <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
        {/* Add your icon component here */}
      </div>,
      title: 'Team Collaboration',
      description: 'We foster a collaborative team environment.'
    },
    {
      icon: <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
        {/* Add your icon component here */}
      </div>,
      title: 'Work-Life Balance',
      description: 'We value work-life balance and encourage a healthy lifestyle.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-yellow-600 to-green-800 animate-gradient-x"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-8 text-gray-400">
            Work With Us
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl font-bold mx-auto leading-relaxed">
            Join us in our mission to transform industries and create lasting impact through innovation and excellence.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 bg-white">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-600 via-yellow-500 to-green-600"></div>
        <div className="absolute top-24 right-10 w-32 h-32 bg-yellow-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-24 left-10 w-40 h-40 bg-green-100 rounded-full opacity-20 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <span className="h-1 w-10 bg-gray-600 rounded-full mr-2"></span>
              <span className="text-gray-600 font-medium">OUR VALUES</span>
              <span className="h-1 w-10 bg-gray-600 rounded-full ml-2"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-600">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                
                <h3 className="text-xl font-bold mb-4 text-gray-600 group-hover:text-green-600 transition-colors text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 bg-gradient-to-r from-gray-900 to-green-900 text-white">
        {/* Futuristic grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <span className="h-1 w-10 bg-gray-400 rounded-full mr-2"></span>
              <span className="text-gray-400 font-medium">BENEFITS</span>
              <span className="h-1 w-10 bg-gray-400 rounded-full ml-2"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-400">
              Why Work With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
    
                <h3 className="text-xl font-bold mb-4 text-gray-400 text-center">{benefit.title}</h3>
                <p className="text-gray-400 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      {/* Application Form Section */}
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <span className="h-1 w-10 bg-gray-600 rounded-full mr-2"></span>
              <span className="text-gray-600 font-medium">APPLICATION FORM</span>
              <span className="h-1 w-10 bg-gray-600 rounded-full ml-2"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-600">
              Start Your Journey With Us
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:border-gray-400"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:border-gray-400"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-900 mb-2">
                Position of Interest
              </label>
              <input
                type="text"
                name="position"
                id="position"
                required
                value={formData.position}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:border-gray-400"
                placeholder="What position are you interested in?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                Why do you want to join us?
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:border-gray-400"
                placeholder="Tell us why you'd like to join our team..."
              />
            </div>

            <div>
              <label htmlFor="cv" className="block text-sm font-medium text-gray-900 mb-2">
                Upload your CV (PDF)
              </label>
              <input
                type="file"
                name="cv"
                id="cv"
                accept=".pdf"
                required
                onChange={handleFileChange}
                className="w-full text-sm text-gray-700 border-2 border-gray-300 rounded-xl p-2
                  file:mr-4 file:py-3 file:px-6
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-yellow-50 file:text-yellow-700
                  hover:file:bg-yellow-100
                  hover:border-gray-400
                  transition-all duration-300"
              />
            </div>

            {submitStatus.message && (
              <div className={`p-4 rounded-xl ${
                submitStatus.type === 'error' 
                  ? 'bg-red-50 text-red-700 border border-red-100' 
                  : 'bg-green-50 text-green-700 border border-green-100'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl text-white text-lg font-semibold
                  bg-gradient-to-r from-gray-600 to-green-600 hover:from-gray-700 hover:to-green-700
                  transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
} 