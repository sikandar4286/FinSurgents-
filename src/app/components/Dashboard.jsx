import React from 'react'
import SpendingBarChart from './SpendingBarChart'

import {
    CurrencyDollarIcon
} from '@heroicons/react/24/outline'
import YearlyBarChart from './BarChart'
import TransactionHistory from './TransactionHistory'
import { colors } from '../utils/constants'
import Image from 'next/image'
import IconComponent from '../components/DynamicLogo'


const Dashboard = () => {

    const stats = [
        { name: 'Total Balance', stat: 'Rs. 3,120.54', icon: 'emptyWallet', size: "31", bg: '#25C935', color: '#434343' },
        { name: 'Total Spending', stat: 'Rs. 42.43', icon: 'emptyWallet', size: "31", bg: '#434343', color: '' },
        { name: 'Money Saved', stat: 'Rs. 501.65', icon: 'dollarSquare', size: "24", bg: '#434343', color: '' },
    ]

    return (
        <div className="mx-auto max-w-7xl px-0 pt-4 pb-16 sm:px-6 lg:px-2">
            <div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-4 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {/* Invoice summary */}
                <div className="shadow-md lg:col-start-3 lg:row-end-1">
                    <div className="flex flex-col justify-evenly rounded-lg bg-white dark:bg-black dark:text-white dark:ring-1 dark:ring-white shadow-sm ring-1 ring-gray-900/5">
                        <dl className="flex flex-col lg:flex-wrap">
                            <div className="flex-auto pl-6 pt-6">
                                <dt className="text-2xl font-bold font-poppins text-gray-900 dark:text-white">Activity</dt>
                            </div>

                            <div className="-top-4 relative flex flex-row lg:flex-col justify-center items-center p-0 h-[40vh]">
                                <div className={`w-[161px] bg-[#25C935] rounded-full flex items-center justify-center relative aspect-square`} >
                                    <div className='flex flex-col items-center space-y-1'>
                                        <p className="text-xl font-bold font-poppins text-black">RS: 3,200</p>
                                        <p className="text-sm font-normal font-poppins text-black ">Online Shopping</p>
                                    </div>
                                </div>

                                <div className="absolute top-[60%]  left-[23%] lg:left-[18%] w-[130px] bg-[#F5F5F5] rounded-full flex items-center justify-center shadow-lg aspect-square">
                                    <div className='flex flex-col items-center space-y-1'>
                                        <p className="text-xl font-bold font-poppins text-black">RS: 1,200</p>
                                        <p className="text-sm font-normal font-poppins text-black">Taxi</p>
                                    </div>
                                </div>

                                <div className="absolute top-[73%]  left-[45%] w-[124px] bg-[#545454] rounded-full flex items-center justify-center shadow-lg aspect-square">
                                    <div className='flex flex-col items-center space-y-1'>
                                        <p className="text-xl font-bold font-poppins text-white">RS: 5,200</p>
                                        <p className="text-sm font-normal font-poppins text-white">Food</p>
                                    </div>
                                </div>
                            </div>
                        </dl>
                        <div className="pt-24 mt-6 px-6 py-6">
                            <a href="#" className="text-lg font-bold font-poppins text-gray-900 dark:text-white">
                                Comparison(Month)
                            </a>
                            <SpendingBarChart />
                        </div>
                    </div>
                </div>

                <div className="py-0  sm:rounded-lg lg:col-span-2 lg:row-span-2 lg:row-end-2">
                    <dl className="mt-0 grid grid-cols-1 gap-6 sm:grid-cols-3">
                        {stats.map((item) => (
                            <div
                                key={item.name}
                                className="group overflow-hidden rounded-lg bg-[#F1F1F1] hover:bg-[#424242] dark:bg-black dark:ring-1 dark:ring-white px-4 py-5 shadow sm:p-6"
                            >
                                <dt className="flex items-center justify-center font-medium text-black h-12 w-12 rounded-full bg-[#A9A9A933] group-hover:bg-[#25C93533] dark:bg-white dark:group-hover:text-green-400">
                                    <IconComponent
                                        icon={item.icon}
                                        width={item.size}
                                        height={item.size}
                                        color={'#434343'} // Default color
                                        hoverColor={'#25C935'} // Hover color
                                        className="group-hover:fill-[#25C935]" // Dynamically apply hover color
                                    />
                                </dt>

                                <dt className="truncate font-normal font-poppins mt-4 text-lg text-gray-500 group-hover:text-[#ABABAB] dark:text-white dark:group-hover:text-yellow-400">
                                    {item.name}
                                </dt>

                                <dd className="mt-2 text-xl font-poppins font-semibold tracking-tight text-gray-900 group-hover:text-white dark:text-white dark:group-hover:text-cyan-300">
                                    {item.stat}
                                </dd>
                            </div>
                        ))}

                    </dl>
                    <div className='min-h-[425px] flex flex-col justify-between shadow-md ring-1 ring-gray-900/5 bg-white p-2 mt-2 rounded-md  dark:bg-black dark:ring-1 dark:ring-white'>
                        <h2 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white">Overview</h2>
                        <YearlyBarChart />
                    </div>
                </div>
            </div>

            <TransactionHistory />
        </div>
    )
}

export default Dashboard