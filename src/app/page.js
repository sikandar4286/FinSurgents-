'use client'
import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
  InformationCircleIcon,
  EllipsisHorizontalCircleIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

import {
  CalendarDaysIcon,
  CreditCardIcon,
  EllipsisVerticalIcon,
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  UserCircleIcon,
  XMarkIcon as XMarkIconMini,
  ChevronDownIcon
} from '@heroicons/react/20/solid'


// import { ChevronDownIcon, UserCircleIcon, CalendarDaysIcon, CreditCardIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import IconComponent from './components/DynamicLogo'
import YearlyBarChart from './components/BarChart'
import SpendingBarChart from './components/SpendingBarChart'

const navigation = [
  { name: 'Dashboard', href: '#', icon: 'dashBoardIcon', current: true },
  { name: 'Payments', href: '#', icon: 'paymentIcon', current: false },
  { name: 'Ledger', href: '#', icon: 'ledgerIcon', current: false },
  { name: 'Notifications', href: '#', icon: 'notificationIcon', current: false },
  { name: 'Settings', href: '#', icon: 'settingIcon', current: false },
]
const teams = [
  { id: 1, name: 'Theme', href: '#', initial: 'themeLogo.png', current: false },
  { id: 2, name: 'Security', href: '#', initial: 'shield-security.png', current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

const invoice = {
  subTotal: '$8,800.00',
  tax: '$1,760.00',
  total: '$10,560.00',
  items: [
    {
      id: 1,
      title: 'Logo redesign',
      description: 'New logo and digital asset playbook.',
      hours: '20.0',
      rate: '$100.00',
      price: '$2,000.00',
    },
    {
      id: 2,
      title: 'Website redesign',
      description: 'Design and program new company website.',
      hours: '52.0',
      rate: '$100.00',
      price: '$5,200.00',
    },
    {
      id: 3,
      title: 'Business cards',
      description: 'Design and production of 3.5" x 2.0" business cards.',
      hours: '12.0',
      rate: '$100.00',
      price: '$1,200.00',
    },
    {
      id: 4,
      title: 'T-shirt design',
      description: 'Three t-shirt design concepts.',
      hours: '4.0',
      rate: '$100.00',
      price: '$400.00',
    },
  ],
}

const activity = [
  { id: 1, type: 'created', person: { name: 'Chelsea Hagon' }, date: '7d ago', dateTime: '2023-01-23T10:32' },
  { id: 2, type: 'edited', person: { name: 'Chelsea Hagon' }, date: '6d ago', dateTime: '2023-01-23T11:03' },
  { id: 3, type: 'sent', person: { name: 'Chelsea Hagon' }, date: '6d ago', dateTime: '2023-01-23T11:24' },
  {
    id: 4,
    type: 'commented',
    person: {
      name: 'Chelsea Hagon',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    comment: 'Called client, they reassured me the invoice would be paid by the 25th.',
    date: '3d ago',
    dateTime: '2023-01-23T15:56',
  },
  { id: 5, type: 'viewed', person: { name: 'Alex Curren' }, date: '2d ago', dateTime: '2023-01-24T09:12' },
  { id: 6, type: 'paid', person: { name: 'Alex Curren' }, date: '1d ago', dateTime: '2023-01-24T09:20' },
]
const moods = [
  { name: 'Excited', value: 'excited', icon: FireIcon, iconColor: 'text-white', bgColor: 'bg-red-500' },
  { name: 'Loved', value: 'loved', icon: HeartIcon, iconColor: 'text-white', bgColor: 'bg-pink-400' },
  { name: 'Happy', value: 'happy', icon: FaceSmileIcon, iconColor: 'text-white', bgColor: 'bg-green-400' },
  { name: 'Sad', value: 'sad', icon: FaceFrownIcon, iconColor: 'text-white', bgColor: 'bg-yellow-400' },
  { name: 'Thumbsy', value: 'thumbsy', icon: HandThumbUpIcon, iconColor: 'text-white', bgColor: 'bg-blue-500' },
  { name: 'I feel nothing', value: null, icon: XMarkIconMini, iconColor: 'text-gray-400', bgColor: 'bg-transparent' },
]

const stats = [
  { name: 'Total Balance', stat: 'Rs. 3,120.54' },
  { name: 'Total Spending', stat: 'Rs. 42.43' },
  { name: 'Money Saved', stat: 'Rs. 501.65' },
]

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    email: '0lindsay.walton@example.com',
    role: 'Member',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    email: '1lindsay.walton@example.com',
    role: 'Member',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    email: '2lindsay.walton@example.com',
    role: 'Member',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
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
                <img
                  alt="Your Company"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto"
                />
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-800 text-white'
                                : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                              'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                            )}
                          >
                            {/* <item.icon aria-hidden="true" className="h-6 w-6 shrink-0" /> */}
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <div className="text-xs/6 font-semibold text-gray-400">Your teams</div>
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


                            {/* <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                              {team.initial}
                            </span> */}
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
                      <Cog6ToothIcon aria-hidden="true" className="h-6 w-6 shrink-0" />
                      Settings
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#181818] px-6 pb-4">
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
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                          'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold items-center',
                        )}
                      >
                        <IconComponent icon={item.icon} color={item.current ? '#25C935' : '#C1C1C1'} />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className="text-xs/6 font-semibold text-white">Preferences</div>
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
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>

          {/* Separator */}
          <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden" />

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 items-center">
            <div className='relative flex flex-1 items-center text-black font-bold'>
              Dashboard
            </div>
            <div className="flex items-center gap-x-1 lg:gap-x-1">
              <button type="button" className="p-1 text-black bg-gray-200 rounded-md hover:text-gray-500">
                <span className="sr-only">View notifications</span>
                <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5" />
              </button>
              <button type="button" className=" p-1 text-black bg-gray-200 rounded-md hover:text-gray-500">
                <span className="sr-only">View notifications</span>
                <InformationCircleIcon aria-hidden="true" className="h-5 w-5" />
              </button>
              <button type="button" className=" p-1 text-black bg-gray-200 rounded-md hover:text-gray-500">
                <span className="sr-only">View notifications</span>
                <EllipsisHorizontalCircleIcon aria-hidden="true" className="h-5 w-5" />
              </button>

              {/* Separator */}
              {/* <div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" /> */}

              {/* Profile dropdown */}
              {/* <Menu as="div" className="relative">
                <MenuButton className="-m-1.5 flex items-center p-1.5">
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-8 w-8 rounded-full bg-gray-50"
                  />
                  <span className="hidden lg:flex lg:items-center">
                    <span aria-hidden="true" className="ml-4 text-sm/6 font-semibold text-gray-900">
                      Tom Cook
                    </span>
                    <ChevronDownIcon aria-hidden="true" className="ml-2 h-5 w-5 text-gray-400" />
                  </span>
                </MenuButton>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  {userNavigation.map((item) => (
                    <MenuItem key={item.name}>
                      <a
                        href={item.href}
                        className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                      >
                        {item.name}
                      </a>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu> */}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-0 pt-4 pb-16 sm:px-6 lg:px-2">
          <div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-4 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Invoice summary */}
            <div className=" lg:col-start-3 lg:row-end-1">
              <div className="rounded-lg bg-white shadow-sm ring-1 ring-gray-900/5">
                <dl className="flex flex-col lg:flex-wrap">
                  <div className="flex-auto pl-6 pt-6">
                    <dt className="text-xl font-semibold text-gray-900">Activity</dt>
                    {/* <dd className="mt-1 text-base font-semibold text-gray-900">$10,560.00</dd> */}
                  </div>

                  <div className="-top-8 relative flex flex-row lg:flex-col justify-center items-center p-0 h-[40vh]">
                    <div className="w-1/3 lg:w-1/2 bg-[#25C935] rounded-full flex items-center justify-center relative aspect-square">
                      <div className='flex flex-col items-center space-y-1'>
                        <p className="font-extrabold text-black text-sm">RS: 3,200</p>
                        <p className="text-black text-sm">Online Shopping</p>
                      </div>
                    </div>

                    <div className="absolute top-[60%]  left-[23%] lg:left-[18%] w-3/12 lg:w-1/3 bg-[#F5F5F5] rounded-full flex items-center justify-center shadow-lg aspect-square">
                      <div className='flex flex-col items-center space-y-1'>

                        <p className="font-extrabold text-black text-sm">RS: 1,200</p>
                        <p className="text-black text-sm">Taxi</p>
                      </div>
                    </div>

                    <div className="absolute top-[70%]  left-[45%] w-3/12 lg:w-1/3 bg-[#545454] rounded-full flex items-center justify-center shadow-lg aspect-square">
                      <div className='flex flex-col items-center space-y-1'>

                        <p className="font-extrabold text-white text-sm">RS: 5,200</p>
                        <p className="text-white text-sm">Food</p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                    <dt className="flex-none">
                      <span className="sr-only">Client</span>
                      <UserCircleIcon aria-hidden="true" className="h-6 w-5 text-gray-400" />
                    </dt>
                    <dd className="text-sm/6 font-medium text-gray-900">Alex Curren</dd>
                  </div>
                  <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                    <dt className="flex-none">
                      <span className="sr-only">Due date</span>
                      <CalendarDaysIcon aria-hidden="true" className="h-6 w-5 text-gray-400" />
                    </dt>
                    <dd className="text-sm/6 text-gray-500">
                      <time dateTime="2023-01-31">January 31, 2023</time>
                    </dd>
                  </div>
                  <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                    <dt className="flex-none">
                      <span className="sr-only">Status</span>
                      <CreditCardIcon aria-hidden="true" className="h-6 w-5 text-gray-400" />
                    </dt>
                    <dd className="text-sm/6 text-gray-500">Paid with MasterCard</dd>
                  </div> */}
                </dl>
                <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
                  <a href="#" className="text-sm/6 font-semibold text-gray-900">
                    Comparison(Month)
                    {/* <span aria-hidden="true">&rarr;</span> */}
                  </a>

                  <SpendingBarChart />

                </div>
              </div>
            </div>

            {/* Invoice */}
            <div className="py-0 shadow-sm ring-1 ring-gray-900/5 sm:rounded-lg lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <dl className="mt-0 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                    <dt className="font-medium text-black h-5 w-5 p-6 flex items-center rounded-full bg-gray-100">
                      <div className='flex'>
                        <CurrencyDollarIcon aria-hidden="true" className="-ml-4 h-8 w-8 text-black" />
                      </div>
                    </dt>

                    <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
                    <dd className="mt-1 text-xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
                  </div>
                ))}
              </dl>
              <div className='bg-white p-2 mt-2 rounded-md'>

                <h2 className="text-base font-semibold text-gray-900">Overview</h2>
                <YearlyBarChart />
              </div>
            </div>
          </div>

          <div className='p-3 mt-5 rounded-md bg-white'>

            <h2 className="text-base font-semibold text-gray-900">Transaction History</h2>


            <div className="mt-4 pt-5">
              <div className="mx-2 my-2 overflow-x-auto sm:mx-0 lg:mx-0">
                <div className="inline-block min-w-full py-0 align-middle sm:px-2 lg:px-2">
                  <table className="min-w-full divide-y divide-gray-300">
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {people.map((person) => (
                        <tr key={person.email}>
                          <td className="whitespace-nowrap py-1 pl-4 pr-3 text-sm sm:pl-0">
                            <div className="flex items-center">
                              <div className="h-8 w-8 shrink-0">
                                <img alt="" src={person.image} className="h-8 w-8 rounded-full" />
                              </div>
                              <div className="ml-4">
                                <div className="font-medium text-gray-900">{person.name}</div>
                                {/* <div className="mt-1 text-gray-500">{person.email}</div> */}
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-1 text-sm text-gray-500">
                            <div className="text-gray-900">{person.title}</div>
                            {/* <div className="mt-1 text-gray-500">{person.department}</div> */}
                          </td>
                          <td className="whitespace-nowrap px-3 py-1 text-sm text-gray-500">
                            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                              Active
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-3 py-1 text-sm text-gray-500">{person.role}</td>
                          <td className="relative whitespace-nowrap py-1 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                            {/* <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit<span className="sr-only">, {person.name}</span>
                            </a> */}
                            <Menu as="div" className="flex-none">
                              <MenuButton className="m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                                <span className="sr-only">Open options</span>
                                <EllipsisVerticalIcon aria-hidden="true" className="h-5 w-5" />
                              </MenuButton>
                              <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                              >
                                <MenuItem>
                                  <a
                                    href="#"
                                    className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                  >
                                    View profile<span className="sr-only">, {person.name}</span>
                                  </a>
                                </MenuItem>
                                <MenuItem>
                                  <a
                                    href="#"
                                    className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                  >
                                    Message<span className="sr-only">, {person.name}</span>
                                  </a>
                                </MenuItem>
                              </MenuItems>
                            </Menu>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
