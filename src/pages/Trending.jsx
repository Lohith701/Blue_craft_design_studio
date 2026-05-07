import React from 'react';
import PageContainer from '../components/PageContainer';
import HeroBanner from '../components/HeroBanner';
import { Star, TrendingUp, Zap, Heart } from 'lucide-react';
import './Trending.css';

const Trending = () => {
  const trendingStyles = [
    {
      title: 'Biophilic Design',
      desc: 'Integrating natural elements into interiors to improve well-being and connectivity to nature.',
      img: '/images/img1.webp'
    },
    {
      title: 'Warm Minimalism',
      desc: 'A softer take on minimalism using textured fabrics, warm wood tones, and organic shapes.',
      img: '/images/img2.webp'
    },
    {
      title: 'Smart Spaces',
      desc: 'Tech-integrated furniture and lighting solutions that adapt to your daily routines.',
      img: '/images/hero.webp'
    },
    {
      title: 'Sustainable Luxury',
      desc: 'Premium designs crafted from recycled materials and eco-friendly manufacturing processes.',
      img: '/images/project1.webp'
    }
  ];

  return (
    <PageContainer
      title="Trending"
      description="Stay ahead with the latest interior design trends, styles, and innovations curated by Blue Craft."
    >
      <HeroBanner 
        eyebrow="What's New"
        title="Trending"
        subtitle="Stay ahead with the latest interior design trends and innovations."
        bgImage="/images/hero-banner/trending-banner.webp"
      />

      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">Latest Interior Trends</h2>
            <p className="text-muted max-w-2xl mx-auto">
              We constantly track the global design landscape to bring you the most exciting and relevant styles for your home in Bangalore.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            {trendingStyles.map((style, idx) => (
              <div key={idx} className="trending-card group">
                <div className="trending-img-wrap overflow-hidden rounded-xl mb-6 relative">
                  <img 
                    src={style.img} 
                    alt={style.title} 
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <TrendingUp size={20} />
                  </div>
                </div>
                <h3 className="h3 mb-3 group-hover:text-accent transition-colors">{style.title}</h3>
                <p className="text-muted leading-relaxed">{style.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container">
          <div className="grid grid-cols-4 gap-8">
            {[
              { icon: Star, label: 'Curated Styles' },
              { icon: Zap, label: 'Modern Tech' },
              { icon: Heart, label: 'Sustainable' },
              { icon: TrendingUp, label: 'Global Trends' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 text-accent">
                  <item.icon size={32} />
                </div>
                <span className="font-semibold text-primary uppercase tracking-widest text-xs">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Trending;
