import React from 'react'

function FeatureItems({title,children}) {
    return (
      <li>
          <div class="flex">
                <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        {children}
                    </div>
                </div>
                <div class="ml-4">
                     <h4 class="text-lg font-medium leading-6 text-gray-900">{title}</h4>
                     <p class="mt-2 text-base leading-6 text-gray-500">
                            Culpa dolor non ad ea adipisicing mollit est ipsum elit eiusmod ipsum est culpa. Nulla tempor nisi eu cupidatat ex enim irure. 
                            Cupidatat aliquip officia dolore esse. Culpa et culpa nostrud aliquip exercitation do commodo aliqua quis aliquip quis amet.
                             Anim enim eu do mollit aliqua ipsum
                     </p>
                </div>
          </div>
      </li>
    )
}

export default FeatureItems
