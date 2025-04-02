import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import fresh from "../images/fresh_cleaned.jpg"

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
            Savor the Worlds Finest Flavors
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Discover a curated selection of premium fruits and vegetables, sourced directly from the most fertile farms and orchards across the globe.  Experience freshness like never before.
          </p>
          <div className="mt-8"> {/* Removed the flex container here */}
            <div className="flex flex-col sm:flex-row justify-center  gap-4"> {/* Added a new flex container */}
              <Button href="/shop" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md">
                Explore Our Selection
              </Button>
              <Button href="/about" variant="outline" className="text-green-700 hover:text-green-900 border border-green-500 hover:border-green-700">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Quality Assurance Section (Below Hero) */}
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-md bg-white">
            {/* <Image src={qualityGuarantee} alt="Quality Guarantee" width={60} height={60} className="mb-2" /> */}
            <h3 className="font-semibold text-lg text-gray-800">Uncompromising Quality</h3>
            <p className="text-sm text-gray-600">We hand-select only the best produce for our customers. Your satisfaction is our top priority.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-md bg-white">
            {/* <Image src={fastDelivery} alt="Fast Delivery" width={60} height={60} className="mb-2" /> */}
            <h3 className="font-semibold text-lg text-gray-800">Fast & Reliable Delivery</h3>
            <p className="text-sm text-gray-600">Get your fresh produce delivered quickly and safely to your doorstep. We ensure optimal freshness.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-md bg-white">
            {/* <Image src={securePayment} alt="Secure Payment" width={60} height={60} className="mb-2" /> */}
            <h3 className="font-semibold text-lg text-gray-800">Secure Online Payments</h3>
            <p className="text-sm text-gray-600">Shop with confidence knowing your payment information is always protected with our secure payment gateway.</p>
          </div>
        </div>
      </Container>
    </div>
  )
}