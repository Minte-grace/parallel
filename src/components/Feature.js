import React from 'react';
import FeatureHeader from "./FeatureHeader";
import FeatureItems from "./FeatureItems";

function Feature() {
    return (
        <div class="py-12 bg-white">
            <div class="max-w-screen-xl mx-auto px-4 sm-px sm:px-6 lg:px-8">
                <FeatureHeader/>
                <div class="mt-10">
                    <ul class="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <FeatureItems title="Competitive exchange rates">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1M19 10C19 12.3869 18.0518 14.6761 16.364 16.364C14.6761 18.0518 12.3869 19 10 19L19 10ZM19 10C19 7.61305 18.0518 5.32387 16.364 3.63604C14.6761 1.94821 12.3869 1 10 1L19 10ZM19 10H1H19ZM10 19C7.61305 19 5.32387 18.0518 3.63604 16.364C1.94821 14.6761 1 12.3869 1 10L10 19ZM10 19C11.657 19 13 14.97 13 10C13 5.03 11.657 1 10 1V19ZM10 19C8.343 19 7 14.97 7 10C7 5.03 8.343 1 10 1V19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </FeatureItems>
                        <FeatureItems title="No hidden fees">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M10 19H13M1 4L4 5L1 4ZM4 5L1 14C1.8657 14.649 2.91852 14.9999 4.0005 14.9999C5.08248 14.9999 6.1353 14.649 7.001 14L4 5ZM4 5L7 14L4 5ZM4 5L10 3L4 5ZM16 5L19 4L16 5ZM16 5L13 14C13.8657 14.649 14.9185 14.9999 16.0005 14.9999C17.0825 14.9999 18.1353 14.649 19.001 14L16 5ZM16 5L19 14L16 5ZM16 5L10 3L16 5ZM10 1V3V1ZM10 19V3V19ZM10 19H7H10Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </FeatureItems>
                        <FeatureItems title="Transfers are instant">
                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M10 8V1L1 12H8V19L17 8H10Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </FeatureItems>
                        <FeatureItems title="Mobile notifications">
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M5 5H15H5ZM5 9H9H5ZM10 17L6 13H3C2.46957 13 1.96086 12.7893 1.58579 12.4142C1.21071 12.0391 1 11.5304 1 11V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3V11C19 11.5304 18.7893 12.0391 18.4142 12.4142C18.0391 12.7893 17.5304 13 17 13H14L10 17Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </FeatureItems>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Feature
