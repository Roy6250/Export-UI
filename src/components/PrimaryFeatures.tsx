'use client'
import Image from 'next/image'
import Agriculture from "../images/organic.webp"

import {
  GlobeAltIcon,
  ClipboardDocumentCheckIcon,
  DocumentCheckIcon,
  TruckIcon,
  BanknotesIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Global Export Network',
    description: 'Our strong international presence enables us to deliver products across borders efficiently and reliably.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Quality-Checked Products',
    description: 'Every product we export undergoes rigorous quality inspections to ensure it meets international standards.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Hassle-Free Documentation',
    description: 'We manage all export documentation and compliance to make your import process smooth and stress-free.',
    icon: DocumentCheckIcon,
  },
  {
    name: 'Timely Shipments',
    description: 'We prioritize punctuality with well-coordinated logistics to ensure on-time delivery every time.',
    icon: TruckIcon,
  },
  {
    name: 'Competitive Pricing',
    description: 'Our pricing strategy ensures that you receive premium-quality goods at the most affordable market rates.',
    icon: BanknotesIcon,
  },
];

export function PrimaryFeatures() {
  return (
    <div id ="about" className="overflow-hidden bg-gradient-to-b from-green-100 to-green-200 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          
          {/* Left Side - Text Section */}
          <div className="lg:pr-8 lg:pt-4 h-full flex flex-col justify-center">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-green-700">About Us</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Empowering Indian Producers for a Global Market
              </p>
              <p className="mt-6 text-lg text-gray-700">
                <strong>Tradeology Exim Solutions LLP</strong> was founded by two passionate entrepreneurs from India, <strong>Mr. Kishor Kumar Sahu</strong> and <strong>Mr. Vikrant</strong>, with a mission to connect Indian farmers and artisans to global buyers.
                Backed by certifications from <strong>IIFT Delhi</strong> and deep expertise in international trade compliance, we ensure a seamless and reliable export experience.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900">Vision</h3>
                <p className="mt-1 text-gray-700">
                  To become a globally trusted export partner known for quality, integrity, and customer-centric service.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900">Mission</h3>
                <ul className="mt-2 list-disc pl-6 text-gray-700 space-y-1">
                  <li>To empower Indian producers</li>
                  <li>To deliver quality products globally</li>
                  <li>To simplify international trade for our clients</li>
                </ul>
              </div>

              
            </div>
          </div>

          {/* Right Side - Image Section */}
          <div className="h-full flex justify-center">
            <Image
              alt="Agricultural products"
              src={Agriculture}
              width={600}
              height={600}
              className="h-full w-auto rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
