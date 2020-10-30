import React from 'react';
import MobileNav from './MobileNav';

function NavBar() {
    return (
       <>
            <svg viewBox="0 0 100 100" fill="currentColor" class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" preserveAspectRatio="none">
                 <polygon points="50,0 100,0 50,100 0,100"/>
            </svg>
            <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start">
                    <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                        <div class="flex items-center justify-between w-full md:w-auto">
                            <a href="#" aria-label="Home">
                                 <svg width="42" height="50" viewBox="0 0 42 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39.0909 9.76261C42.0325 7.62072 41.9991 4.1948 39.0163 2.11065C36.0336 0.0264894 31.2309 0.0732878 28.2893 2.21517L5.43341 18.8575C2.49182 20.9994 2.52525 24.4253 5.50801 26.5095C8.4908 28.5936 13.2934 28.5468 16.235 26.405L39.0909 9.76261Z" fill="#7A42EE"/>
                                    <path d="M36.4322 31.4576C39.3723 29.3115 39.3389 25.8788 36.3575 23.7905C33.376 21.7021 28.5756 21.749 25.6355 23.8951L2.79061 40.5703C-0.149539 42.7164 -0.116069 46.149 2.86536 48.2374C5.84678 50.3257 10.6472 50.2789 13.5873 48.1328L36.4322 31.4576Z" fill="#7A42EE"/>
                                 </svg>
                            </a>
                            <div class="-mr-2 flex items-center md:hidden">
                                <button type="button" id="main-menu" aria-label="Main menu" aria-haspopup="true" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 13H17M1 1H17H1ZM1 7H17H1Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="hiddden md:block md:ml-10 md:pr-4">
                        <a href="#" class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Product</a>
                        <a href="#" class="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Features</a>
                        <a href="#" class="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Marketplace</a>
                        <a href="#" class="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Company</a>
                        <a href="#" class="ml-8 font-medium text-indigo-600 hover:text-indigo-700 transition duration-150 ease-in-out">Log in</a>
                    </div>
                </nav>
            </div>

         <MobileNav/>
       </>
    )
}

export default NavBar
