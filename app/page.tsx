"use client";

import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 bg-teal-600 text-white text-center py-2 px-4 text-sm font-medium z-50">
        ✨ This is a free redesign mockup created by Byldr — <a href="https://ryancwynar.github.io" className="underline hover:no-underline">Learn More</a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold text-gray-900 hidden sm:block">Maplewood Wellness</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-600 hover:text-teal-600 transition">Services</a>
              <a href="#about" className="text-gray-600 hover:text-teal-600 transition">About</a>
              <a href="#testimonials" className="text-gray-600 hover:text-teal-600 transition">Reviews</a>
              <a href="#contact" className="text-gray-600 hover:text-teal-600 transition">Contact</a>
            </div>

            <a 
              href="tel:9549709355" 
              className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition font-medium text-sm whitespace-nowrap"
            >
              (954) 970-9355
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>⭐</span> #1 Rated Chiropractor in Coral Springs
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Feel Better.<br/>
                <span className="text-teal-600">Live Better.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Dr. Jeffrey Feiler has over <strong>36 years of experience</strong> helping 
                patients achieve optimal health through advanced chiropractic care, 
                acupuncture, and wellness therapies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:9549709355" 
                  className="bg-teal-600 text-white px-8 py-4 rounded-xl hover:bg-teal-700 transition font-semibold text-lg text-center shadow-lg shadow-teal-600/25"
                >
                  Book Appointment
                </a>
                <a 
                  href="#services" 
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-teal-600 hover:text-teal-600 transition font-semibold text-lg text-center"
                >
                  View Services
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Same-Day Appointments
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Most Insurance Accepted
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-teal-400 to-blue-500 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-8xl mb-4">🩺</div>
                    <p className="text-2xl font-semibold">Trusted Care</p>
                    <p className="text-lg opacity-90">Since 1989</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">⭐</div>
                <div>
                  <p className="font-bold text-gray-900">4.9/5 Rating</p>
                  <p className="text-sm text-gray-500">200+ Google Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive chiropractic and wellness treatments to help you achieve optimal health
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🦴", title: "Chiropractic Care", desc: "Spinal adjustments and alignment to relieve pain and improve mobility" },
              { icon: "🚗", title: "Auto Injury Recovery", desc: "Specialized treatment for whiplash, back injuries, and accident-related pain" },
              { icon: "📍", title: "Acupuncture", desc: "Traditional Chinese medicine techniques for pain relief and wellness" },
              { icon: "💆", title: "Massage Therapy", desc: "Therapeutic massage to reduce tension, improve circulation, and promote healing" },
              { icon: "🏃", title: "Physical Rehabilitation", desc: "Customized rehab programs to restore strength and function" },
              { icon: "⚖️", title: "Weight Loss Programs", desc: "Medically supervised weight management and nutrition guidance" },
              { icon: "💡", title: "Red Light Therapy", desc: "Advanced light therapy for pain reduction and tissue healing" },
              { icon: "📈", title: "Spinal Decompression", desc: "Non-surgical treatment for herniated discs and chronic back pain" },
              { icon: "🎯", title: "Headache Relief", desc: "Targeted treatments for chronic headaches and migraines" },
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition group">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Meet Dr. Jeffrey Feiler
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over <strong>36 years of experience</strong> in chiropractic care, Dr. Feiler 
                has helped thousands of patients in Coral Springs and surrounding areas achieve 
                relief from pain and improve their quality of life.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Maplewood Wellness Center, we believe in treating the whole person, not just 
                the symptoms. Our comprehensive approach combines traditional chiropractic techniques 
                with modern therapies for the best possible outcomes.
              </p>
              <blockquote className="border-l-4 border-teal-600 pl-4 italic text-gray-700 text-lg">
                "You don't have to be sick to get healthy, but if you don't get healthy, 
                you're gonna get sick."
                <footer className="mt-2 font-semibold not-italic">— Dr. Jeffrey Feiler</footer>
              </blockquote>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center text-4xl text-white">
                  👨‍⚕️
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Dr. Jeffrey Feiler</h3>
                  <p className="text-teal-600">Doctor of Chiropractic</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-teal-600">✓</span>
                  <span className="text-gray-700">36+ Years of Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-teal-600">✓</span>
                  <span className="text-gray-700">Advanced Certification in Acupuncture</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-teal-600">✓</span>
                  <span className="text-gray-700">Auto Injury Specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-teal-600">✓</span>
                  <span className="text-gray-700">Trusted by Thousands of Patients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-xl text-gray-600">Real results from real people</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "I always feel at home when I come here! Dr. Feiler really knows what he's doing and takes care of the key issues regarding my neck and back pain since my car accident. Diamond is super kind and is always there to help!",
                author: "Verified Patient",
                rating: 5
              },
              {
                text: "Dr. Jeff, Diamond, and Adam are amazing! Came in with pains everywhere... a few weeks of treatment and I feel like a million bucks! Thanks guys! A+ service!",
                author: "Adrien H.",
                rating: 5
              },
              {
                text: "After years of chronic back pain, I finally found relief at Maplewood Wellness. The combination of chiropractic care and massage therapy has changed my life. Highly recommend!",
                author: "Coral Springs Patient",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Feel Better?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule your appointment today and take the first step toward a pain-free life.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">📍</div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-gray-300">9770 W Sample Rd<br/>Coral Springs, FL 33065</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">📞</div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <a href="tel:9549709355" className="text-teal-400 hover:text-teal-300 text-xl">(954) 970-9355</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">🕒</div>
                  <div>
                    <h3 className="font-semibold text-lg">Hours</h3>
                    <p className="text-gray-300">Mon-Fri: 9am - 6pm<br/>Sat: 9am - 1pm</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6">Request an Appointment</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none text-gray-500">
                  <option>Select Service</option>
                  <option>Chiropractic Care</option>
                  <option>Auto Injury</option>
                  <option>Acupuncture</option>
                  <option>Massage Therapy</option>
                  <option>Other</option>
                </select>
                <textarea 
                  placeholder="Tell us about your concerns..." 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none resize-none"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-teal-600 text-white py-4 rounded-xl hover:bg-teal-700 transition font-semibold text-lg"
                >
                  Request Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 Maplewood Wellness Center. All rights reserved.</p>
          <p className="mt-2 text-sm">9770 W Sample Rd, Coral Springs, FL 33065 • (954) 970-9355</p>
        </div>
      </footer>

      {/* Tracking Pixel */}
      <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const params = new URLSearchParams(window.location.search);
            const ref = params.get('ref');
            if (ref) {
              const img = new Image();
              img.src = 'https://convex-actions.byldr.co/track?ref=' + encodeURIComponent(ref) + '&url=' + encodeURIComponent(window.location.href);
            }
          })();
        `
      }} />
    </div>
  );
}
