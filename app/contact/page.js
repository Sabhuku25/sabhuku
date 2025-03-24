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
              <p className="text-gray-300 text-center flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Phone 1: +263 242 002 880
              </p>
              <p className="text-gray-300 text-center flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Phone 2: +263 714 257 269
              </p>
              <p className="text-gray-300 text-center flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Phone 3: +263 775 247 977
              </p>
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