// 'use client'

// import Link from 'next/link'
// import {
//   Popover,
//   PopoverButton,
//   PopoverBackdrop,
//   PopoverPanel,
// } from '@headlessui/react'
// import clsx from 'clsx'

// import { Button } from '@/components/Button'
// import { Container } from '@/components/Container'
// import { Logo } from '@/components/Logo'
// import { NavLink } from '@/components/NavLink'

// function MobileNavLink({
//   href,
//   children,
// }: {
//   href: string
//   children: React.ReactNode
// }) {
//   return (
//     <PopoverButton as={Link} href={href} className="block w-full p-2">
//       {children}
//     </PopoverButton>
//   )
// }

// function MobileNavIcon({ open }: { open: boolean }) {
//   return (
//     <svg
//       aria-hidden="true"
//       className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
//       fill="none"
//       strokeWidth={2}
//       strokeLinecap="round"
//     >
//       <path
//         d="M0 1H14M0 7H14M0 13H14"
//         className={clsx(
//           'origin-center transition',
//           open && 'scale-90 opacity-0',
//         )}
//       />
//       <path
//         d="M2 2L12 12M12 2L2 12"
//         className={clsx(
//           'origin-center transition',
//           !open && 'scale-90 opacity-0',
//         )}
//       />
//     </svg>
//   )
// }

// function MobileNavigation() {
//   return (
//     <Popover>
//       <PopoverButton
//         className="relative z-10 flex h-8 w-8 items-center justify-center focus:not-data-focus:outline-hidden"
//         aria-label="Toggle Navigation"
//       >
//         {({ open }) => <MobileNavIcon open={open} />}
//       </PopoverButton>
//       <PopoverBackdrop
//         transition
//         className="fixed inset-0 bg-slate-300/50 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
//       />
//       <PopoverPanel
//         transition
//         className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 ring-1 shadow-xl ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
//       >
//         <MobileNavLink href="#features">About Us</MobileNavLink>
//         <MobileNavLink href="#testimonials">Products</MobileNavLink>
//         <MobileNavLink href="#pricing">Pricing</MobileNavLink>
//         <hr className="m-2 border-slate-300/40" />
//         <MobileNavLink href="/login">Sign in</MobileNavLink>
//       </PopoverPanel>
//     </Popover>
//   )
// }

// export function Header() {
//   return (
//     <header className="py-10">
//       <Container>
//         <nav className="relative z-50 flex justify-between">
//           <div className="flex items-center md:gap-x-12">
//             <Link href="#" aria-label="Home">
//               <Logo className="h-10 w-auto" />
//             </Link>
//             <div className="hidden md:flex md:gap-x-6">
//               <NavLink href="#features">About Us</NavLink>
//               <NavLink href="#testimonials">Products</NavLink>
//               <NavLink href="#pricing">Pricing</NavLink>
//             </div>
//           </div>
//           <div className="flex items-center gap-x-5 md:gap-x-8">
//             <div className="hidden md:block">
//               <NavLink href="/login">Sign in</NavLink>
//             </div>
//             <Button href="/register" color="blue">
//               <span>
//                 Get started <span className="hidden lg:inline">today</span>
//               </span>
//             </Button>
//             <div className="-mr-1 md:hidden">
//               <MobileNavigation />
//             </div>
//           </div>
//         </nav>
//       </Container>
//     </header>
//   )
// }
'use client'

