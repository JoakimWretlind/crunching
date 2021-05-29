import React from 'react'
import SingleImage from './SiteMap.elements'
import { SubHeaderLight } from '../index'
import { CardsSource } from './CardsData'
import {
    MapSection,
    CardsWrapper
} from './SiteMap.elements'

const SiteMap = () => {
    return (
        <>
            <MapSection>
                <SubHeaderLight>
                    Sitemap
                </SubHeaderLight>
                <CardsWrapper>
                    {CardsSource.map(item => (
                        <SingleImage image={item} key={item.id} />
                    ))}
                </CardsWrapper>
            </MapSection>
        </>
    )
}

export default SiteMap
