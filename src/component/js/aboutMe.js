import perfil from '../img/perfil.png'
import flexadvanced from '../img/DE - Flex Advanced.svg'
import flex from '../img/DE - Flex.svg'
import platformadvanced from '../img/DE - Platform Advanced.svg'
import platformTwilio from '../img/DE - Platform.svg'
import foundations from '../img/DE - Twilio Foundations.svg'
import MessagingFundamentals from '../img/DE - Messaging Fundamentals.svg'
import voiceFundamentals from '../img/DE - Voice Fundamentals.svg'
import lai from '../img/Learning Adventures Introduction.svg'
import twiliosolution101 from '../img/SA - Solution Architecture 101.svg'
import twiliosolution201 from '../img/SA - Solution Architecture 201.svg'
import IBMai from '../img/Professional_Certificate_-_AI_Engineering.png'
import ibmdeep from '../img/IBM_AI_-Deep_Learning_with_Tensorflow.png'
import ibmneural from '../img/IBM_AI_-Deep_Neural_Networks_with_PyTorch.png'
import ibmkeras from '../img/IBM_AI_-Deep_Learning_Essentials_with_Keras.png'
import ibmmachine from '../img/Machine_Learning_with_Python.png'
import ibmvision from '../img/Computer_Vision_and_and_Image_Processing_Essentials.png'

export const AboutMe ={
    Name:<>David A. <span>Toro M.</span></>,
    Date:{
        year:1992,
        month:1,
        day:30
    },
    Academic:[
            {
                Title:{
                    Spanish:'Ingeniero Mecánico',
                    English:'Mechanical Engineer',
                },
                Campus:{
                    Spanish:'Universidad EAFIT',
                    English:'University EAFIT',
                },
                Places: 'Medellín, Antioquia',
                DateInitial:{
                    year:2013,
                    month:1,
                    day:14
                },
                DateFinal:{
                    year:2019,
                    month:6,
                    day:7
                },
            },
            {
                Title:{
                    Spanish:'Especialización en diseño de sistemas tecnicos integrados',
                    English:'Specialization in the design of integrated technical systems'
                },
                Campus:{
                    Spanish:'Universidad EAFIT',
                    English:'University EAFIT',
                },
                Places: 'Medellín, Antioquia',
                DateInitial:{
                    year:2019,
                    month:7,
                    day:9
                },
                DateFinal:{
                    year:2019,
                    month:11,
                    day:19
                },
            }
    ],
    Languages:[
        {
            language:{
                Spanish:'Español',
                English:'Spanish'
            },
            level:{ 
                Spanish:'Nativo',
                English:'Native'
            }
        },
        {
            language:{
                Spanish:'Ingles',
                English:'English'
            },
            level:{ 
                Spanish:'B1',
                English:'B1'
            },
        },
    ],
    Photo:<img src={perfil} alt=""/>,
}

export const Likes = {
    interest:{
        Spanish:'Lo referente a tecnología, electrónica y eléctrica, diseño, edición de videos, video juegos, escuchar música e historias, crearme retos de desarrollo, entre otras actividades',
        English:'Regarding technology, electronics and electricity, design, video editing, video games, listening to music and stories, creating development challenges, among other activities',
    },
    worksArea:[
        {
            Spanish:'Programación de base de datos, Backend y Automatización en IoT',
            English:'Database programming, Backend and Automation in IoT'
        },
        {
            Spanish:'Electronica y Electrica con las normativas RETIE',
            English:'Electronics and Electricity with RETIE regulations'
        },
        {
            Spanish:'Capacitación y Dosencia',
            English:'Training and Dossence'
        },
        {
            Spanish:'Manejo de impresoras 3D, Fresadora y Gravador laser CNC',
            English:'Handling of 3D printers, CNC milling machine and laser engraver'
        },
    ]
}

