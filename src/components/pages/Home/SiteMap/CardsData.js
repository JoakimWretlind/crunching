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
        text: 'A Calculator styled your way'
    },
    {
        id: 2,
        path: '/Crypto/CryptoOverview/CryptoOverview',
        source: CryptoImage,
        header: 'CryptoTracker',
        text: 'Track the cryptocurrencies and the current price'
    },
    {
        id: 3,
        path: '/Crypto/CryptoPersonal/CryptoPersonal',
        source: CryptoChart,
        header: 'Collect Your Own Currencies',
        text: 'Collect and get more information about your favourite cryptocurrencies'
    },
    {
        id: 4,
        path: '/Emi/EmiCalculator',
        source: EmiImage,
        header: 'EMI Calculator',
        text: 'Calculate the real cost of your current or upcoming loans'
    },
    {
        id: 5,
        path: '/Savings/Savings',
        source: SavingImage,
        header: 'See the Value of your Savings',
        text: 'See how your savings will rise with time'
    },
]