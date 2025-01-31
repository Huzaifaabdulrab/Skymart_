import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

const Privacy = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <main className="p-6 flex flex-col md:flex-row gap-6">
        <aside className="w-full md:w-1/4 sticky top-0 h-screen overflow-y-auto p-4 shadow-md">
          <h2 className="text-lg font-bold mb-4">Table of Contents</h2>
          <ul className="list-disc pl-4 text-gray-700 space-y-2">
            <li><a href="#introduction" className="hover:text-blue-500">Introduction</a></li>
            <li><a href="#information" className="hover:text-blue-500">Information We Collect</a></li>
            <li><a href="#usage" className="hover:text-blue-500">How We Use Information</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact Us</a></li>
          </ul>
        </aside>
        <div className="w-full bg-white z-10 md:w-3/4 p-6">
          <div className="w-full">
            <div>
              <h2 id="introduction" className="text-xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information.
              </p>

              <h2 id="information" className="text-xl font-bold mb-4">Information We Collect</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Personal identification information (Name, email address, phone number, etc.)</li>
                <li>Usage data (Pages visited, time spent, etc.)</li>
              </ul>

              <h2 id="usage" className="text-xl font-bold mb-4">How We Use Information</h2>
              <p className="text-gray-700 mb-4">
                We use the collected data to provide and improve our services, communicate with you, and ensure a personalized experience.
              </p>

              <h2 id="contact" className="text-xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at privacy@mywebsite.com.
              </p>
            </div>
          </div>
          <div className="">
            <div>
              <h2 id="introduction" className="text-xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information.
              </p>

              <h2 id="information" className="text-xl font-bold mb-4">Information We Collect</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Personal identification information (Name, email address, phone number, etc.)</li>
                <li>Usage data (Pages visited, time spent, etc.)</li>
              </ul>

              <h2 id="usage" className="text-xl font-bold mb-4">How We Use Information</h2>
              <p className="text-gray-700 mb-4">
                We use the collected data to provide and improve our services, communicate with you, and ensure a personalized experience.
              </p>

              <h2 id="contact" className="text-xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at privacy@mywebsite.com.
              </p>
            </div>
          </div>
          <div className="">
            <div>
              <h2 id="introduction" className="text-xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information.
              </p>

              <h2 id="information" className="text-xl font-bold mb-4">Information We Collect</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Personal identification information (Name, email address, phone number, etc.)</li>
                <li>Usage data (Pages visited, time spent, etc.)</li>
              </ul>

              <h2 id="usage" className="text-xl font-bold mb-4">How We Use Information</h2>
              <p className="text-gray-700 mb-4">
                We use the collected data to provide and improve our services, communicate with you, and ensure a personalized experience.
              </p>

              <h2 id="contact" className="text-xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at privacy@mywebsite.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default Privacy
