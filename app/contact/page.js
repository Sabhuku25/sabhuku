'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just show a success message
    setSubmitStatus('Thank you for your message. We will get back to you soon!');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/90 via-yellow-600/90 to-green-800/90 animate-gradient-x"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo */}
          <div className="mb-8 w-32 h-32 mx-auto relative">
            <div className="absolute inset-0 bg-white/10 rounded-xl backdrop-blur-sm"></div>
            <div className="relative w-full h-full p-4">
              <Image
                src="/images/logo.png"
                alt="Sabhuku Corporation Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold mb-8 text-gray-400">
            Contact  Us
          </h1>
          <p className="text-xl font-bold sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            {`Have a question or want to learn more about our companies? 
            We'd love to hear from you.`}
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-24 bg-white">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-600 via-yellow-500 to-green-600"></div>
        <div className="absolute top-24 right-10 w-32 h-32 bg-yellow-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-24 left-10 w-40 h-40 bg-green-100 rounded-full opacity-20 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <span className="h-1 w-10 bg-gray-600 rounded-full mr-2"></span>
              <span className="text-gray-600 font-medium">CONTACT FORM</span>
              <span className="h-1 w-10 bg-gray-600 rounded-full ml-2"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-gray-600">
              Send Us a Message
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-8 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:border-gray-400"
                    placeholder="Enter your name"
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
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:border-gray-400"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:border-gray-400"
                  placeholder="What is your message about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:border-gray-400"
                  placeholder="Type your message here..."
                />
              </div>

              {submitStatus && (
                <div className="p-4 rounded-xl bg-green-50 text-green-700 border border-green-100">
                  {submitStatus}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl text-white text-lg font-semibold
                    bg-gradient-to-r from-yellow-500 to-green-600 hover:from-yellow-600 hover:to-green-700
                    transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Call Center Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-yellow-500 to-green-600 rounded-2xl blur-xl opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="relative w-full h-[600px]">
                  <Image
                    src="/images/call.jpg"
                    alt="Customer Service Representative"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="relative py-24 bg-gradient-to-r from-gray-900 to-green-900 text-white overflow-hidden">
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <span className="h-1 w-10 bg-gray-400 rounded-full mr-2"></span>
              <span className="text-gray-400 font-medium">REACH US</span>
              <span className="h-1 w-10 bg-gray-400 rounded-full ml-2"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-gray-400">
              Contact Us
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-400 text-center">Visit Us</h3>
              <p className="text-gray-400 text-center">103 Good Hope Road, Westgate</p>
              <p className="text-gray-400 text-center">Harare, Zimbabwe </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-400">Call Us</h3>
              <p className="text-gray-300 text-center">Phone 1: +263 242 002 880</p>
              <p className="text-gray-300 text-center">Phone 2: +263 714 257 269</p>
              <p className="text-gray-300 text-center">Phone 3: +263 775 247 977</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-400">Email Us</h3>
              <p className="text-gray-400 text-center">info@sabhukucorporation.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 