
import React from 'react';
import { MailIcon, PhoneIcon, LocationIcon } from './Icons';

const ContactForm: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Contact Information (Styled like Solutions text content) */}
          <div className="flex flex-col justify-center">
            <h2 className="text-brand-blue font-bold text-lg md:text-xl uppercase tracking-wide mb-2">
              Get In Touch
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark-blue leading-tight mb-6">
              Let's Start the Conversation
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Whether you need a complex power generation system for a remote mine or a scheduled maintenance plan for your facility, our team is ready to assist.
            </p>

            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-brand-blue">
                   <PhoneIcon className="h-6 w-6" />
                </div>
                <div className="ml-6">
                  <span className="block text-xl font-bold text-brand-dark-blue mb-1">Call Us</span>
                  <p className="text-gray-600 text-lg">+27 11 123 4567</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri: 8am - 5pm</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                 <div className="flex-shrink-0 mt-1 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-brand-blue">
                   <MailIcon className="h-6 w-6" />
                </div>
                <div className="ml-6">
                  <span className="block text-xl font-bold text-brand-dark-blue mb-1">Email Us</span>
                  <p className="text-gray-600 text-lg">info@deeppowersolutions.com</p>
                  <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start">
                 <div className="flex-shrink-0 mt-1 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-brand-blue">
                   <LocationIcon className="h-6 w-6" />
                </div>
                <div className="ml-6">
                  <span className="block text-xl font-bold text-brand-dark-blue mb-1">Visit Us</span>
                  <p className="text-gray-600 text-lg">
                    123 Engineering Way,<br />
                    Sandton, Johannesburg,<br />
                    South Africa
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form (Styled like a card/image block in Solutions) */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-100">
             <h4 className="text-2xl font-bold text-brand-dark-blue mb-6">Send a Message</h4>
             <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors outline-none"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                   <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
                   <select 
                     id="subject"
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors outline-none bg-white"
                   >
                     <option>General Inquiry</option>
                     <option>Project Consultation</option>
                     <option>Service & Maintenance</option>
                     <option>Procurement</option>
                     <option>Other</option>
                   </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors outline-none resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-brand-blue text-white font-bold text-lg py-4 rounded-lg hover:bg-blue-800 transition-colors shadow-md mt-2"
                >
                  Send Message
                </button>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
