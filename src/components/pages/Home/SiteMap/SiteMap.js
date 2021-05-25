import React from 'react'
import SingleImage from './SiteMap.elements'
import { SubHeaderDark } from '../index'
import { CardsSource } from './CardsData'
import {
    MapSection,
    CardsWrapper
} from './SiteMap.elements'

const SiteMap = () => {
    return (
        <>
            <MapSection>
                <SubHeaderDark>
                    Sitemap
                </SubHeaderDark>
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
