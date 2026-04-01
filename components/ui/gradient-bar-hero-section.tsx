"use client";
import React, { useState } from 'react';

type AvatarProps = {
  imageSrc: string;
  delay: number;
};

const Avatar: React.FC<AvatarProps> = ({ imageSrc, delay }) => {
  return (
    <div 
      className="relative h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full overflow-hidden border-2 border-gray-700 shadow-lg animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
    >
      <img 
        src={imageSrc} 
        alt="Team Avatar" 
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
    </div>
  );
};

const TrustElements: React.FC = () => {
  const avatars = [
    "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=100",
    "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100",
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100",
    "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100",
  ];

  return (
    <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full py-2 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm">
      <div className="flex -space-x-2 sm:-space-x-3">
        {avatars.map((avatar, index) => (
          <Avatar key={index} imageSrc={avatar} delay={index * 200} />
        ))}
      </div>
      <p className="text-white animate-fadeIn whitespace-nowrap font-space tracking-tight" style={{ animationDelay: '800ms' }}>
        <span className="text-white font-semibold flex items-center gap-2">Join 40+ Researchers <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span></span>
      </p>
    </div>
  );
};

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="relative z-10 w-full mb-8">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Primary Email"
            className="flex-1 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-black/60 border border-white/10 focus:border-white/50 outline-none text-white text-sm sm:text-base shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-all duration-300 tracking-tight"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base tracking-tight font-medium ${
              isSubmitting 
                ? 'bg-white/20 text-white/50 cursor-not-allowed' 
                : 'bg-white hover:bg-gray-200 text-black'
            }`}
          >
            {isSubmitting ? (
              <div className="h-4 w-4 sm:h-5 sm:w-5 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
            ) : (
              'Apply for Lab Access'
            )}
          </button>
        </form>
      ) : (
        <div className="bg-green-500/10 border border-green-500/20 text-green-400 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-center animate-fadeIn text-sm sm:text-base tracking-tight font-medium">
          Application Received. We will review your profile securely.
        </div>
      )}
    </div>
  );
};

const GradientBars: React.FC = () => {
  const [numBars] = useState(15);

  const calculateHeight = (index: number, total: number) => {
    const position = index / (total - 1);
    const maxHeight = 100;
    const minHeight = 30;
    
    const center = 0.5;
    const distanceFromCenter = Math.abs(position - center);
    const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2);
    
    return minHeight + (maxHeight - minHeight) * heightPercentage;
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div 
        className="flex h-full items-end"
        style={{
          width: '100%',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        {Array.from({ length: numBars }).map((_, index) => {
          const height = calculateHeight(index, numBars);
          return (
            <div
              key={index}
              style={{
                flex: '1 0 calc(100% / 15)',
                maxWidth: 'calc(100% / 15)',
                height: '100%',
                background: 'linear-gradient(to top, rgba(0, 100, 224, 0.9), transparent)',
                transform: `scaleY(${height / 100})`,
                transformOrigin: 'bottom',
                transition: 'transform 0.5s ease-in-out',
                animation: 'pulseBar 2s ease-in-out infinite alternate',
                animationDelay: `${index * 0.1}s`,
                outline: '1px solid rgba(0, 0, 0, 0)',
                boxSizing: 'border-box',
              }}
            />
          );
        })}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulseBar {
          0% { opacity: 0.3; transform: scaleY(1); }
          100% { opacity: 0.8; transform: scaleY(1.2); }
        }
      `}} />
    </div>
  );
};

export const PeopleHero: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center px-6 sm:px-8 md:px-12 pt-40 pb-16 overflow-hidden bg-black text-white w-full">
      <GradientBars />
      
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto flex flex-col items-center justify-center flex-1 pt-12 pb-12">
        <h1 className="w-full text-white leading-tight mb-6 sm:mb-8 animate-fadeIn px-4 tracking-tighter">
          <span className="block font-medium text-[clamp(1.5rem,6vw,3.75rem)] whitespace-nowrap">
            Visionary Minds,
          </span>
          <span className="block font-light italic text-[clamp(1.5rem,6vw,3.75rem)] whitespace-nowrap text-white/80">
            Building the Future.
          </span>
        </h1>
        
        <div className="mb-10 sm:mb-12 px-4">
          <p className="text-[clamp(1rem,3vw,1.25rem)] text-white/70 leading-relaxed font-light tracking-tight max-w-2xl mx-auto">
            Meet the visionary scientists, engineers, and researchers driving the mission at Clarum Group to build foundational cognitive architectures.
          </p>
        </div>
        
        <div className="w-full max-w-xl mx-auto mb-8 px-4">
          <WaitlistForm />
        </div>
        
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-white/40 hover:text-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" className="text-white/40 hover:text-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="#" className="text-white/40 hover:text-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.1c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 12.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.1v4"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
};
