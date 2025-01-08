import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

const navigation = [
    { name: '🏠 Home', to: '/' },
    { name: '📂 Projects', to: '/projects' },
    { name: '🎓 Education & Skills', to: '/Education_skills' },
    { name: '🎥 Movies', to: '/movies' }
];

export default function Header() {
    return (
        <Disclosure as="nav" className="bg-black">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-center">  {/* Center Content */}
                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-800 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="block size-6 group-data-[open]:hidden" aria-hidden="true" />
                            <XMarkIcon className="hidden size-6 group-data-[open]:block" aria-hidden="true" />
                        </DisclosureButton>
                    </div>

                    {/* Navbar Centered Items */}
                    <div className="flex flex-1 justify-center">
                        <div className="hidden sm:block">
                            <div className="flex space-x-8"> {/* Adjusted spacing for even look */}
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className="text-gray-300 hover:text-gray-100 hover:bg-gray-800 px-4 py-2 rounded transition duration-300 ease-in-out"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            className="block text-gray-300 hover:text-gray-100 hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
