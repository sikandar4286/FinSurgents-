'use client'
import localFont from "next/font/local";
import "./globals.css";

import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  InformationCircleIcon,
  EllipsisHorizontalCircleIcon,
} from '@heroicons/react/24/outline'

import Image from 'next/image'
import IconComponent from './components/DynamicLogo'
import Dashboard from './components/Dashboard'
import { colors } from './utils/constants'
import { useRouter } from "next/router";
import Link from "next/link";
import { ThemeProvider } from "./hooks/ThemeContext";

const navigation = [
  { name: 'Dashboard', href: '/', icon: 'dashBoardIcon', current: true },
  { name: 'Payments', href: '#', icon: 'paymentIcon', current: false },
  { name: 'Ledger', href: '#', icon: 'ledgerIcon', current: false },
  { name: 'Notifications', href: '#', icon: 'notificationIcon', current: false },
  { name: 'Settings', href: '#', icon: 'settingIcon', current: false },
]
const teams = [
  { id: 1, name: 'Theme', href: '/setting', initial: 'themeLogo.png', current: false },
  { id: 2, name: 'Security', href: '#', initial: 'shield-security.png', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div>
            <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
              <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
              />

              <div className="fixed inset-0 flex">
                <DialogPanel
                  transition
                  className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                >
                  <TransitionChild>
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                      <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                      </button>
                    </div>
                  </TransitionChild>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      <Image
                        src="/images/finsurgentslogo.png"
                        alt="Description of the icon"
                        width={30}
                        height={30}
                      />
                      <p className='text-white text-lg font-medium'>FinSurgents</p>

                    </div>
                    <nav className="flex flex-1 flex-col">
                      <div className="text-xs/6 font-semibold text-white py-3">Manage</div>
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? 'bg-gray-800 text-white'
                                      : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                    'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                  )}>
                                  <IconComponent icon={item.icon} color={item.current ? colors.primary : '#C1C1C1'} />
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs/6 font-semibold text-gray-400">Preferences</div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? 'bg-gray-800 text-white'
                                      : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                    'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                  )}
                                >
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center text-[0.625rem] font-medium">
                                    <Image
                                      src={`/images/${team.initial}`}
                                      alt="Description of the icon"
                                      width={20}
                                      height={10}
                                    />
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white"
                          >
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center font-medium">
                              <Image
                                src={`/images/personLogo.png`}
                                alt="Description of the icon"
                                width={35}
                                height={30}
                              />
                            </span>
                            <div>
                              <p className='font-bold text-base text-white'>
                                Imran Khan
                              </p>
                              <p className='font-light text-xs text-[#C1C1C1]'>
                                ik@finsurgents.com
                              </p>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </DialogPanel>
              </div>
            </Dialog>

            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#181818] px-6 pb-4 dark:bg-black dark:text-white" >
                <div className="flex h-20 shrink-0 items-center">
                  <Image
                    src="/images/finsurgentslogo.png"
                    alt="Description of the icon"
                    width={30}
                    height={30}
                  />
                  <p className='text-white text-lg font-medium'>FinSurgents</p>
                </div>
                <nav className="flex flex-1 flex-col">
                  <div className="text-xs/6 font-semibold text-white py-3">Manage</div>
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-gray-800 text-white'
                                  : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                              )}>
                              <IconComponent icon={item.icon} color={item.current ? colors.primary : '#C1C1C1'} />
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <div className="text-xs/6 font-semibold text-white">Preferences</div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {teams.map((team) => (
                          <li key={team.name}>
                            <Link
                              href={team.href}
                              className={classNames(
                                team.current
                                  ? 'bg-gray-800 text-white'
                                  : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                              )}>
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center text-[0.625rem] font-medium">
                                <Image
                                  src={`/images/${team.initial}`}
                                  alt="Description of the icon"
                                  width={20}
                                  height={10}
                                />
                              </span>
                              <span className="truncate">{team.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="mt-auto">
                      <a
                        href="#"
                        className="group -mx-2 flex gap-x-1 items-center rounded-md p-1 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white"
                      >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center font-medium">
                          <Image
                            src={`/images/personLogo.png`}
                            alt="Description of the icon"
                            width={35}
                            height={30}
                          />
                        </span>
                        <div>
                          <p className='font-bold text-base text-white'>
                            Imran Khan
                          </p>
                          <p className='font-light text-xs text-[#C1C1C1]'>
                            ik@finsurgents.com
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="lg:pl-72">
              <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 dark:bg-black dark:text-white">
                <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                  <span className="sr-only">Open sidebar</span>
                  <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                </button>

                {/* Separator */}
                <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 dark:bg-black dark:text-white lg:hidden" />

                <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 items-center dark:bg-black dark:text-white">
                  <div className='relative flex flex-1 items-center text-black font-bold dark:text-white'>
                    Dashboard
                  </div>
                  <div className="flex items-center gap-x-1 lg:gap-x-1">
                    <button type="button" className="p-1 text-black bg-gray-200 dark:bg-black dark:text-white dark:border-[0.5px] dark:border-white rounded-md hover:text-gray-500">
                      <span className="sr-only">View notifications</span>
                      <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5" />
                    </button>
                    <button type="button" className=" p-1 text-black bg-gray-200 dark:bg-black dark:text-white dark:border-[0.5px] dark:border-white rounded-md hover:text-gray-500">
                      <span className="sr-only">View notifications</span>
                      <InformationCircleIcon aria-hidden="true" className="h-5 w-5" />
                    </button>
                    <button type="button" className=" p-1 text-black bg-gray-200 dark:bg-black dark:text-white dark:border-[0.5px] dark:border-white rounded-md hover:text-gray-500">
                      <span className="sr-only">View notifications</span>
                      <EllipsisHorizontalCircleIcon aria-hidden="true" className="h-5 w-5" />
                    </button>

                  </div>
                </div>
              </div>

              {/* <Dashboard /> */}
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
