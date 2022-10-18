import React from "react";

import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
    },
    {
        title: 'RootOfEquations',
        path: '/RootOfEquations',
        icon: <FaIcons.FaJs/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Bisection',
                path: '/RootOfEquations/Bisection',
                icon: <RiIcons.RiCalculatorFill/>
            },
            {
                title: 'FalsePosition',
                path: '/RootOfEquations/FalsePosition',
                icon: <RiIcons.RiCalculatorLine/>
            },
            {
                title: 'OnePointIteration',
                path: '/RootOfEquations/OnePointIteration',
                icon: <RiIcons.RiCalculatorFill/>
            },
        ]
    },
    {
        title: 'Contact',
        path: '/Contact',
        icon: <RiIcons.RiCreativeCommonsByFill/>,
    }
]