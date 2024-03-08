export const categories = [
    "Apple",
    "Oranges",
    "Pineapple",
    "Mango",
    "Watermelon"
]

export const featuredFruits = [
    {
        name: "Australian Orange",
        price: "12.30",
        stars: 4,
        desc: 'sweet and juicy',
        shadow: "orange",
        image: require('./assets/images/Orange2.png'),
        color: (opacity) => `rgba(255,219,153,${opacity})`
    },
    {
        name: "Kashmiri Apple",
        price: "15.80",
        stars: 4,
        desc: 'sweet and juicy',
        shadow: '#d00000',
        image: require('./assets/images/apple.png'),
        color: (opacity) => `rgba(247,89,89,${opacity})`
    },
    {
        name: "Aachari Mango",
        price: "11.50",
        stars: 4,
        desc: 'sweet and juicy',
        shadow: '#ffdb4d',
        image: require('./assets/images/mango.png'),
        color: (opacity) => `rgba(255, 235, 153,${opacity})`
    },
    {
        name: "Australian Grapes",
        price: "30",
        stars: 4,
        desc: 'sweet and juicy',
        shadow: '#A3C25B',
        image: require('./assets/images/grapes.png'),
        color: (opacity) => `rgba(167, 201, 87,${opacity})`
    },
    {
        name: "Australian Cherry",
        price: "12.30",
        stars: 4,
        desc: 'sweet and juicy',
        shadow: '#ff1a1a',
        image: require('./assets/images/strawberry.png'),
        color: (opacity) => `rgba(255, 153, 153,${opacity})`
    },
] 

export const cartItems = [
    {
        name: "Australian Orange",
        price: "12.30",
        qty: 4,
        desc: 'sweet and juicy',
        shadow: "orange",
        image: require('./assets/images/Orange2.png'),
        color: (opacity) => `rgba(255,219,153,${opacity})`
    },
    {
        name: "Kashmiri Apple",
        price: "15.80",
        qty: 2,
        desc: 'sweet and juicy',
        shadow: '#F75959',
        image: require('./assets/images/apple.png'),
        color: (opacity) => `rgba(247,89,89,${opacity})`
    },
    {
        name: "Aachari Mango",
        price: "11.50",
        qty: 3,
        desc: 'sweet and juicy',
        shadow: '#ffdb4d',
        image: require('./assets/images/mango.png'),
        color: (opacity) => `rgba(255, 235, 153,${opacity})`
    },
    {
        name: "Australian Grapes",
        price: "30",
        qty: 3,
        desc: 'sweet and juicy',
        shadow: '#55ff00',
        image: require('./assets/images/grapes.png'),
        color: (opacity) => `rgba(198, 255, 179,${opacity})`
    },
    
] 