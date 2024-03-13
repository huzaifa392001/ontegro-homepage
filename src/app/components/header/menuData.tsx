// import { Menu } from "@/types/menu";

const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
    submenu: [],
  },
  {
    id: 2,
    title: "About us",
    path: "/about-us",
    newTab: false,
    submenu: [
      {
        title: "Ontegra?",
        submenu: [],
        path: ''

      },
      {
        title: "History",
        submenu: [
          "Background",
          "Contact Us",
        ]
      },
      {
        title: "Leadership",
        submenu: [],
        path: ''

      },
      {
        title: "Vision & Mission",
        submenu: [],
        path: 'our-vision'

      },
      {
        title: "Our-Story",
        submenu: [],
        path: 'our-story'
      },
      {
        title: "Team",
        submenu: [],
        path: 'our-team'
      },
      {
        title: "Values",
        submenu: [],
        path: ''

      },

    ],
  },
  {
    id: 3,
    title: "Services",
    path: "/services",
    newTab: false,
    submenu: [],
  },
  {
    id: 4,
    title: "Sustainability",
    path: "/sustainability",
    newTab: false,
    submenu: [],
  },
  {
    id: 5,
    title: "AI Integration",
    path: "/ai-integration",
    newTab: false,
    submenu: [],
  },
  {
    id: 6,
    title: "News",
    path: "/news",
    newTab: false,
    submenu: [],
  },
];
export default menuData;
