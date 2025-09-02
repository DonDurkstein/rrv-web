import { ArrowRight, Layers, Users, Star, MapPin, Home as HomeIcon, Mail } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation Header */}
      <nav className="relative z-50 w-full">
        <div className="max-w-7xl mx-auto px-5 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/033eeb1bbc64a52788e481844e2ffeedef410811?width=96" 
                alt="RRV International" 
                className="w-12 h-14" 
              />
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="font-archivo text-white hover:text-blue-400 transition-colors px-4 py-2">
                Home
              </a>
              <a href="#" className="font-archivo text-white hover:text-blue-400 transition-colors px-4 py-2">
                About Us
              </a>
              <a href="#" className="font-archivo text-white hover:text-blue-400 transition-colors px-4 py-2">
                Services
              </a>
              <a href="#" className="font-archivo text-white hover:text-blue-400 transition-colors px-4 py-2">
                Contact Us
              </a>
            </div>
            
            {/* Get Started Button */}
            <button className="font-archivo bg-black border border-white rounded-full px-8 py-2.5 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-4">
              Get Started
              <ArrowRight className="w-6 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/60 rounded-full blur-3xl opacity-70 -translate-x-32 -translate-y-12 transform rotate-12"></div>
        
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="font-space-grotesk text-white">A different way</span><br />
                <span className="font-space-grotesk text-white">to make</span><br />
                <span className="font-bricolage text-blue-500">Business</span>
              </h1>
            </div>
            
            <div className="flex items-start gap-16">
              {/* Rotating Badge */}
              <div className="relative w-32 h-32">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center transform rotate-45">
                  <ArrowRight className="w-8 h-8 text-white -rotate-45" />
                </div>
              </div>
              
              {/* Description */}
              <div className="max-w-md space-y-6">
                <p className="font-archivo text-white text-lg leading-relaxed">
                  RRV International is a leading business solutions provider serving millions of small-to-medium businesses globally.
                </p>
                
                <button className="font-archivo bg-black border border-white rounded-full px-8 py-2.5 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-4">
                  Get in Touch
                  <ArrowRight className="w-6 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Column - 3D Image */}
          <div className="relative">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/5a9f54913b9664d06cec489ead020732589e4771?width=1160" 
              alt="3D Business Object" 
              className="w-full max-w-lg mx-auto" 
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="font-inter text-6xl font-bold text-white mb-2">12 +</h3>
              <p className="font-inter text-xl text-white">Years Experience</p>
            </div>
            <div>
              <h3 className="font-inter text-6xl font-bold text-white mb-2">7M+</h3>
              <p className="font-inter text-xl text-white">Total Profits</p>
            </div>
            <div>
              <h3 className="font-inter text-6xl font-bold text-white mb-2">5 +</h3>
              <p className="font-inter text-xl text-white">Operation Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative">
        {/* Background Effect */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/60 rounded-full blur-3xl opacity-60 translate-x-48 -translate-y-48 transform rotate-12"></div>
        
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Heading */}
            <div>
              <h2 className="font-inter text-6xl font-bold text-white leading-tight mb-8">
                We make your<br />
                business stand<br />
                out
              </h2>
            </div>
            
            {/* Right Column - Description */}
            <div className="space-y-6">
              <p className="font-archivo text-white text-lg leading-relaxed">
                At <strong>RRV International</strong>, we believe business growth should be simple, strategic, and sustainable. For over <strong>12 years</strong>, we've worked with organizations across <strong>five countries</strong>, delivering solutions that generate measurable results — more than <strong>$2 million in total profits created</strong> for our clients.
              </p>
            </div>
          </div>
          
          {/* 3D Object */}
          <div className="flex justify-center mt-16">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/c47bbe6188112fcf2561a63c8884debd79d7d839?width=1200" 
              alt="3D Sphere Object" 
              className="w-96 h-96" 
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="font-inter text-6xl font-bold text-white text-center mb-16">Our values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Integrity Card */}
            <div className="bg-white/3 border border-white/10 rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="bg-blue-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Layers className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="font-inter text-xl font-bold text-white mb-4">Integrity</h3>
              <p className="font-archivo text-gray-400 text-sm leading-relaxed">
                We uphold the highest standards of integrity in all of our actions.
              </p>
            </div>
            
            {/* Customer Commitment Card */}
            <div className="bg-white/3 border border-white/10 rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="bg-blue-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="font-inter text-xl font-bold text-white mb-4">Customer Commitment</h3>
              <p className="font-archivo text-gray-400 text-sm leading-relaxed">
                We develop relationships that make a positive difference in our customers' lives.
              </p>
            </div>
            
            {/* Quality Card */}
            <div className="bg-white/3 border border-white/10 rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="bg-blue-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Star className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="font-inter text-xl font-bold text-white mb-4">Quality</h3>
              <p className="font-archivo text-gray-400 text-sm leading-relaxed">
                We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h2 className="font-inter text-6xl font-bold text-white leading-tight">
                Our<br />
                Services
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="font-archivo text-white text-lg leading-relaxed">
                At RRV International, we deliver tailored business solutions in branding, strategy, and digital growth designed to help companies thrive and achieve measurable results.
              </p>
              
              <button className="font-archivo bg-black border border-white rounded-full px-8 py-2.5 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-4">
                Get Started
                <ArrowRight className="w-6 h-4" />
              </button>
            </div>
          </div>
          
          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Branding & Strategy */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg mb-8">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/cf0cd340500ca816c1117dca13ca4ff178730d70?width=1110" 
                  alt="Branding & Strategy" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-inter text-2xl font-bold text-white">Branding & Strategy</h3>
                <ArrowRight className="w-16 h-16 text-white group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
            
            {/* Digital Presence & Design */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg mb-8">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/2a06e38599997461b8dde6bd9209435e4cbb7078?width=1110" 
                  alt="Digital Presence & Design" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-inter text-2xl font-bold text-white">Digital Presence & Design</h3>
                <ArrowRight className="w-16 h-16 text-white group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
            
            {/* Business Solutions */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg mb-8">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b693f00af528967c8e1e47262135a7281d900ce2?width=1110" 
                  alt="Business Solutions" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-inter text-2xl font-bold text-white">Business Solutions</h3>
                <ArrowRight className="w-16 h-16 text-white group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
            
            {/* Support & Consulting */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg mb-8">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8806f2d718ca92a0f4cf6c7e92530367b6fb36ff?width=1110" 
                  alt="Support & Consulting" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-inter text-2xl font-bold text-white">Support & Consulting</h3>
                <ArrowRight className="w-16 h-16 text-white group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-white/10 border border-white/20 rounded-2xl p-12 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left Column - Company Info */}
              <div className="space-y-8">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/feed8655b42c800dc542b59957b4739c647be5a3?width=300" 
                  alt="RRV International Logo" 
                  className="w-32 h-36" 
                />
                
                <p className="font-archivo text-white text-lg leading-relaxed max-w-sm">
                  Empowering businesses with innovative solutions and strategic growth opportunities.
                </p>
                
                <div className="space-y-2">
                  <a href="mailto:contact@rrvinternational.com" className="font-archivo text-white hover:text-blue-400 transition-colors text-lg underline">
                    contact@rrvinternational.com
                  </a>
                </div>
              </div>
              
              {/* Right Column - Contact Info */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Mailing Address */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-inter text-lg font-bold text-white mb-3">Mailing Address</h4>
                    <div className="w-10 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mb-6"></div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                    <div className="font-archivo text-gray-300 leading-relaxed">
                      18117 Biscayne Blvd - Ste 4149<br />
                      Miami, FL 33160
                    </div>
                  </div>
                </div>
                
                {/* Headquarters */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-inter text-lg font-bold text-white mb-3">Headquarters</h4>
                    <div className="w-10 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mb-6"></div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <HomeIcon className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                    <div className="font-archivo text-gray-300 leading-relaxed">
                      307 West 38th Street<br />
                      New York, NY 10018
                    </div>
                  </div>
                </div>
                
                {/* Get In Touch */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h4 className="font-inter text-lg font-bold text-white mb-3">Get In Touch</h4>
                    <div className="w-10 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mb-6"></div>
                  </div>
                  
                  <div className="bg-blue-500/10 rounded-xl p-6">
                    <p className="font-archivo text-gray-300 mb-4">Ready to start your next project?</p>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-lg font-archivo hover:shadow-lg transition-all duration-300 flex items-center gap-3">
                      Contact Us
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer Bottom */}
            <div className="border-t border-white/10 mt-12 pt-8 text-center">
              <p className="font-archivo text-gray-400 text-sm">
                © 2025 RRV International. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
