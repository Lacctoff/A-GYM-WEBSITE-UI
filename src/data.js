import {SiOpenaigym} from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym />,
        title: "Strength Training",
        info: "Build muscle, increase strength, and push your limits with our expert-guided strength training sessions.",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym />,
        title: "Cardio Blast",
        info: "Boost your endurance and burn calories fast with high-energy cardio workouts designed for all fitness levels.",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym />,
        title: "Flexibility & Mobility",
        info: "Enhance your range of motion and reduce the risk of injury with exercises focused on flexibility and mobility.",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym />,
        title: "Personal Training",
        info: "Get customized workout plans and one-on-one coaching tailored to your specific fitness goals.",
        path: "/programs/444"
    }
];









export const values = [
    {
        id: 1,
        icon: <SiOpenaigym />,
        title: "Commitment to Excellence",
        desc: "We are dedicated to providing top-notch facilities, expert trainers, and a supportive community to help you reach your fitness goals."
    },
    {
        id: 2,
        icon: <SiOpenaigym />,
        title: "Community and Support",
        desc: "Our gym is more than just a place to work out—it's a community. We motivate and support each other to achieve personal bests."
    },
    {
        id: 3,
        icon: <SiOpenaigym />,
        title: "Results-Driven Approach",
        desc: "We focus on delivering tangible results through personalized programs, continuous guidance, and a results-oriented mindset."
    },
    {
        id: 4,
        icon: <SiOpenaigym />,
        title: "Innovation and Growth",
        desc: "We continually update our equipment, programs, and knowledge to stay at the cutting edge of the fitness industry."
    }
];










export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "For most people, exercising 3-5 times a week is ideal. This allows for sufficient rest and recovery while making progress towards your fitness goals."
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "The best time to work out is when you feel most energetic and can stay consistent. Whether it's morning, afternoon, or evening, the key is to find a time that fits your schedule."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "Workouts should typically last between 45 minutes to an hour. This timeframe is enough to include a warm-up, main workout, and cool-down, making your session effective without overtraining."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Yes, warming up is crucial. It prepares your body for exercise by increasing blood flow to muscles, enhancing flexibility, and reducing the risk of injury."
    },
    {
        id: 5,
        question: "Should I do strength training, cardio, or both?",
        answer: "A balanced fitness routine includes both strength training and cardio. Strength training builds muscle and increases metabolism, while cardio improves heart health and endurance."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Yes, lifting weights is highly effective for strength training. It helps build muscle mass, increase strength, and improve bone density. Start with lighter weights and focus on form before progressing."
    }
];









export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "Joining this gym was the best decision I've ever made! The trainers are amazing, and I've seen incredible results in just a few months.",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "The community here is so supportive! Whether you're a beginner or an experienced athlete, there's something for everyone. I've never felt more motivated.",
        job: "Software Engineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "The personal training sessions are worth every penny. My trainer has tailored a program specifically for my needs, and the progress has been phenomenal.",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "This gym feels like a second home. From the friendly staff to the state-of-the-art equipment, it's the perfect place to work on myself.",
        job: "Marketing Specialist",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "I've been to many gyms, but this one stands out for its focus on members' progress and well-being. It's not just a workout; it's a lifestyle change.",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
];







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true}
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'Jegede Samuel',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Lacctoff D.',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Ahmed Yakub',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Akintoye Opeyemi',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Bosun Adelakun',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]