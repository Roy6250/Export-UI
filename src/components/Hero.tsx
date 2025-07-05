import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import fresh from "../images/fresh_cleaned.jpg"
import {
  GlobeAltIcon,
  ClipboardDocumentCheckIcon,
  DocumentCheckIcon,
  TruckIcon,
  BanknotesIcon,
  ArrowPathIcon
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
  {
    name: 'End-to-End Trade Support',
    description: 'From sourcing to customs clearance, we provide comprehensive support at every stage of the export journey.',
    icon: ArrowPathIcon, // This icon represents process or support
  }
  
];

export function Hero() {
  return (
    <div className="bg-green-100 py-12">
      <Container className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 items-center">
        {/* Left Column: Image */}
        <div className="relative">
          <Image
            src={fresh}
            alt="Fresh, Organic Produce"
            className="rounded-lg shadow-xl object-cover object-center"
            style={{ width: '100%', height: 'auto', maxHeight: '500px' }}
          />
        </div>

        {/* Right Column: Text and Buttons */}
        <div className="text-center md:text-left">
          <h1 className="font-display text-4xl font-bold tracking-tight text-green-800 sm:text-5xl lg:text-6xl">
            Why Tradeology ?
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Driven by a commitment to excellence and seamless global trade, we serve as a reliable bridge between Indian producers and international markets. Our focus is on quality sourcing, timely delivery, and customized solutions to meet the diverse requirements of buyers worldwide. At Tradeology, we prioritize building long-term partnerships founded on trust, quality, and mutual growth.
          </p>
          <div className="mt-8"> {/* Removed the flex container here */}
            <div className="flex flex-col sm:flex-row justify-center  gap-4"> {/* Added a new flex container */}
              <Button href="/#exports" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md">
                Explore Our Selection
              </Button>
              <Button href="#about" variant="outline" className="text-green-700 hover:text-green-900 border border-green-500 hover:border-green-700">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Quality Assurance Section (Below Hero) */}
      <Container className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="flex flex-col items-center text-center p-6 rounded-lg shadow-md bg-white"
          >
            <feature.icon className="h-10 w-10 text-green-600 mb-4" aria-hidden="true" />
            <h3 className="font-semibold text-lg text-gray-800">{feature.name}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </Container>

    </div>
  )
}