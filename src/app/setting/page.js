'use client'
import { useState } from 'react'
import { Field, Label, Switch } from '@headlessui/react'
import { useTheme } from '../hooks/ThemeContext';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function page() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="mx-auto max-w-7xl pt-16 lg:flex lg:gap-x-16 lg:px-8">
            <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
                <div>
                    <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">Theme Setting</h2>
                    <p className="mt-1 text-sm/6 text-gray-500 dark:text-white">
                        Choose what theme you like to use throughout your account.
                    </p>

                    <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm/6">
                        <Field className="flex pt-6">
                            <Label as="dt" passive className="flex-none pr-6 font-medium text-gray-900 dark:text-white sm:w-64">
                                Enable Dark mode
                            </Label>
                            <dd className="flex flex-auto items-center justify-end">
                                <Switch
                                    checked={theme === 'light' ? false : true}
                                    onChange={toggleTheme}
                                    className="group flex w-8 cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                                    />
                                </Switch>
                            </dd>
                        </Field>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default page