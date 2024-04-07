"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import BackgroundImage from "../../public/background.jpeg";
import BackgroundImageTwo from "../../public/bg-min.jpeg";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
];

export default function HeoSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#F2EFE5] relative h-screen w-full">
      <header className="fixed inset-x-0 top-4 z-50 bg-[#F2EFE5]/50 backdrop-blur-md rounded-full w-[90%] lg:w-[75%] mx-auto border-[1px] border-stone-700">
        <nav
          className="flex items-center justify-between px-6 py-5 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <p className="text-gray-900 text-2xl font-semibold font-secondary">
                farmeaze
              </p>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12 lg:items-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}

            <button
              type="button"
              className="rounded-full bg-stone-800 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-stone-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600"
            >
              Contact Us
            </button>
          </div>
        </nav>

        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}

                  <button
                    type="button"
                    className="rounded-full bg-stone-800 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-stone-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8 z-20">
        <div className="w-[calc(90%+3rem)] lg:w-[calc(75%+3rem)] mx-auto py-28 sm:py-48 lg:py-44">
          <div className="space-y-4">
            <h1 className="text-3xl text-pretty font-secondary font-bold text-green-900 sm:text-7xl">
              Delivering agri-produce at scale.
            </h1>

            <p className="text-base leading-8 text-stone-700 lg:text-lg">
              We delivers on-demand & offers expert analysis, Your one-stop
              agri-business solution.
            </p>

            <button
              type="button"
              className="rounded-full bg-stone-800 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-stone-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-0 h-full w-full bg-gradient-to-b from-black/0 to-yellow-500/20 rounded-b-3xl lg:rounded-b-[5rem] z-10" />

      <Image
        src={BackgroundImage}
        priority
        alt="farming land"
        placeholder="blur"
        fill
        className="object-cover object-right rounded-b-3xl lg:rounded-b-[5rem]"
      />
    </div>
  );
}
