import {
    HiOutlineViewGrid,
    HiOutlineCube,
    HiOutlineShoppingCart,
    HiOutlineUsers,
    HiOutlineDocumentText,
    HiOutlineAnnotation,
    HiOutlineQuestionMarkCircle,
    HiOutlineCog
} from 'react-icons/hi'
import React from "react";
import { IoBagHandle, IoPieChart, IoPeopleSharp, IoCartSharp } from "react-icons/io5";

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/dashboard',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'products',
        label: 'Products',
        path: '/products',
        icon: <HiOutlineCube />
    },
    {
        key: 'orders',
        label: 'Orders',
        path: '/orders',
        icon: <HiOutlineShoppingCart />
    },
    {
        key: 'customers',
        label: 'Customers',
        path: '/customers',
        icon: <HiOutlineUsers />
    },
    {
        key: 'transactions',
        label: 'Transactions',
        path: '/transactions',
        icon: <HiOutlineDocumentText />
    },
    {
        key: 'messages',
        label: 'Messages',
        path: '/messages',
        icon: <HiOutlineAnnotation />
    }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <HiOutlineCog />
    },
    {
        key: 'support',
        label: 'Help & Support',
        path: '/support',
        icon: <HiOutlineQuestionMarkCircle />
    }
]

export const DASHBOARD_STATICS_GRIDS  = [
    {
        title: 'Total Sales',
        price: 3452.60,
        increase: 234,
        icon: <IoBagHandle className="text-2xl text-white"/>,
        bgIcon: 'bg-sky-500'
    },
    {
        title: 'Total Expenses',
        price: 3423,
        increase: -343,
        icon: <IoPieChart className="text-2xl text-white"/>,
        bgIcon: 'bg-red-500'
    },
    {
        title: 'Total Customers',
        price: 12313,
        increase: -30,
        icon: <IoPeopleSharp className="text-2xl text-white"/>,
        bgIcon: 'bg-yellow-500'
    },
    {
        title: 'Total Orders',
        price: 16432,
        increase: -43,
        icon: <IoCartSharp className="text-2xl text-white"/>,
        bgIcon: 'bg-green-500'
    }
]


export const DASHBOARD_CHART = [
    {
        name: 'Jan',
        Expense: 4000,
        Income: 2400
    },
    {
        name: 'Feb',
        Expense: 3000,
        Income: 1398
    },
    {
        name: 'Mar',
        Expense: 2000,
        Income: 9800
    },
    {
        name: 'Apr',
        Expense: 2780,
        Income: 3908
    },
    {
        name: 'May',
        Expense: 1890,
        Income: 4800
    },
    {
        name: 'Jun',
        Expense: 2390,
        Income: 3800
    },
    {
        name: 'July',
        Expense: 3490,
        Income: 4300
    },
    {
        name: 'Aug',
        Expense: 2000,
        Income: 9800
    },
    {
        name: 'Sep',
        Expense: 2780,
        Income: 3908
    },
    {
        name: 'Oct',
        Expense: 1890,
        Income: 4800
    },
    {
        name: 'Nov',
        Expense: 2390,
        Income: 3800
    },
    {
        name: 'Dec',
        Expense: 3490,
        Income: 4300
    }
]

export const DASHBOARD_BUYER_PROFILE_CHART = [
    { name: 'Male', value: 540 },
    { name: 'Female', value: 620 },
    { name: 'Other', value: 210 }
]

export const DASHBOARD_RECENT_ORDER_DATA = [
    {
        id: '1',
        product_id: '4324',
        customer_id: '23143',
        customer_name: 'Shirley A. Lape',
        order_date: '2022-05-17T03:24:00',
        order_total: '$435.50',
        current_order_status: 'PLACED',
        shipment_address: 'Cottage Grove, OR 97424'
    },
    {
        id: '7',
        product_id: '7453',
        customer_id: '96453',
        customer_name: 'Ryan Carroll',
        order_date: '2022-05-14T05:24:00',
        order_total: '$96.35',
        current_order_status: 'CONFIRMED',
        shipment_address: 'Los Angeles, CA 90017'
    },
    {
        id: '2',
        product_id: '5434',
        customer_id: '65345',
        customer_name: 'Mason Nash',
        order_date: '2022-05-17T07:14:00',
        order_total: '$836.44',
        current_order_status: 'SHIPPED',
        shipment_address: 'Westminster, CA 92683'
    },
    {
        id: '3',
        product_id: '9854',
        customer_id: '87832',
        customer_name: 'Luke Parkin',
        order_date: '2022-05-16T12:40:00',
        order_total: '$334.50',
        current_order_status: 'SHIPPED',
        shipment_address: 'San Mateo, CA 94403'
    },
    {
        id: '4',
        product_id: '8763',
        customer_id: '09832',
        customer_name: 'Anthony Fry',
        order_date: '2022-05-14T03:24:00',
        order_total: '$876.00',
        current_order_status: 'OUT_FOR_DELIVERY',
        shipment_address: 'San Mateo, CA 94403'
    },
    {
        id: '5',
        product_id: '5627',
        customer_id: '97632',
        customer_name: 'Ryan Carroll',
        order_date: '2022-05-14T05:24:00',
        order_total: '$96.35',
        current_order_status: 'DELIVERED',
        shipment_address: 'Los Angeles, CA 90017'
    }
]

export const DASHBOARD_POPULAR_PRODUCTS = [
    {
        id: '3432',
        product_name: 'Macbook M1 Pro 14"',
        product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
        product_price: '$1499.00',
        product_stock: 341
    },
    {
        id: '7633',
        product_name: 'Samsung Galaxy Buds 2',
        product_thumbnail: 'https://source.unsplash.com/100x100?earbuds',
        product_price: '$399.00',
        product_stock: 24
    },
    {
        id: '6534',
        product_name: 'Asus Zenbook Pro',
        product_thumbnail: 'https://source.unsplash.com/100x100?laptop',
        product_price: '$899.00',
        product_stock: 56
    },
    {
        id: '9234',
        product_name: 'LG Flex Canvas',
        product_thumbnail: 'https://source.unsplash.com/100x100?smartphone',
        product_price: '$499.00',
        product_stock: 98
    },
    {
        id: '4314',
        product_name: 'Apple Magic Touchpad',
        product_thumbnail: 'https://source.unsplash.com/100x100?touchpad',
        product_price: '$699.00',
        product_stock: 0
    },
    {
        id: '4342',
        product_name: 'Nothing Earbuds One',
        product_thumbnail: 'https://source.unsplash.com/100x100?earphone',
        product_price: '$399.00',
        product_stock: 453
    }
]

export function getOrderStatus(status) {
    switch (status) {
        case 'PLACED':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-sky-600 bg-sky-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
            )
        case 'CONFIRMED':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-orange-600 bg-orange-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
            )
        case 'SHIPPED':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-teal-600 bg-teal-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
            )
        case 'OUT_FOR_DELIVERY':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-yellow-600 bg-yellow-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
            )
        case 'DELIVERED':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-green-600 bg-green-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
            )
        default:
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
            )
    }
}