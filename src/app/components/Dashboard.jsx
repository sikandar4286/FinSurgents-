import React from 'react'
import SpendingBarChart from './SpendingBarChart'

import {
    CurrencyDollarIcon
} from '@heroicons/react/24/outline'
import YearlyBarChart from './BarChart'
import TransactionHistory from './TransactionHistory'
import { colors } from '../utils/constants'

const Dashboard = () => {

    const stats = [
        { name: 'Total Balance', stat: 'Rs. 3,120.54' },
        { name: 'Total Spending', stat: 'Rs. 42.43' },
        { name: 'Money Saved', stat: 'Rs. 501.65' },
    ]

    return (
        <div className="mx-auto max-w-7xl px-0 pt-4 pb-16 sm:px-6 lg:px-2">
            <div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-4 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {/* Invoice summary */}
                <div className=" lg:col-start-3 lg:row-end-1">
                    <div className="rounded-lg bg-white dark:bg-black dark:text-white dark:ring-1 dark:ring-white shadow-sm ring-1 ring-gray-900/5">
                        <dl className="flex flex-col lg:flex-wrap">
                            <div className="flex-auto pl-6 pt-6">
                                <dt className="text-xl font-semibold text-gray-900 dark:text-white">Activity</dt>
                                {/* <dd className="mt-1 text-base font-semibold text-gray-900">$10,560.00</dd> */}
                            </div>

                            <div className="-top-8 relative flex flex-row lg:flex-col justify-center items-center p-0 h-[40vh]">
                                <div className={`w-1/3 lg:w-1/2 bg-[#25C935] rounded-full flex items-center justify-center relative aspect-square`} >
                                    <div className='flex flex-col items-center space-y-1'>
                                        <p className="font-extrabold text-black text-sm ">RS: 3,200</p>
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
                        </dl>
                        <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
                            <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                                Comparison(Month)
                            </a>
                            <SpendingBarChart />
                        </div>
                    </div>
                </div>

                {/* Invoice */}
                <div className="py-0 shadow-sm ring-1 ring-gray-900/5 sm:rounded-lg lg:col-span-2 lg:row-span-2 lg:row-end-2">
                    <dl className="mt-0 grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {stats.map((item) => (
                            <div key={item.name} className="overflow-hidden rounded-lg bg-white dark:bg-black dark:ring-1 dark:ring-white px-4 py-5 shadow sm:p-6">
                                <dt className="font-medium text-black h-5 w-5 p-6 flex items-center rounded-full bg-gray-100 dark:bg-black dark:text-white">
                                    <div className='flex'>
                                        <CurrencyDollarIcon aria-hidden="true" className="-ml-4 h-8 w-8 text-black dark:text-white" />
                                    </div>
                                </dt>

                                <dt className="truncate text-sm font-medium text-gray-500  dark:text-white">{item.name}</dt>
                                <dd className="mt-1 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.stat}</dd>
                            </div>
                        ))}
                    </dl>
                    <div className='bg-white p-2 mt-2 rounded-md  dark:bg-black dark:ring-1 dark:ring-white'>
                        <h2 className="text-base font-semibold text-gray-900 dark:text-white">Overview</h2>
                        <YearlyBarChart />
                    </div>
                </div>
            </div>

            <TransactionHistory />

        </div>
    )
}

export default Dashboard