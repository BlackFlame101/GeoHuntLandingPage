import React, { useState } from 'react';
import logoImage from './assets/logo.png';
import BrightLogo from './assets/BrightLogo.png';
import LetterLogo from './assets/LetterLogo.png';
import applelogo from './assets/apple-app-store-svgrepo-com.svg';
import heroBackgroundImage from './assets/kids-reading-scavenger-hunt-map.png';
import profilepic1 from './assets/pexels-olly-733872.jpg';
import profilepic2 from './assets/pexels-olly-774909.jpg';
import profilepic3 from './assets/pexels-albarracin-31093900.jpg';
import Rabat from './assets/Rabat.jpg';
import Tanger from './assets/Tanger.jpg';
import Casablanca from './assets/CasaBlanca.jpg';
import Sale from './assets/Sale.jpg';
import Marrakech from './assets/Marrakech.jpg';


function App() {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  const openTrailer = () => {
    setIsTrailerOpen(true);
  };

  const closeTrailer = () => {
    setIsTrailerOpen(false);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#9f7d58] to-gray-900">
      {/* Video Trailer Modal */}
      {isTrailerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              onClick={closeTrailer}
              className="absolute -top-10 right-0 text-white hover:text-[#9F7D58] transition"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div className="bg-black rounded-lg overflow-hidden">
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/phLb_SoPBlA"
                title="GeoHunt Trailer" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Header and hero section with consistent opacity */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        {/* Consistent overlay for both header and hero */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Header section - now with relative positioning to appear above the overlay */}
        <header className="container mx-auto py-4 px-4 flex justify-between items-center relative z-10">
          <div className="flex items-center">
            <img src={LetterLogo} alt="GeoHunt Logo" className="w-30 h-20 mr-2" />
          </div>
          <nav>
            <ul className="flex space-x-6 text-white">
              <li><a href="#features" className="hover:text-[#9F7D58] transition">Features</a></li>
              <li><a href="#howItWorks" className="hover:text-[#9F7D58] transition">How It Works</a></li>
              <li><a href="#download" className="hover:text-[#9F7D58] transition">Download</a></li>
              <li><a href="#contact" className="hover:text-[#9F7D58] transition">Contact</a></li>
            </ul>
          </nav>
        </header>

        {/* Hero Section - already has z-10 to appear above overlay */}
        <section className="py-20 px-4 text-center relative z-10">
          <div className="container mx-auto">
            <img src={BrightLogo} alt="GeoHunt Logo" className="w-64 h-64 mx-auto mb-8" />
            <h1 className="text-5xl font-bold text-white mb-6">Hunt. Solve. Conquer.</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Embark on real-world treasure hunts that challenge your mind and take you on adventures through your city.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                  onClick={openTrailer}
                  className="bg-[#9F7D58] hover:bg-[#8A6D4B] text-white font-bold py-3 px-8 rounded-full transition flex items-center"
              >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                      />
                  </svg>
                  Watch Trailer
              </button>
              <button className="bg-[#1C2937] hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition border border-[#9F7D58] flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                          fillRule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clipRule="evenodd"
                      />
                  </svg>
                  Download App
              </button>
            </div>
          </div>
        </section>
      </div>
        <main>
        {/* Features Section */}
        <section id="features" className="py-16 px-4 bg-gradient-to-r from-[#1C2937] to-gray-800">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Explore The Adventure</h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-[#1C2937] bg-opacity-70 p-8 rounded-lg text-center border border-gray-700">
                <div className="w-16 h-16 bg-[#9F7D58] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Real-World Exploration</h3>
                <p className="text-gray-300">Discover hidden locations in your city and embark on exciting treasure hunts.</p>
              </div>
              <div className="bg-[#1C2937] bg-opacity-70 p-8 rounded-lg text-center border border-gray-700">
                <div className="w-16 h-16 bg-[#9F7D58] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Challenging Clues</h3>
                <p className="text-gray-300">Solve riddles, puzzles, and brain teasers to progress on your journey.</p>
              </div>
              <div className="bg-[#1C2937] bg-opacity-70 p-8 rounded-lg text-center border border-gray-700">
                <div className="w-16 h-16 bg-[#9F7D58] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Epic Rewards</h3>
                <p className="text-gray-300">Uncover treasures and earn rewards as you complete each hunt.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="howItWorks" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">How GeoHunt Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#9F7D58] rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <span className="text-white font-bold text-xl">1</span>
                  <div className="absolute w-8 h-1 bg-[#9F7D58] -right-8 top-1/2 hidden md:block"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Download</h3>
                <p className="text-gray-300">Get the app from App Store or Google Play</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#9F7D58] rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <span className="text-white font-bold text-xl">2</span>
                  <div className="absolute w-8 h-1 bg-[#9F7D58] -right-8 top-1/2 hidden md:block"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Choose a Hunt</h3>
                <p className="text-gray-300">Select from various treasure hunts in your area</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#9F7D58] rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <span className="text-white font-bold text-xl">3</span>
                  <div className="absolute w-8 h-1 bg-[#9F7D58] -right-8 top-1/2 hidden md:block"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Solve Clues</h3>
                <p className="text-gray-300">Follow directions and solve puzzles to find locations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#9F7D58] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Claim Treasure</h3>
                <p className="text-gray-300">Complete the hunt and earn your reward</p>
              </div>
            </div>
          </div>
        </section>

        {/* App Screenshots Section with Location Cards */}
        <section className="py-16 px-4 bg-[#1C2937]">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Explore Exciting Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Rabat Card */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 transition duration-300 hover:shadow-xl hover:scale-105">
                <div className="h-48 bg-gray-700 relative">
                  <img src={Rabat} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2">
                    <h3 className="text-white text-xl font-bold">Rabat</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-300 mb-4">Discover the capital's hidden treasures from ancient kasbahs to modern monuments.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#9F7D58] font-bold">4 Active Hunts</span>
                    <span className="bg-[#9F7D58] text-white px-3 py-1 rounded-full text-sm">Popular</span>
                  </div>
                </div>
              </div>

              {/* Casablanca Card */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 transition duration-300 hover:shadow-xl hover:scale-105">
                <div className="h-48 bg-gray-700 relative">
                  <img src={Casablanca} alt="Casablanca" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2">
                    <h3 className="text-white text-xl font-bold">Casablanca</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-300 mb-4">Explore Morocco's largest city with adventures from the medina to the stunning Hassan II Mosque.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#9F7D58] font-bold">6 Active Hunts</span>
                    <span className="bg-[#9F7D58] text-white px-3 py-1 rounded-full text-sm">Featured</span>
                  </div>
                </div>
              </div>

              {/* Tangier Card */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 transition duration-300 hover:shadow-xl hover:scale-105">
                <div className="h-48 bg-gray-700 relative">
                  <img src={Tanger} alt="Tangier" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2">
                    <h3 className="text-white text-xl font-bold">Tangier</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-300 mb-4">Journey through the gateway of Africa with coastal views and vibrant cultural puzzles.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#9F7D58] font-bold">3 Active Hunts</span>
                    <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">New</span>
                  </div>
                </div>
              </div>

              {/* Sale Card */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 transition duration-300 hover:shadow-xl hover:scale-105">
                <div className="h-48 bg-gray-700 relative">
                  <img src={Sale} alt="Sale" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2">
                    <h3 className="text-white text-xl font-bold">Sale</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-300 mb-4">Uncover the historical twin city to Rabat with puzzles through ancient markets and fortresses.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#9F7D58] font-bold">2 Active Hunts</span>
                    <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">Coming Soon</span>
                  </div>
                </div>
              </div>

              {/* Marrakech Card */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 transition duration-300 hover:shadow-xl hover:scale-105">
                <div className="h-48 bg-gray-700 relative">
                  <img src={Marrakech} alt="Marrakech" className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2">
                    <h3 className="text-white text-xl font-bold">Marrakech</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-300 mb-4">Navigate the Red City's maze-like medina and solve clues in the famous Jemaa el-Fnaa square.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#9F7D58] font-bold">5 Active Hunts</span>
                    <span className="bg-[#9F7D58] text-white px-3 py-1 rounded-full text-sm">Top Rated</span>
                  </div>
                </div>
              </div>

              {/* "View All" Card */}
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 flex items-center justify-center cursor-pointer transition duration-300 hover:bg-gray-700">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-[#9F7D58] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">View All Locations</h3>
                  <p className="text-gray-300">Discover more adventures across Morocco</p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <button className="bg-[#9F7D58] hover:bg-[#8A6D4B] text-white font-bold py-3 px-8 rounded-full transition">
                Start Your Adventure
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center text-white mb-16">What Adventurers Say</h2>
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="bg-[#1C2937] p-8 rounded-lg border border-gray-700">
                        <div className="flex items-center mb-4">
                            <div
                                className="w-12 h-12 rounded-full bg-cover bg-center mr-4"
                                style={{ backgroundImage: `url(${profilepic1})` }}
                                
                            ></div>
                            <div>
                                <h4 className="text-white font-bold">Sarah Johnson</h4>
                                <p className="text-gray-400 text-sm">Treasure Hunter</p>
                            </div>
                        </div>
                        <p className="text-gray-300">
                            "GeoHunt completely changed how I explore my city! I've discovered hidden gems and made new friends along the way. Can't recommend it enough!"
                        </p>
                    </div>
                    <div className="bg-[#1C2937] p-8 rounded-lg border border-gray-700">
                        <div className="flex items-center mb-4">
                            <div
                                className="w-12 h-12 rounded-full bg-cover bg-center mr-4"
                                style={{ backgroundImage: `url(${profilepic3})` }}
                                
                            ></div>
                            <div>
                                <h4 className="text-white font-bold">Mark Thompson</h4>
                                <p className="text-gray-400 text-sm">Adventure Seeker</p>
                            </div>
                        </div>
                        <p className="text-gray-300">
                            "The puzzles are challenging and fun! My kids and I have spent weekends exploring and solving clues together. It's become our favorite family activity."
                        </p>
                    </div>
                    <div className="bg-[#1C2937] p-8 rounded-lg border border-gray-700">
                        <div className="flex items-center mb-4">
                            <div
                                className="w-12 h-12 rounded-full bg-cover bg-center mr-4"
                                style={{ backgroundImage: `url(${profilepic2})` }}
                               
                            ></div>
                            <div>
                                <h4 className="text-white font-bold">Jessica Chen</h4>
                                <p className="text-gray-400 text-sm">Puzzle Enthusiast</p>
                            </div>
                        </div>
                        <p className="text-gray-300">
                            "I've tried other geo-games, but GeoHunt has the best combination of navigation, clever puzzles, and rewards. The community is amazing too!"
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-20 px-4 bg-gradient-to-r from-[#1C2937] to-gray-800 text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">Ready For Adventure?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Download GeoHunt now and start exploring. Your next adventure awaits!
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-black hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg transition flex items-center border border-[#9F7D58]">
                <img className="w-8 h-8 mr-2"  src={applelogo}></img>
                App Store
              </button>
              <button className="bg-black hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg transition flex items-center border border-[#9F7D58]">
                <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /></svg>
                Google Play
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section with Left Logo */}
        <section id="contact" className="py-16 px-4 bg-[#1C2937]">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Contact Us</h2>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
              {/* Logo and Info Column */}
              <div className="md:w-1/3 flex flex-col items-center">
                {/* Centered logo above the contact info div */}
                <img src={LetterLogo} alt="GeoHunt Logo" className="w-65 h-48 mb-6" />
                
                <div className="bg-[#1C2937] p-6 rounded-lg border border-gray-700 w-full">
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 mr-3 text-[#9F7D58]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <span>+212 523 456 789</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 mr-3 text-[#9F7D58]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <span>info@geohunt.com</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 mr-3 text-[#9F7D58]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span>Rabat, Morocco</span>
                    </div>
                  </div>
                  
                  {/* Social Media Icons */}
                  <div className="mt-6">
                    <h4 className="text-white font-bold mb-3">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 bg-[#9F7D58] bg-opacity-20 hover:bg-opacity-40 text-[#9F7D58] rounded-full flex items-center justify-center transition">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-[#9F7D58] bg-opacity-20 hover:bg-opacity-40 text-[#9F7D58] rounded-full flex items-center justify-center transition">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                      </a>
                      <a href="#" className="w-10 h-10 bg-[#9F7D58] bg-opacity-20 hover:bg-opacity-40 text-[#9F7D58] rounded-full flex items-center justify-center transition">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form Column */}
              <div className="md:w-2/3">
                <div className="bg-[#1C2937] p-8 rounded-lg border border-gray-700 shadow-lg">
                  <h3 className="text-2xl font-bold text-white mb-6">Send Us A Message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-white mb-2">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#9F7D58]"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-white mb-2">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#9F7D58]"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#9F7D58]"
                        placeholder="Message subject"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-white mb-2">Message</label>
                      <textarea 
                        id="message" 
                        rows={5}
                        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#9F7D58]"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-[#9F7D58] hover:bg-[#8A6D4B] text-white font-bold py-3 px-6 rounded-lg transition flex items-center justify-center"
                    >
                      Send Message
                      <svg width="20" height="20" className="ml-2" fill="#ffffff" viewBox="0 0 32 32" id="Outlined" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <title></title>
                          <g id="Fill">
                            <path d="M28.11,13.32,2.13,2.1,7.44,14.85a3.05,3.05,0,0,1,0,2.3L2.13,29.88l26-11a3,3,0,0,0,0-5.51ZM27.31,17,5.87,26.12l3.41-8.2A4.42,4.42,0,0,0,9.56,17H20V15H9.56a4.42,4.42,0,0,0-.28-.92L5.87,5.9l21.45,9.25a1,1,0,0,1,.6.92A1,1,0,0,1,27.31,17Z"></path>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1C2937] py-8 px-4 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src={LetterLogo} alt="GeoHunt Logo" className="w-15 h-10 mr-2" />
                <span className="text-xl font-bold text-white">GeoHunt</span>
              </div>
              <p className="text-gray-400">Hunt. Solve. Conquer.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-[#9F7D58] transition">Features</a></li>
                <li><a href="#howItWorks" className="hover:text-[#9F7D58] transition">How It Works</a></li>
                <li><a href="#download" className="hover:text-[#9F7D58] transition">Download</a></li>
                <li><a href="#contact" className="hover:text-[#9F7D58] transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#9F7D58] transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#9F7D58] transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#9F7D58] transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#9F7D58] transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#9F7D58] transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#9F7D58] transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} GeoHunt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;