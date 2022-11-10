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
            {
                title: 'NewtonRaphson',
                path: '/RootOfEquations/NewtonRaphson',
                icon: <RiIcons.RiCalculatorLine/>
            },
            {
                title: 'Secant',
                path: '/RootOfEquations/Secant',
                icon: <RiIcons.RiCalculatorFill/>
            },            
        ]
    },
    {
        title: 'LinearAlgebra',
        path: '/LinearAlgebra',
        icon: <FaIcons.FaJs/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'CramerRule',
                path: '/LinearAlgebra/CramerRule',
                icon: <RiIcons.RiCalculatorLine/>
            },
            {
                title: 'GaussElimination',
                path: '/LinearAlgebra/GaussElimination',
                icon: <RiIcons.RiCalculatorFill/>
            },
            {
                title: 'GaussJordan',
                path: '/LinearAlgebra/GaussJordan',
                icon: <RiIcons.RiCalculatorLine/>
            },
            {
                title: 'MatrixInvertion',
                path: '/LinearAlgebra/MatrixInvertion',
                icon: <RiIcons.RiCalculatorFill/>
            },
            {
                title: 'LuDecomposition',
                path: '/LinearAlgebra/LuDecomposition',
                icon: <RiIcons.RiCalculatorLine/>
            },
            {
                title: 'Cholesky',
                path: '/LinearAlgebra/Cholesky',
                icon: <RiIcons.RiCalculatorFill/>
            },
            {
                title: 'Jacobi',
                path: '/LinearAlgebra/Jacobi',
                icon: <RiIcons.RiCalculatorLine/>
            },
            {
                title: 'GaussSeidel',
                path: '/LinearAlgebra/GaussSeidel',
                icon: <RiIcons.RiCalculatorFill/>
            },
            {
                title: 'ConjugateGradient',
                path: '/LinearAlgebra/ConjugateGradient',
                icon: <RiIcons.RiCalculatorLine/>
            },
        ]
    },
    {
        title: 'Contact',
        path: '/Contact',
        icon: <RiIcons.RiCreativeCommonsByFill/>,
    }
]