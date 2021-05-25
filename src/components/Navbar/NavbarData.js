import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as GiIcons from 'react-icons/gi'
import * as BiIcons from 'react-icons/bi'
import * as MdIcons from 'react-icons/md'

/** Like a json-file */
export const NavbarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />
    },
    {
        title: 'Calculator',
        path: '/Calculator/Calculator',
        icon: <FaIcons.FaCalculator />
    },
    {
        title: 'Crypto Currencies',
        path: '/Crypto/CryptoCurrencies',
        icon: <FaIcons.FaCoins />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Overview',
                path: '/Crypto/CryptoOverview/CryptoOverview',
                icon: <GiIcons.GiTwoCoins />
            },
            {
                title: 'Personal',
                path: '/Crypto/CryptoPersonal/CryptoPersonal',
                icon: <BiIcons.BiCoinStack />
            }
        ]
    },
    {
        title: 'EMI Calculator',
        path: '/Emi/EmiCalculator',
        icon: <MdIcons.MdAccountBalance />
    },
    {
        title: 'Savings',
        path: '/Savings/Savings',
        icon: <FaIcons.FaPiggyBank />
    },
    {
        title: 'Contact',
        path: '/Contact/Contact',
        icon: <FaIcons.FaRegHandshake />
    }
]