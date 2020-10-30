import React from 'react'
import Cards from './Cards';
import Description from './Description'

function CardsContainer() {
    return (
        <section class="blog text-gray-700 body-font">
            <div class="container px-5 py-24 mx-auto">
                <Description/>
                <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <Cards
                        title="PHP"
                        imageUrl="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
                    />
                     <Cards
                        title="JS"
                        imageUrl="https://images.unsplash.com/photo-1543966888-7c1dc482a810?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
                    />
                     <Cards
                        title="VUE"
                        imageUrl="https://images.unsplash.com/photo-1590608897129-79da98d15969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
                    />
                </div>
            </div>
        </section>
    )
}

export default CardsContainer
