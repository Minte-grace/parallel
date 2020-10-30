import React from 'react'

function MobileNav() {
    return (
        <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
           <div class="rounded-lg shadow-md">
                <div class="rounded-lg bg-white shadow-xs overflow-hidden" role="menu" aria-orientation="vertical" aria-label="main-menu">
                    <div class="px-5 pt-4 flex items-center justify-between">
                        <div>
                            <svg width="42" height="50" viewBox="0 0 42 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.0909 9.76261C42.0325 7.62072 41.9991 4.1948 39.0163 2.11065C36.0336 0.0264894 31.2309 0.0732878 28.2893 2.21517L5.43341 18.8575C2.49182 20.9994 2.52525 24.4253 5.50801 26.5095C8.4908 28.5936 13.2934 28.5468 16.235 26.405L39.0909 9.76261Z" fill="#7A42EE"/>
                                <path d="M36.4322 31.4576C39.3723 29.3115 39.3389 25.8788 36.3575 23.7905C33.376 21.7021 28.5756 21.749 25.6355 23.8951L2.79061 40.5703C-0.149539 42.7164 -0.116069 46.149 2.86536 48.2374C5.84678 50.3257 10.6472 50.2789 13.5873 48.1328L36.4322 31.4576Z" fill="#7A42EE"/>
                            </svg>
                       </div>
                    <div class="-mr-2">
                        <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover-text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L13 13M1 13L13 1L1 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
            </div>
            <div class="px-2 pt-2 pb-3">
                    <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Product</a>
                    <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Features</a>
                    <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Marketplase</a>
                    <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Company</a>
            </div>
            <div>
                    <a href="#" class="block w-full px-5 py-3 text-center font-medium text-indigo-700 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out" role="menuitem">Log in</a>
            </div>
            </div>
        </div>  
      </div> 
    )
}

export default MobileNav
