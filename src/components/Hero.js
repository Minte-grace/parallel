import React from 'react';
import { Spring } from 'react-spring/renderprops';

function Hero() {
    return (
        <div>
           <main class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div class="sm:text-center lg:text-left">
                    <Spring from={{opacity:0}} to={{opacity:1}} config={{delay:1000, duration:1000}}>
                        {(props) => (
                            <div style={props}>
                                 <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                                     Beautiful creative solutions
                                     <br class="xl:hidden"/>  
                                 </h2> 
                            </div>
                        )}
                    </Spring>
                    <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        Design is not something you do, It's way of life Anim aute id nmagna aliqua as ad non deserunt sunt. Qui irure qui lorem cupidadat commodo. elit sunt amet fugiat veniam occaecat fugiat alaqua
                    </p>
                    <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div class="rounded-md shadow">
                            <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-600 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">Get started</a>
                        </div>
                        <div class="mt-3 sm:mt-0 sm:ml-3">
                            <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">Live demo</a>
                        </div>
                    </div>
                </div>
           </main>
        </div>
    )
}

export default Hero
