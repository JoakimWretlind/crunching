import { CalcImage } from './index'
import { CryptoImage } from './index'
import { CryptoChart } from './index'
import { EmiImage } from './index'
import { SavingImage } from './index'


export const CardsSource = [
    {
        id: 1,
        path: '/Calculator/Calculator',
        component: 'Calulator',
        source: CalcImage,
        header: 'Custom Calculator',
        text: 'A calculator styled your way'
    },
    {
        id: 2,
        path: '/Crypto/CryptoOverview/CryptoOverview',
        source: CryptoImage,
        header: 'CryptoTracker',
        text: 'The currencies and their price'
    },
    {
        id: 3,
        path: '/Crypto/CryptoPersonal/CryptoPersonal',
        source: CryptoChart,
        header: 'Your Favourite currencies',
        text: 'Have a closer look at your favourites'
    },
    {
        id: 4,
        path: '/Emi/EmiCalculator',
        source: EmiImage,
        header: 'EMI Calculator',
        text: 'Calculate the real cost of your loans'
    },
    {
        id: 5,
        path: '/Savings/Savings',
        source: SavingImage,
        header: 'Saving in Time',
        text: 'How your savings change with time'
    },
]