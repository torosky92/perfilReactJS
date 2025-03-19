import flexadvanced from './img/DE - Flex Advanced.svg'
import flex from './img/DE - Flex.svg'
import platformadvanced from './img/DE - Platform Advanced.svg'
import platformTwilio from './img/DE - Platform.svg'
import foundations from './img/DE - Twilio Foundations.svg'
import MessagingFundamentals from './img/DE - Messaging Fundamentals.svg'
import voiceFundamentals from './img/DE - Voice Fundamentals.svg'
import lai from './img/Learning Adventures Introduction.svg'
import twiliosolution101 from './img/SA - Solution Architecture 101.svg'
import twiliosolution201 from './img/SA - Solution Architecture 201.svg'
import IBMai from './img/Professional_Certificate_-_AI_Engineering.png'
import ibmdeep from './img/IBM_AI_-Deep_Learning_with_Tensorflow.png'
import ibmneural from './img/IBM_AI_-Deep_Neural_Networks_with_PyTorch.png'
import ibmkeras from './img/IBM_AI_-Deep_Learning_Essentials_with_Keras.png'
import ibmmachine from './img/Machine_Learning_with_Python.png'
import ibmvision from './img/Computer_Vision_and_and_Image_Processing_Essentials.png'

import awsNetwork from './img/aws-educate-getting-started-with-networking.png'
import awsStorage from './img/aws-educate-getting-started-with-storage.png'
import awsDatabase from './img/aws-educate-getting-started-with-databases.png'
import awsSecurity from './img/aws-educate-getting-started-with-security.png'
import awsServerless from './img/aws-educate-getting-started-with-serverless.png'
import awsCloudOperations from './img/aws-educate-getting-started-with-cloud-ops.png'
import awsCompute from './img/aws-educate-getting-started-with-compute.png'
import awsCloud101 from './img/aws-educate-introduction-to-cloud-101.png'
import awsAI from './img/aws-educate-introduction-to-generative-ai.png'
import awsML from './img/aws-educate-machine-learning-foundations.png'
import awsWB from './img/aws-educate-web-builder.png'


