import {
  ArrowRight,
  Layers,
  Users,
  Star,
  MapPin,
  Home as HomeIcon,
  Mail,
  ArrowDown,
} from "lucide-react";
import Silk from "../components/Silk";
import GradientText from "../components/GradientText";
import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { MobileMenu } from '../components/MobileMenu';
import Orbiting from '../components/orbiting';
const LazySilk = React.lazy(() => import('../components/Silk'));
import { Globe } from "../components/magicui/globe";
import WorldMap from "@/components/Location";

const useScrollAnimation = (animationClass: string, delay: string, threshold: number = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            (entry.target as HTMLElement).style.animationDelay = delay;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animationClass, delay, threshold]);

  return ref;
};

export default function Index() {
  const isMobile = useIsMobile();
  const navRef = useScrollAnimation("animate-fade-in", "0.1s");
  const logoRef = useScrollAnimation("animate-slide-up", "0.2s");
  const navLinksRef = useScrollAnimation("animate-slide-up", "0.3s");
  const getStartedButtonRef = useScrollAnimation("animate-scale-in", "0.4s");
  const heroBackgroundEffectRef = useScrollAnimation("animate-fade-in", "0.5s");
  const heroTextContentRef = useScrollAnimation("animate-slide-up", "0.6s");
  const scrollDownButtonRef = useScrollAnimation("animate-scale-in", "0.7s");
  const heroDescriptionRef = useScrollAnimation("animate-slide-up", "0.8s");
  const heroImageRef = useScrollAnimation("animate-fade-in", "0.9s");
  const statsSectionRef = useScrollAnimation("animate-slide-up", "0.1s", 0.2);
  const aboutSectionRef = useScrollAnimation("animate-fade-in", "0.1s", 0.2);
  const aboutHeadingRef = useScrollAnimation("animate-slide-up", "0.2s");
  const aboutDescriptionRef = useScrollAnimation("animate-slide-up", "0.3s");
  const aboutObjectRef = useScrollAnimation("animate-scale-in", "0.4s");
  const valuesSectionRef = useScrollAnimation("animate-fade-in", "0.1s", 0.2);
  const valuesHeadingRef = useScrollAnimation("animate-slide-up", "0.2s");
  const integrityCardRef = useScrollAnimation("animate-slide-up", "0.3s");
  const customerCommitmentCardRef = useScrollAnimation("animate-slide-up", "0.4s");
  const qualityCardRef = useScrollAnimation("animate-slide-up", "0.5s");
  const servicesSectionRef = useScrollAnimation("animate-fade-in", "0.1s", 0.2);
  const servicesHeadingRef = useScrollAnimation("animate-slide-up", "0.2s");
  const servicesDescriptionRef = useScrollAnimation("animate-slide-up", "0.3s");
  const brandingStrategyRef = useScrollAnimation("animate-scale-in", "0.4s");
  const digitalPresenceRef = useScrollAnimation("animate-scale-in", "0.5s");
  const businessSolutionsRef = useScrollAnimation("animate-scale-in", "0.6s");
  const supportConsultingRef = useScrollAnimation("animate-scale-in", "0.7s");
  const footerRef = useScrollAnimation("animate-fade-in", "0.1s", 0.2);
  const footerContentRef = useScrollAnimation("animate-slide-up", "0.2s");

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about_us" },
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#footer" },
  ];

  const logoSrc = "/033eeb1bbc64a52788e481844e2ffeedef410811.png";
  const getStartedButton = (
    <a href="#footer">
      {/* <button className="font-archivo bg-black border border-white rounded-full px-8 py-2.5 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-4">
        Get Started
        <ArrowRight className="w-6 h-4" />
      </button> */}
    </a>
  );
  const currentYear = new Date();
  const [year, setYear] = useState(currentYear.getFullYear());
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation Header */}
      <nav ref={navRef} className="relative z-50 w-full opacity-0">
        <div className="max-w-7xl mx-auto px-5 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div ref={logoRef} className="flex items-center opacity-0">
              <img
                src={logoSrc}
                alt="RRV International"
                className="w-12 h-14"
              />
              <p className="ml-5 text-bold font-space-grotesk text-2xl">RRV International</p>
            </div>

            {isMobile ? (
              <MobileMenu
                logoSrc={logoSrc}
                navLinks={navLinks}
                getStartedButton={getStartedButton}
              />
            ) : (
              <>
                {/* Navigation Links */}
                <div ref={navLinksRef} className="hidden md:flex items-center space-x-8 opacity-0">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="font-archivo text-white hover:text-blue-400 transition-colors px-4 py-2"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

                {/* Get Started Button */}
                  {getStartedButton}
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Suspense>
            <div className="relative w-full h-full">
              <LazySilk color="#0000FF" speed={2} noiseIntensity={0.5} />
              <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-transparent"></div>
            </div>
          </Suspense>
        </div>
        {/* Background Effects */}
        <div ref={heroBackgroundEffectRef} className="absolute top-0 left-0 w-96 h-96 bg-blue-600/60 rounded-full blur-3xl -translate-x-32 -translate-y-12 transform rotate-12 z-10 opacity-0"></div>

        <div className="max-w-7xl mx-auto px-5 gap-12 items-center relative z-10">
          {/* Left Column - Text Content */}
          <div ref={heroTextContentRef} className=" flex flex-col space-y-8 opacity-0">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-center lg:text-left">
                <span className="font-space-grotesk text-white block">
                  A different way to make
                </span>
                <GradientText
                  className="inline-block mt-4 text-7xl md:text-8xl lg:text-9xl"
                  colors={['#9c40ff', '#ffaa40', '#9c40ff']}
                  animationSpeed={4}
                >
                  Business
                </GradientText>
              </h1>
            </div>

            <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-16 ">
              {/* Scroll Down Button */}
              <div ref={scrollDownButtonRef} className="relative w-32 h-32 flex-shrink-0 flex items-center justify-center opacity-0">
                <img
                  src="/scroll-20button.png"
                  alt="Scroll down to see our latest work"
                  className="w-full h-full animate-rotate"
                />
                <ArrowDown className="absolute w-8 h-8 text-white animate-bounce-slow" />
              </div>

              {/* Description */}
              <div ref={heroDescriptionRef} className="max-w-md space-y-6 flex flex-col items-center md:items-end opacity-0">
                <p className="font-archivo text-white text-lg leading-relaxed text-left ">
                  RRV International is a leading business solutions provider serving millions of small-to-medium businesses globally.
                </p>
                 <a href="#footer">
                <button className="font-archivo bg-transparent border border-white rounded-full px-8 py-2.5 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-4">
                  Get in Touch
                  <ArrowRight className="w-6 h-4" />
                </button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - 3D Image */}
          {/* <div ref={heroImageRef} className="relative opacity-0">
            <img
              src="/spring.png"
              alt="3D Business Object"
              className="w-full max-w-lg mx-auto"
            />
          </div> */}
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsSectionRef} className="py-16 opacity-0">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="font-inter text-6xl font-bold text-white mb-2">
                12 +
              </h3>
              <p className="font-inter text-xl text-white">Years Experience</p>
            </div>
            <div>
              <h3 className="font-inter text-6xl font-bold text-white mb-2">
                11M+
              </h3>
              <p className="font-inter text-xl text-white">Total Profits</p>
            </div>
            <div>
              <h3 className="font-inter text-6xl font-bold text-white mb-2">
                7 +
              </h3>
              <p className="font-inter text-xl text-white">
                Operation Countries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutSectionRef} className="py-20 relative opacity-0" id="about_us">
        {/* Background Effect */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/60 rounded-full blur-3xl opacity-60 translate-x-48 -translate-y-48 transform rotate-12"></div>

        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Heading */}
            <div ref={aboutHeadingRef} className="opacity-0">
              <h2 className="font-inter text-6xl font-bold text-white leading-tight mb-8">
                We make your
                <br />
                business stand
                <br />
                out
              </h2>
            </div>

            {/* 3D Object */}
                <div className=" relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-blue-400 to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Globally.
      </span>
      <Globe className="top-28" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>


            {/* Right Column - Description */}
            <div ref={aboutDescriptionRef} className="space-y-6 opacity-0">
              <p className="font-archivo text-white text-lg leading-relaxed">
                At <strong>RRV International</strong>, we believe business
                growth should be simple, strategic, and sustainable. For over{" "}
                <strong>12 years</strong>, we've worked with organizations
                across <strong>five countries</strong>, delivering solutions
                that generate measurable results — more than{" "}
                <strong>$11 million in total profits created</strong> for our
                clients.
              </p>
            </div>
          </div>

          
        </div>
      </section>

      {/* Our Values Section */}
      <section ref={valuesSectionRef} className="py-20 opacity-0">
        <div className="max-w-7xl mx-auto px-5">
          <h2 ref={valuesHeadingRef} className="font-inter text-6xl font-bold text-white text-center mb-16 opacity-0">
            Our values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Integrity Card */}
            <div ref={integrityCardRef} className="group bg-white/3 border border-white/10 rounded-xl p-8 relative overflow-hidden opacity-0 hover:scale-105 hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="bg-blue-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Layers className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="font-inter text-xl font-bold text-white mb-4">
                Integrity
              </h3>
              <p className="font-archivo text-gray-400 text-sm leading-relaxed">
                We uphold the highest standards of integrity in all of our
                actions.
              </p>
            </div>

            {/* Customer Commitment Card */}
            <div ref={customerCommitmentCardRef} className="group bg-white/3 border border-white/10 rounded-xl p-8 relative overflow-hidden opacity-0 hover:scale-105 hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="bg-blue-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="font-inter text-xl font-bold text-white mb-4">
                Customer Commitment
              </h3>
              <p className="font-archivo text-gray-400 text-sm leading-relaxed">
                We develop relationships that make a positive difference in our
                customers' lives.
              </p>
            </div>

            {/* Quality Card */}
            <div ref={qualityCardRef} className="group bg-white/3 border border-white/10 rounded-xl p-8 relative overflow-hidden opacity-0 hover:scale-105 hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="bg-blue-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Star className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="font-inter text-xl font-bold text-white mb-4">
                Quality
              </h3>
              <p className="font-archivo text-gray-400 text-sm leading-relaxed">
                We provide outstanding products and unsurpassed service that,
                together, deliver premium value to our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section ref={servicesSectionRef} className="py-20 opacity-0" id="services">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            <div ref={servicesHeadingRef} className="opacity-0">
              <h2 className="font-inter text-6xl font-bold text-white leading-tight">
                Our
                <br />
                Services
              </h2>
            </div>

            <div ref={servicesDescriptionRef} className="space-y-6 opacity-0">
              <p className="font-archivo text-white text-lg leading-relaxed">
                At RRV International, we deliver tailored business solutions in
                branding, strategy, and digital growth designed to help
                companies thrive and achieve measurable results.
              </p>

              {/* <button className="font-archivo bg-black border border-white rounded-full px-8 py-2.5 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-4">
                Get Started
                <ArrowRight className="w-6 h-4" />
              </button> */}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Branding & Strategy */}
            <div ref={brandingStrategyRef} className="group cursor-pointer opacity-0 hover:shadow-lg transition-all duration-300">
              <div className="overflow-hidden rounded-lg mb-8">
                <img
                  src="/online-final.png"
                  alt="Branding & Strategy"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-inter text-2xl font-bold text-white">
                  Branding & Strategy
                </h3>
                {/* <ArrowRight className="w-16 h-16 text-white group-hover:translate-x-2 transition-transform duration-300" /> */}
              </div>
            </div>

            {/* Digital Presence & Design */}
            <div ref={digitalPresenceRef} className="group cursor-pointer opacity-0 hover:shadow-lg transition-all duration-300">
              <div className="overflow-hidden rounded-lg mb-8">
                <img
                  src="/online-final.png"
                  alt="Digital Presence & Design"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-inter text-2xl font-bold text-white">
                  Digital Presence & Design
                </h3>
                {/* <ArrowRight className="w-16 h-16 text-white group-hover:translate-x-2 transition-transform duration-300" /> */}
              </div>
            </div>

            {/* Business Solutions */}
            <div ref={businessSolutionsRef} className="group cursor-pointer opacity-0 hover:shadow-lg transition-all duration-300">
              <div className="overflow-hidden rounded-lg mb-8">
                <img
                  src="/solutions-final.jpg"
                  alt="Business Solutions"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-inter text-2xl font-bold text-white">
                  Business Solutions
                </h3>
                {/* <ArrowRight className="w-16 h-16 text-white group-hover:translate-x-2 transition-transform duration-300" /> */}
              </div>
            </div>

            {/* Support & Consulting */}
            <div ref={supportConsultingRef} className="group cursor-pointer opacity-0 hover:shadow-lg transition-all duration-300">
              <div className="overflow-hidden rounded-lg mb-8">
                <img
                  src="/consulting-final.jpg"
                  alt="Support & Consulting"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-inter text-2xl font-bold text-white">
                  Support & Consulting
                </h3>
                {/* <ArrowRight className="w-16 h-16 text-white group-hover:translate-x-2 transition-transform duration-300" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <WorldMap />

      {/* Footer */}
      <footer ref={footerRef} className="relative py-20 opacity-0" id="footer">
        <div className="max-w-7xl mx-auto px-5">
          <div ref={footerContentRef} className="bg-white/10 border border-white/20 rounded-2xl p-6 lg:p-12 backdrop-blur-sm opacity-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Left Column - Company Info */}
              <div className="space-y-8">
                <img
                  src="/rrv-20logo-20hd-20bw-20-no-20background-20-1-.png"
                  alt="RRV International Logo"
                  className="w-32 h-36"
                />

                <p className="font-archivo text-white text-lg leading-relaxed max-w-sm">
                  Empowering businesses with innovative solutions and strategic
                  growth opportunities.
                </p>

                <div className="space-y-2">
                  <a
                    href="mailto:contact@rrvinternational.com"
                    className="font-archivo text-white hover:text-blue-400 transition-colors text-lg underline"
                  >
                    contact@rrvinternational.com
                  </a>
                </div>
              </div>

              {/* Right Column - Contact Info */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Mailing Address */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-inter text-lg font-bold text-white mb-3">
                      Mailing Address
                    </h4>
                    <div className="w-10 h-0.5 bg-blue-600/60"></div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                    <div className="font-archivo text-gray-300 leading-relaxed">
                      18117 Biscayne Blvd - Ste 4149
                      <br />
                      Miami, FL 33160
                    </div>
                  </div>
                </div>

                {/* Headquarters */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-inter text-lg font-bold text-white mb-3">
                      Headquarters
                    </h4>
                    <div className="w-10 h-0.5 bg-blue-600/60"></div>
                  </div>

                  <div className="flex items-start gap-4">
                    <HomeIcon className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                    <div className="font-archivo text-gray-300 leading-relaxed">
                      307 West 38th Street
                      <br />
                      New York, NY 10018
                    </div>
                  </div>
                </div>

                {/* Get In Touch */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <a href="#footer">
                    <h4 className="font-inter text-lg font-bold text-white mb-3">
                      Get In Touch
                    </h4>
                  </a>
                    <div className="w-10 h-0.5 bg-blue-600/60"></div>
                  </div>

                  <div className="bg-blue-500/10 rounded-xl p-6">
                    <p className="font-archivo text-gray-300 mb-4">
                      Ready to start your next project?
                    </p>
                    {/* Remember to add a whatsapp link here. */}
                    <a href="#footer">
                    <button className="bg-blue-600/60 text-white px-6 py-2.5 rounded-lg font-archivo hover:shadow-lg transition-all duration-300 flex items-center gap-3">
                      Contact Us
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-white/10 mt-12 pt-8 text-center">
              <p className="font-archivo text-gray-400 text-sm">
                {year} RRV International. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
