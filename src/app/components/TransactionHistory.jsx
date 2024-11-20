import React from 'react'
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'

import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

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

function TransactionHistory() {
    return (
        <div className='p-3 mt-5 rounded-md bg-white dark:bg-black dark:text-white border-[0.5px] border-gray-200 dark:border-[0.5px] dark:border-white'>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white">Transaction History</h2>
            <div className="mt-4 pt-5">
                <div className="mx-2 my-2 overflow-x-auto sm:mx-0 lg:mx-0">
                    <div className="inline-block min-w-full py-0 align-middle sm:px-2 lg:px-2">
                        <table className="min-w-full divide-y divide-gray-300">
                            <tbody className="divide-y divide-gray-200 dark:bg-blackbg-white">
                                {people.map((person) => (
                                    <tr key={person.email}>
                                        <td className="whitespace-nowrap py-1 pl-4 pr-3 text-sm sm:pl-0">
                                            <div className="flex items-center">
                                                <div className="h-8 w-8 shrink-0">
                                                    <img alt="" src={person.image} className="h-8 w-8 rounded-full" />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="font-medium text-gray-900 dark:text-white">{person.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-1 text-sm text-gray-500 dark:text-white">
                                            <div className="text-gray-900 dark:text-white">{person.title}</div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-1 text-sm text-gray-500 dark:text-white">
                                            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                Active
                                            </span>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-1 text-sm text-gray-500 dark:text-white">{person.role}</td>
                                        <td className="relative whitespace-nowrap py-1 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                            <Menu as="div" className="flex-none">
                                                <MenuButton className="m-2.5 block p-2.5 text-gray-500 dark:text-white hover:text-gray-900">
                                                    <span className="sr-only">Open options</span>
                                                    <EllipsisVerticalIcon aria-hidden="true" className="h-5 w-5" />
                                                </MenuButton>
                                                {/* <MenuItems
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
                                                </MenuItems> */}
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
    )
}

export default TransactionHistory