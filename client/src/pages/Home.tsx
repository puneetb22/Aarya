import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnnouncementBanner from '@/components/sections/AnnouncementBanner';
import HeroSection from '@/components/sections/HeroSection';
import StatisticsSection from '@/components/sections/StatisticsSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import FeatureHighlight from '@/components/sections/FeatureHighlight';
import TechnicalFeatureSection from '@/components/sections/TechnicalFeatureSection';
import CallToAction from '@/components/sections/CallToAction';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Aaryati Technologies - Mulesoft to Spring Boot Conversion</title>
        <meta name="description" content="Transform your MuleSoft applications to Spring Boot with our automated conversion platform. Our industry-leading solution ensures a smooth migration with minimal manual intervention." />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Header />
        <AnnouncementBanner />
        <HeroSection />
        <StatisticsSection />
        <WhyChooseUsSection />
        <FeatureHighlight />
        <TechnicalFeatureSection />
        <CallToAction />
        <Footer />
      </motion.div>
    </>
  );
};

export default Home;
