import React from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import resumeData from '../data/resumeData';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-blue-800" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Email</h4>
                  <a 
                    href={`mailto:${resumeData.contact.email}`}
                    className="text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    {resumeData.contact.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-blue-800" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Phone</h4>
                  <a 
                    href={`tel:${resumeData.contact.phone}`}
                    className="text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    {resumeData.contact.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-blue-800" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Location</h4>
                  <span className="text-gray-900">{resumeData.contact.location}</span>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Linkedin className="text-blue-800" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">LinkedIn</h4>
                  <a 
                    href={resumeData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Github className="text-blue-800" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">GitHub</h4>
                  <a 
                    href={resumeData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Send Me a Message</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Job Opportunity"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn btn-primary"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;