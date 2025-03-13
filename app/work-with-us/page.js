'use client';

import { useState } from 'react';
import Image from 'next/image';

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
              <span className="text-white text-sm font-medium">Join Our Team</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-8 text-white">
            Work With <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Sabhuku</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
           {` Join our team and be part of Zimbabwe's industrial transformation. 
            We're always looking for talented individuals who share our vision.`}
          </p>
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
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <div className="absolute top-24 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-24 left-10 w-40 h-40 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <span className="h-1 w-10 bg-blue-600 rounded-full mr-2"></span>
              <span className="text-blue-600 font-medium">APPLICATION FORM</span>
              <span className="h-1 w-10 bg-blue-600 rounded-full ml-2"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
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
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-gray-400"
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
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-gray-400"
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
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-gray-400"
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
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-gray-400"
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
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100
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
                  bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
                  transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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