import { useState } from 'react';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/20/solid';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const productCategories = [
    { name: "Sugar", description: "Premium quality sugar from sustainable sources", path: "/products/sugar" },
    { name: "Spices", description: "Aromatic spices sourced from around the world", path: "/products/spices" },
    { name: "Food Grains", description: "Nutritious and high-quality food grains", path: "/products/food-grains" },
    { name: "Tea", description: "Fine teas from the best plantations", path: "/products/tea" },
    { name: "Pulses", description: "Protein-rich pulses for healthy meals", path: "/products/pulses" },
    { name: "Agro Feed", description: "Quality feed for livestock and agriculture", path: "/products/agro-feed" }
  ];

  // const callsToAction = [
  //   { name: "View All Products", path: "/products" },
  //   { name: "Download Catalog", path: "/catalog" },
  //   { name: "Contact Sales", path: "/contact" },
  // ];

  return (
<header className="relative isolate z-10 bg-gradient-to-r from-green-100 via-green-200 to-green-300 shadow-sm transition-all duration-500">
{/* Top Contact Bar */}
      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-3 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-3 md:mb-0">
              <a href="/" className="flex items-center">
                <span className="font-bold text-green-700 text-2xl">UMA</span>
                <span className="font-bold text-gray-800 text-2xl"> EXPORTS</span>
                <span className="text-sm text-green-600 ml-1">LTD.</span>
              </a>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="flex items-center group">
                <div className="text-orange-500 mr-3 bg-orange-50 rounded-full p-2 group-hover:bg-orange-100 transition-all">
                  <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-semibold text-gray-700 group-hover:text-orange-500 transition-colors">+91-33-22811396/97</div>
                  <div className="text-xs text-gray-500">Make A Call</div>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="text-orange-500 mr-3 bg-orange-50 rounded-full p-2 group-hover:bg-orange-100 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-700 group-hover:text-orange-500 transition-colors">info@umaexports.net.in</div>
                  <div className="text-xs text-gray-500">Get An Estimate</div>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="text-orange-500 mr-3 bg-orange-50 rounded-full p-2 group-hover:bg-orange-100 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-700 group-hover:text-orange-500 transition-colors">Kolkata - 700 017, India</div>
                  <div className="text-xs text-gray-500">Location</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav aria-label="Global" className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <a href="/" className="text-green-700 font-medium text-sm lg:hidden">UMA EXPORTS</a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        <PopoverGroup className="hidden lg:flex lg:gap-x-8">
          <a href="/" className="text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors">
            HOME
          </a>
          <a href="/about" className="text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors">
            ABOUT US
          </a>
          
          <Popover>
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">
              OUR PRODUCTS
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-orange-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="mx-auto grid max-w-7xl grid-cols-3 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                {productCategories.map((item) => (
                  <div key={item.name} className="group relative rounded-lg p-6 text-sm hover:bg-gray-50">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-50 group-hover:bg-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <a href={item.path} className="mt-6 block font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  {/* <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.path}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div> */}
                </div>
              </div>
            </PopoverPanel>
          </Popover>

          <a href="/policy" className="text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors">
            POLICY
          </a>
          <a href="/investors" className="text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors">
            INVESTORS
          </a>
          <a href="/public-issue" className="text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors">
            PUBLIC ISSUE
          </a>
          <a href="/careers" className="text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors">
            CAREERS
          </a>
          <a href="/exports" className="text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors">
            EXPORTS
          </a>
          <a href="/contact" className="text-sm font-semibold text-gray-900 hover:text-green-600 transition-colors">
            CONTACT US
          </a>
        </PopoverGroup>
      </nav>
      
      {/* Mobile Menu Dialog */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center">
              <span className="font-bold text-green-700 text-xl">UMA</span>
              <span className="font-bold text-gray-800 text-xl"> EXPORTS</span>
              <span className="text-xs text-green-600 ml-1">LTD.</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  HOME
                </a>
                <a
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  ABOUT US
                </a>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-orange-500 hover:bg-gray-50">
                    OUR PRODUCTS
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  {/* <DisclosurePanel className="mt-2 space-y-2">
                    {[...productCategories, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.path}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel> */}
                </Disclosure>
                <a
                  href="/policy"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  POLICY
                </a>
                <a
                  href="/investors"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  INVESTORS
                </a>
                <a
                  href="/public-issue"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  PUBLIC ISSUE
                </a>
                <a
                  href="/careers"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  CAREERS
                </a>
                <a
                  href="/exports"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  EXPORTS
                </a>
                <a
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  CONTACT US
                </a>
              </div>
              <div className="py-6">
                <div className="flex items-center py-3">
                  <div className="text-orange-500 mr-3">
                    <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="font-semibold text-gray-700">+91-33-22811396/97</div>
                </div>
                <div className="flex items-center py-3">
                  <div className="text-orange-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="font-semibold text-gray-700">info@umaexports.net.in</div>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;

// export default UmaExportsHeader;