export const Course = [
    {
        Title:{
            Spanish:'DevOps and AI on AWS',
            English:'DevOps and AI on AWS'
        },
        badges: [
            {
                title: 'Upgrading Apps with Generative AI',
                icon: null,
                url: 'https://coursera.org/share/648a07ba75720d58fe9db6c3b2c09aa5',
            },
            {
                title: 'CI/CD for Generative AI Applications',
                icon: null,
                url: 'https://coursera.org/share/dcc91e8f19f6f43fb9f87db327badd70',
            },
            {
                title: 'AIOps',
                icon: null,
                url: 'https://coursera.org/share/788ac1538bf42166c26cd9fbf8252e1e',
            },
            {
                title: 'DevOps and AI on AWS',
                icon: null,
                url: 'https://coursera.org/share/32ef9cf1c4cf6b54834c78f76c418777',
            }
        ],
        Campus:{
            Spanish:'Coursera con AWS',
            English:'Coursera with AWS',
        },
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2025,
            month:3,
            day:18
        },
        DateFinal:{
            year:2025,
            month:3,
            day:19
        },
    },
    {
        Title:{
            Spanish:'IBM AI Engineering Professional Certificate',
            English:'IBM AI Engineering Professional Certificate'
        },
        badges: [
            {
                title: 'Deep Learning Essentials with Keras',
                icon: <img src={ibmkeras} alt=""/>,
                url: 'https://www.credly.com/badges/7b107c50-e93b-4599-8f08-d30aa13fcf64/linked_in?t=ryzi59',
            },
            {
                title: 'Deep Learning Essentials with Tensorflow',
                icon: <img src={ibmdeep} alt=""/>,
                url: 'https://www.credly.com/badges/a15a43cb-bced-464c-8d59-c0a05a990278/linked_in?t=rzn48f',
            },
            {
                title: 'Deep Neural Networks with PyTorch',
                icon: <img src={ibmneural} alt=""/>,
                url: 'https://www.credly.com/badges/a19a373e-ddb5-45a9-878f-cfd987d8e309/linked_in?t=rzk5xg',
            },
            {
                title: 'Machine Learning with Python',
                icon: <img src={ibmmachine} alt=""/>,
                url: 'https://www.credly.com/badges/edb8bc4b-fefb-4267-8619-1b2ef67fed8a/linked_in?t=ryowk6',
            },
            {
                title: 'Computer Vision and Image Processing Essentials',
                icon: <img src={ibmvision} alt=""/>,
                url: 'https://www.credly.com/badges/bb4cdc07-bf5c-486c-a0c2-3592c633c35f/linked_in?t=ryzi3q'
            },
            {
                title: 'IBM AI Engineering Professional Certificate (V2)',
                icon: <img src={IBMai} alt=""/>,
                url: 'https://www.credly.com/badges/07c49a5a-9c1a-4d5f-a773-33bd06b7a6e6/linked_in?t=rzubtc',
            },
        ],
        Campus:{
            Spanish:'Coursera con IBM',
            English:'Coursera with IBM',
        },
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2023,
            month:8,
            day:1
        },
        DateFinal:{
            year:2023,
            month:8,
            day:14
        },
    },
    {
        Title:{
            Spanish:'AWS Educate Getting Started',
            English:'AWS Educate Getting Started'
        },
        Campus:{
            Spanish:'Amazon Web Services (AWS)',
            English:'Amazon Web Services (AWS)',
        },
        badges: [
            {
                title: 'Networking',
                icon: <img src={awsNetwork} alt=""/>,
                url: 'https://www.credly.com/badges/c19351fa-881c-4365-adf7-f9bd315fe73d',
            },
            {
                title: 'Storage',
                icon: <img src={awsStorage} alt=""/>,
                url: 'https://www.credly.com/badges/b31ac2f2-6a30-4e35-84a5-d8a3af729a92',
            },
            {
                title: 'Databases',
                icon: <img src={awsDatabase} alt=""/>,
                url: 'https://www.credly.com/badges/9617c6b0-d498-4e01-bea4-b81e2b75bfe6',
            },
            {
                title: 'Security',
                icon: <img src={awsSecurity} alt=""/>,
                url: 'https://www.credly.com/badges/c0563859-bb56-4d51-bc78-b7ee6d3e19f5',
            },
            {
                title: 'Serverless',
                icon: <img src={awsServerless} alt=""/>,
                url: 'https://www.credly.com/badges/c6f30d93-0e61-4744-900a-b26f7095c19d'
            },
            {
                title: 'Compute',
                icon: <img src={awsCompute} alt=""/>,
                url: 'https://www.credly.com/badges/9de4bf1a-f096-4c08-98a7-ea203b35535d',
            },
            {
                title: 'Cloud Operations',
                icon: <img src={awsCloudOperations} alt=""/>,
                url: 'https://www.credly.com/badges/bded04e0-10d1-4754-b774-2446a0cbb40f',
            },
            {
                title: 'Cloud 101',
                icon: <img src={awsCloud101} alt=""/>,
                url: 'https://www.credly.com/badges/15be7cef-25f5-4fa3-b166-ed82d2aa5b3e',
            },
        ],
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2025,
            month:3,
            day:6
        },
        DateFinal:{
            year:2025,
            month:3,
            day:11
        },
    },
    {
        Title:{
            Spanish:'Machine Learning & AI',
            English:'Machine Learning & AI'
        },
        Campus:{
            Spanish:'Amazon Web Services (AWS)',
            English:'Amazon Web Services (AWS)',
        },
        badges: [
            {
                title: 'Introduction to Generative Artificial Intelligence',
                icon: <img src={awsAI} alt=""/>,
                url: 'https://www.credly.com/badges/724cd6fe-611f-46db-9bcc-33ad944b5a67',
            },
            {
                title: 'Machine Learning Foundations',
                icon: <img src={awsML} alt=""/>,
                url: 'https://www.credly.com/badges/2b614340-1fdc-4185-af10-737eaba14469',
            }
        ],
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2025,
            month:3,
            day:11
        },
        DateFinal:{
            year:2025,
            month:3,
            day:12
        },
    },
    {
        Title:{
            Spanish:'Development',
            English:'Development'
        },
        Campus:{
            Spanish:'Amazon Web Services (AWS)',
            English:'Amazon Web Services (AWS)',
        },
        badges: [
            {
                title: 'Web Application Development Builder',
                icon: <img src={awsWB} alt=""/>,
                url: 'https://www.credly.com/badges/be0a2e10-b4af-4a18-b008-9c6b7b31fb21/public_url',
            }
        ],
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2025,
            month:3,
            day:12
        },
        DateFinal:{
            year:2025,
            month:3,
            day:12
        },
    },
    {
        Title:{
            Spanish:'Twilio Cursos',
            English:'Twilio Courses'
        },
        badges: [
            {
                title: 'Learning Adventures Introduction',
                icon: <img src={lai} alt=""/>,
                url: '',
            },
            {
                title: 'Learning Adventures Introduction',
                icon: <img src={foundations} alt=""/>,
                url: '',
            },
            {
                title: 'Twilio Platform',
                icon: <img src={platformTwilio} alt=""/>,
                url: '',
            },
            {
                title: 'Twilio Platform',
                icon: <img src={voiceFundamentals} alt=""/>,
                url: '',
            },
            {
                title: 'Twilio Platform',
                icon: <img src={MessagingFundamentals} alt=""/>,
                url: '',
            },
            {
                title: 'Twilio Platform Advanced',
                icon: <img src={platformadvanced} alt=""/>,
                url: '',
            },
            {
                title: 'Flex Developer',
                icon: <img src={flex} alt=""/>,
                url: '',
            },
            {
                title: 'Flex Advanced',
                icon: <img src={flexadvanced} alt=""/>,
                url: '',
            },
            {
                title: 'Solution Architecture 101',
                icon: <img src={twiliosolution101} alt=""/>,
                url: '',
            },
            {
                title: 'Solution Architecture 201: Flex',
                icon: <img src={twiliosolution201} alt=""/>,
                url: '',
            },
        ],
        url: '',
        Campus:{
            Spanish:'Twilio',
            English:'Twilio',
        },
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2023,
            month:12,
            day:1
        },
        DateFinal:{
            year:2023,
            month:12,
            day:16
        },
    },
    {
        Title:{
            Spanish:'Cursos UDEMY',
            English:'Courses UDEMY'
        },
        badges: [
            {
                title: 'Cerificado de finalización Master en Python: Aprender Python, Django, Flask y Tkinter',
                icon: null,
                url: null,
            },
            {
                title: 'Cerificado de finalización Electrical, Electronics and PCB Design Safety & Compliance',
                icon: null,
                url: null,
            },
            {
                title: 'Cerificado de finalización The Complete Machine Learning Course with Python',
                icon: null,
                url: null,
            },
            {
                title: 'Cerificado de finalización Python for Computer Vision With OpenCV and Deep Learning',
                icon: null,
                url: null,
            },
            {
                title: 'Cerificado de finalización Build Your Own Arduino Library: Step By Step Guide',
                icon: null,
                url: null,
            },
            {
                title: 'Cerificado de finalización Control Arduino with Your Own Voice',
                icon: null,
                url: null,
            },
            {
                title: 'Cerificado de finalización Robótica con ROS rápidamente',
                icon: null,
                url: null,
            },
            {
                title: 'Cerificado de finalización Docker',
                icon: null,
                url: null,
            },
            {
                title: 'Cerificado de finalización Master en CSS: Responsive, SASS, Flexbox, Grid y Bootstrap 4',
                icon: null,
                url: null,
            },
            {
                title: 'Cerificado de finalización Master en JavaScript: Aprender js, jQuery, Angular 9, NodeJS',
                icon: null,
                url: null,
            },
            {
                title: 'Cerificado de finalización Excel Completo - Desde Principiante Hasta Avanzado',
                icon: null,
                url: null,
            },
        ],
        Campus:{
            Spanish:'UDEMY',
            English:'UDEMY',
        },
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2020,
            month:4,
            day:1
        },
        DateFinal:{
            year:2020,
            month:7,
            day:12
        },
    },
    {
        Title:{
            Spanish:'Cursos COURSERA',
            English:'Courses COURSERA'
        },
        badges: [
            {
                title: 'Cerificado de Curso Crash Course on Python',
                icon: null,
                url: 'https://coursera.org/share/486fcfa51f71dae69ddd4c609aae7671',
            },
            {
                title: 'Cerificado de Curso Aspectos básicos de la asistencia técnica',
                icon: null,
                url: 'https://coursera.org/share/b35d465a3e38c47e00d6bc42efb79b15',
            },
            {
                title: 'Cerificado de Curso AWS Fundamentals: Going Cloud-Native',
                icon: null,
                url: 'https://coursera.org/share/a10ba5078c740f5e09d2c79fcb0a85a4',
            },
        ],
        Campus:{
            Spanish:'COURSERA',
            English:'COURSERA'
        },
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2020,
            month:5,
            day:4
        },
        DateFinal:{
            year:2020,
            month:5,
            day:4
        },
    },
    {
        Title:{
            Spanish:'Certificado Ingles',
            English:'English Certificate',
        },
        url: '',
        badges: [],
        Campus:{
            Spanish:'Escuela FBT',
            English:'School FBT',
        },
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2011,
            month:12,
            day:12
        },
        DateFinal:{
            year:2012,
            month:7,
            day:24
        },
    },
    {
        Title:{
            Spanish:'Certificado CSWA',
            English:'CSWA Certificate'
        },
        badges: [],
        Campus:{
            Spanish:'Universidad EAFIT',
            English:'University EAFIT',
        },
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2015,
            month:7,
            day:17
        },
        DateFinal:{
            year:2015,
            month:10,
            day:3
        },
    },
    {
        Title:{
            Spanish:'Congreso Internacional de Ingeniería Mecánica',
            English:'International Congress of Mechanical Engineering'
        },
        badges: [],
        Campus:{
            Spanish:'Universidad EAFIT',
            English:'University EAFIT',
        },
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2017,
            month:9,
            day:21
        },
        DateFinal:{
            year:2017,
            month:9,
            day:22
        },
    },
    {
        Title:{
            Spanish:'Congreso Internacional de Ingeniería Producción',
            English:'International Congress of Production Engineering'
        },
        badges: [],
        Campus:{
            Spanish:'Universidad EAFIT',
            English:'University EAFIT',
        },
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2019,
            month:9,
            day:29
        },
        DateFinal:{
            year:2019,
            month:9,
            day:30
        },
    },
]