export const Course = [
    {
        Title:{
            Spanish:'Líder Social',
            English:'Social Leader',
        },
        url: '',
        badges: [],
        Campus:{
            Spanish:'Corporación EL OASIS',
            English:'Corporation EL OASIS',
        },
        Places: 'Envigado, Antioquia',
        DateInitial:{
            year:2010,
            month:7,
            day:14
        },
        DateFinal:{
            year:2010,
            month:11,
            day:27
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
            Spanish:'Ganador del concurso Tic Tac Marketing',
            English:'Tic Tac Marketing Contest Winner'
        },
        url: '',
        badges: [],
        Campus:{
            Spanish:'Universidad EAFIT',
            English:'University EAFIT',
        },
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2013,
            month:5,
            day:17
        },
        DateFinal:{
            year:2013,
            month:5,
            day:10
        },
    },
    {
        Title:{
            Spanish:'Certificado CSWA',
            English:'CSWA Certificate'
        },
        url: '',
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
            Spanish:'Concursante RoboRAVE',
            English:'RoboRAVE Participant'
        },
        url: '',
        badges: [],
        Campus:{
            Spanish:'RoboRAVE International',
            English:'RoboRAVE International',
        },
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2017,
            month:5,
            day:11
        },
        DateFinal:{
            year:2017,
            month:5,
            day:13
        },
    },
    {
        Title:{
            Spanish:'Congreso Internacional de Ingeniería Mecánica',
            English:'International Congress of Mechanical Engineering'
        },
        url: '',
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
        url: '',
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
    {
        Title:{
            Spanish:'Cerificado de finalización Master en Python: Aprender Python, Django, Flask y Tkinter',
            English:'Certificate of Completion Master in Python: Learn Python, Django, Flask and Tkinter'
        },
        url: '',
        badges: [],
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
            month:4,
            day:4
        },
    },
    {
        Title:{
            Spanish:'Cerificado de finalización Electrical, Electronics and PCB Design Safety & Compliance',
            English:'Certificate of Completion Electrical, Electronics and PCB Design Safety & Compliance'
        },
        url: '',
        badges: [],
        Campus:{
            Spanish:'UDEMY',
            English:'UDEMY',
        },
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2020,
            month:4,
            day:8
        },
        DateFinal:{
            year:2020,
            month:4,
            day:8
        },
    },
    {
        Title:{
            Spanish:'Cerificado de finalización The Complete Machine Learning Course with Python',
            English:'Certificate of Completion The Complete Machine Learning Course with Python'
        },
        url: '',
        badges: [],
        Campus:{
            Spanish:'UDEMY',
            English:'UDEMY',
        },
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2020,
            month:4,
            day:5
        },
        DateFinal:{
            year:2020,
            month:4,
            day:9
        },
    },
    {
        Title:{
            Spanish:'Cerificado de finalización Python for Computer Vision With OpenCV and Deep Learning',
            English:'Certificate of Completion Python for Computer Vision With OpenCV and Deep Learning'
        },
        url: '',
        badges: [],
        Campus:{
            Spanish:'UDEMY',
            English:'UDEMY',
        },
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2020,
            month:4,
            day:8
        },
        DateFinal:{
            year:2020,
            month:4,
            day:11
        },
    },
    {
        Title:{
            Spanish:'Cerificado de finalización Build Your Own Arduino Library: Step By Step Guide',
            English:'Certificate of Completion Build Your Own Arduino Library: Step By Step Guide'
        },
        url: '',
        badges: [],
        Campus:{
            Spanish:'UDEMY',
            English:'UDEMY',
        },
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2020,
            month:4,
            day:11
        },
        DateFinal:{
            year:2020,
            month:4,
            day:12
        },
    },
    {
        Title:{
            Spanish:'Cerificado de finalización Control Arduino with Your Own Voice',
            English:'Certificate of Completion Control Arduino with Your Own Voice'
        },
        url: '',
        badges: [],
        Campus:{
            Spanish:'UDEMY',
            English:'UDEMY',
        },
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2020,
            month:4,
            day:12
        },
        DateFinal:{
            year:2020,
            month:4,
            day:12
        },
    },
    {
        Title:{
            Spanish:'Cerificado de finalización Robótica con ROS rápidamente',
            English:'Certificate of Completion Robotics with ROS quickly'
        },
        url: '',
        badges: [],
        Campus:{
            Spanish:'UDEMY',
            English:'UDEMY',
        },
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2020,
            month:5,
            day:1
        },
        DateFinal:{
            year:2020,
            month:5,
            day:2
        },
    },
    {
        Title:{
            Spanish:'Cerificado de Curso AWS Fundamentals: Going Cloud-Native',
            English:'Course Certificate AWS Fundamentals: Going Cloud-Native'
        },
        url: '',
        badges: [],
        Campus:{
            Spanish:'COURSERA',
            English:'COURSERA',
        },
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2020,
            month:5,
            day:2
        },
        DateFinal:{
            year:2020,
            month:5,
            day:3
        },
    },
    {
        Title:{
            Spanish:'Cerificado de Curso Aspectos básicos de la asistencia técnica',
            English:'Course Certificate Basic aspects of technical assistance'
        },
        url: '',
        badges: [],
        Campus:{
            Spanish:'COURSERA',
            English:'COURSERA',
        },
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2020,
            month:5,
            day:3
        },
        DateFinal:{
            year:2020,
            month:5,
            day:3
        },
    },
    {
        Title:{
            Spanish:'Cerificado de Curso Crash Course on Python',
            English:'Course Certificate Crash Course on Python'
        },
        url: '',
        badges: [],
        Campus:{
            Spanish:'COURSERA',
            English:'COURSERA',
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
            Spanish:'Cerificado de finalización Docker',
            English:'Docker Certificate of Completion'
        },
        url: '',
        badges: [],
        Campus:{
            Spanish:'UDEMY',
            English:'UDEMY',
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
            Spanish:'Cerificado de finalización Master en CSS: Responsive, SASS, Flexbox, Grid y Bootstrap 4',
            English:'Certificate of completion Master in CSS: Responsive, SASS, Flexbox, Grid and Bootstrap 4'
        },
        url: '',
        badges: [],
        Campus:{
            Spanish:'UDEMY',
            English:'UDEMY',
        },
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2020,
            month:5,
            day:10
        },
        DateFinal:{
            year:2020,
            month:5,
            day:24
        },
    },
    {
        Title:{
            Spanish:'Cerificado de finalización Master en JavaScript: Aprender js, jQuery, Angular 9, NodeJS',
            English:'Certificate of completion Master in JavaScript: Learn js, jQuery, Angular 9, NodeJS'
        },
        url: '',
        badges: [],
        Campus:{
            Spanish:'UDEMY',
            English:'UDEMY',
        },
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2020,
            month:5,
            day:29
        },
        DateFinal:{
            year:2020,
            month:6,
            day:4
        },
    },
    {
        Title:{
            Spanish:'Cerificado de finalización Excel Completo - Desde Principiante Hasta Avanzado',
            English:'Complete Excel Certificate of Completion - From Beginner To Advanced'
        },
        url: '',
        badges: [],
        Campus:{
            Spanish:'UDEMY',
            English:'UDEMY',
        },
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2020,
            month:7,
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
            Spanish:'Computer Vision and Image Processing Essentials',
            English:'Computer Vision and Image Processing Essentials'
        },
        url: 'https://www.credly.com/badges/bb4cdc07-bf5c-486c-a0c2-3592c633c35f/linked_in?t=ryzi3q',
        badges: [<img src={ibmvision} alt=""/>],
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
            day:6
        },
    },
    {
        Title:{
            Spanish:'Deep Learning Essentials with Keras',
            English:'Deep Learning Essentials with Keras'
        },
        url: 'https://www.credly.com/badges/7b107c50-e93b-4599-8f08-d30aa13fcf64/linked_in?t=ryzi59',
        badges: [<img src={ibmkeras} alt=""/>],
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
            day:4
        },
    },
    {
        Title:{
            Spanish:'Deep Learning with Tensorflow',
            English:'Deep Learning with Tensorflow'
        },
        url: 'https://www.credly.com/badges/a15a43cb-bced-464c-8d59-c0a05a990278/linked_in?t=rzn48f',
        badges: [<img src={ibmdeep} alt=""/>],
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
            day:11
        },
    },
    {
        Title:{
            Spanish:'Deep Neural Networks with PyTorch',
            English:'Deep Neural Networks with PyTorch'
        },
        url: 'https://www.credly.com/badges/a19a373e-ddb5-45a9-878f-cfd987d8e309/linked_in?t=rzk5xg',
        badges: [<img src={ibmneural} alt=""/>],
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
            day:10
        },
    },
    {
        Title:{
            Spanish:'Machine Learning with Python',
            English:'Machine Learning with Python'
        },
        url: 'https://www.credly.com/badges/edb8bc4b-fefb-4267-8619-1b2ef67fed8a/linked_in?t=ryowk6',
        badges: [<img src={ibmmachine} alt=""/>],
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
            day:1
        },
    },
    {
        Title:{
            Spanish:'IBM AI Engineering Professional Certificate (V2)',
            English:'IBM AI Engineering Professional Certificate (V2)'
        },
        badges: [<img className='bloack' src={IBMai} alt=""/>],
        url: 'https://www.credly.com/badges/07c49a5a-9c1a-4d5f-a773-33bd06b7a6e6/linked_in?t=rzubtc',
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
            Spanish:'Learning Adventures Introduction',
            English:'Learning Adventures Introduction'
        },
        badges: [<img src={lai} alt=""/>,<img src={foundations} alt=""/>],
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
            day:3
        },
    },
    {
        Title:{
            Spanish:'Twilio Platform en Español',
            English:'Twilio Platform'
        },
        badges: [<img src={platformTwilio} alt=""/>, <img src={voiceFundamentals} alt=""/>, <img src={MessagingFundamentals} alt=""/>],
        url: '',
        Campus:{
            Spanish:'Twilio',
            English:'Twilio',
        },
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2023,
            month:12,
            day:3
        },
        DateFinal:{
            year:2023,
            month:12,
            day:6
        },
    },
    {
        Title:{
            Spanish:'Twilio Platform Advanced',
            English:'Twilio Platform Advanced'
        },
        url: '',
        badges: [<img src={platformadvanced} alt=""/>],
        Campus:{
            Spanish:'Twilio',
            English:'Twilio',
        },
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2023,
            month:12,
            day:6
        },
        DateFinal:{
            year:2023,
            month:12,
            day:7
        },
    },
    {
        Title:{
            Spanish:'Flex Developer',
            English:'Flex Developer'
        },
        Campus:{
            Spanish:'Twilio',
            English:'Twilio',
        },
        url: '',
        badges: [<img src={flex} alt=""/>],
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2023,
            month:12,
            day:7
        },
        DateFinal:{
            year:2023,
            month:12,
            day:9
        },
    },
    {
        Title:{
            Spanish:'Flex Advanced',
            English:'Flex Advanced'
        },
        Campus:{
            Spanish:'Twilio',
            English:'Twilio',
        },
        url: '',
        badges: [<img src={flexadvanced} alt=""/>],
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2023,
            month:12,
            day:9
        },
        DateFinal:{
            year:2023,
            month:12,
            day:9
        },
    },
    {
        Title:{
            Spanish:'Solution Architecture 101',
            English:'Solution Architecture 101'
        },
        Campus:{
            Spanish:'Twilio',
            English:'Twilio',
        },
        url: '',
        badges: [<img src={twiliosolution101} alt=""/>],
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2023,
            month:12,
            day:9
        },
        DateFinal:{
            year:2023,
            month:12,
            day:10
        },
    },
    {
        Title:{
            Spanish:'Solution Architecture 201: Flex',
            English:'Solution Architecture 201: Flex'
        },
        Campus:{
            Spanish:'Twilio',
            English:'Twilio',
        },
        url: '',
        badges: [<img src={twiliosolution201} alt=""/>],
        Places: 'Medellín, Antioquia',
        DateInitial:{
            year:2023,
            month:12,
            day:10
        },
        DateFinal:{
            year:2023,
            month:12,
            day:16
        },
    }
]