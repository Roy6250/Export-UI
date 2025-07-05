'use client'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

import { useEffect } from 'react'

export default function Home() {

  // useEffect(() => {
  //   // If page loads with a hash, remove it so browser doesn't scroll
  //   if (window.location.hash) {
  //     const url = window.location.href.replace(window.location.hash, '');
  //     // Use replaceState to prevent back navigation issues
  //     window.history.replaceState(null, '', url);
  //     window.scroll(0,0)
  //   }
  // }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}


