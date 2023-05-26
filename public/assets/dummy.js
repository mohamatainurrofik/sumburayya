import {  facebook, instagram, linkedin, twitter, send, shield, star  } from "../assets";
import { myPhoto, project1, project2, project3, project4, project5 } from "../assets"; 
export const content ={
  hero : {
    content : "Never too late to learn something new, keep learning from failure. because success only comes to those who never stop trying.",
    link : "https://drive.google.com/file/d/18OD9IP3ya2KG6Mjl4BuCvOwJVIkMXEg0/view?usp=drivesdk/",
    subject : "TES",
    logo : "",

  },
  bio : {
    content : "Well, Now i'm a fresh graduate and be a junior web programmer from indonesia and still growing to be a professional programmer. and now i'am focus in backend programmer.",
    picture : myPhoto,
  },
  project : [
    {
      id : "project1",
      title : "Inventory Manajement System",
      picture : project3,
      link : "https://simatory.infinityfreeapp.com/",
      description : "Build with Codeigniter 4"
    },
    {
      id : "project2",
      title : "Sub-District Company Profile",
      picture : project1,
      link : "https://github.com/mohamatainurrofik/",
      description : "Build with Codeigniter 3"
    },
    {
      id : "project3",
      title : "Academic Information System",
      picture : project4,
      link : "http://sim.infinityfreeapp.com/",
      description : "Build with Laravel 7"
    },
    {
      id : "project4",
      title : "Organization Company Profile",
      picture : project2,
      link : "http://compro.infinityfreeapp.com/",
      description : "Build with Codeigniter 3"
    },
    {
      id : "project5",
      title : "Pharmacy Stock Manajemen System",
      picture : project5,
      link : "http://apotek.infinityfreeapp.com/",
      description : "Build with Codeigniter 4"
    },
  ]
};

export const navLinks = [
  {
    id: "home",
    title: "Home",
    child : [
        {
            id: "landingPage",
            title: "Landing Page",
        },
        {
            id: "about",
            title: "About",
        },
    ]
  },
  {
    id: "about",
    title: "About",
    child : [
        {
            id: "home",
            title: "Home",
        }
    ]
  },
  {
    id: "portofolio",
    title: "Portofolio",
    child : [
        {
            id: "customer",
            title: "Customer",
        },
        {
            id: "catalog",
            title: "Catalog",
        },
        {
            id: "workshop",
            title: "Workshop",
        },
        
    ]
  },
  {
    id: "service",
    title: "Service",
    child : [
        {
            id: "primer",
            title: "Primer",
        },
        {
            id: "sekunder",
            title: "Sekunder",
        },
    ]
  },
  {
    id: "news",
    title: "News",
    child : [
        {
            id: "inovation",
            title: "Inovation",
        },
        {
            id: "team",
            title: "Teams",
        },
        {
            id: "essay",
            title: "Essay",
        },
        {
            id: "essay",
            title: "Essay",
        },
    ]
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: "people01",
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: "people02",
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: "people03",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/fiqq_0/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/mohamatainur/",
  },
  {
    id: "social-media-3",
    icon: linkedin,
    link: "https://www.linkedin.com/in/ainurrofik/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: "airbnb",
  },
  {
    id: "client-2",
    logo: "binance",
  },
  {
    id: "client-3",
    logo: "coinbase",
  },
  {
    id: "client-4",
    logo: "dropbox",
  },
];
