'use client'
import Image from 'next/image'
import { BriefcaseIcon, GlobeAltIcon, UsersIcon } from '@heroicons/react/24/solid'
import Agriculture from "../images/organic.webp"

const features = [
  {
    name: 'Global Reach',
    description: 'We source and distribute high-quality agricultural products from top suppliers worldwide.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Industry Expertise',
    description: 'With years of experience, we ensure the best quality products and services.',
    icon: BriefcaseIcon,
  },
  {
    name: 'Trusted by Many',
    description: 'Our network includes leading manufacturers, exporters, and institutional clients.',
    icon: UsersIcon,
  },
]

export function PrimaryFeatures() {
  return (
    <div className="overflow-hidden bg-gradient-to-b from-green-100 to-green-200 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          {/* Left Side - Text Section */}
          <div className="lg:pr-8 lg:pt-4 h-full flex flex-col justify-center">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-green-700">About Us</h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Leading the Agricultural Trade Industry
              </p>
              <p className="mt-6 text-lg text-gray-700">
                We specialize in sourcing and distributing premium agricultural products such as grains, spices, and pulses.
                Our mission is to connect farmers and businesses worldwide with high-quality, sustainably sourced goods.
              </p>
              <dl className="mt-10 space-y-8 text-base text-gray-700">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-6 w-6 text-green-700" />
                      {feature.name}
                    </dt>
                    <dd className="inline"> {feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Right Side - Image Section */}
          <div className="h-full flex justify-center">
            <Image
              alt="Agricultural products"
              src={Agriculture}
              width={600}
              height={600} // Ensure image height is equal to text section
              className="h-full w-auto rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
