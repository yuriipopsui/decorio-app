<<<<<<< HEAD
import menu_image_1 from '@/assets/images/menu-image-1.png';
import type { StaticImageData } from 'next/image';

type DropdownItem = {
  id: number;
  name: string;
  path: string;
};

type MegaMenuItem = {
  id: number;
  menus: {
    id: number;
    name: string;
    path: string;
    desc: string;
    img?: string | StaticImageData; // необов’язково, тільки для деяких
  }[];
};

type MenuItem = {
  id: number;
  name: string;
  path: string;
  isDropdown: DropdownItem[] | false;
  isMegaMenu: MegaMenuItem[] | false;
};

export const menuList: MenuItem[] = [
  {
    id: 1,
    name: 'Home',
    path: '/',
    isMegaMenu: false,
    isDropdown: [
      {
        id: 1,
        name: 'Home 1',
        path: '/home-1',
      },
      {
        id: 2,
        name: 'Home 2',
        path: '/home-2',
      },
      {
        id: 3,
        name: 'Home 3',
        path: '/home-3',
      },
      {
        id: 4,
        name: 'Home 4',
        path: '/home-4',
      },
    ],
  },
  {
    id: 2,
    name: 'Projects',
    path: '/project-archive',
    isMegaMenu: false,
    isDropdown: false,
  },
  {
    id: 3,
    name: 'Services',
    path: '#',
    isDropdown: false,
    isMegaMenu: [
      {
        id: 1,
        menus: [
          {
            id: 1,
            name: 'Residential Design',
            path: '/service-single',
            desc: 'Everything from concept to completion',
          },
          {
            id: 2,
            name: 'Commercial Design',
            path: '/service-single',
            desc: 'Focuses on optimizing functionality and aesthetics',
          },
          {
            id: 3,
            name: 'Space Planning',
            path: '/service-single',
            desc: 'Maximize the potential of your space',
          },
        ],
      },
      {
        id: 2,
        menus: [
          {
            id: 4,
            name: 'Color Consultation',
            path: '/service-single',
            desc: 'We help you choose the perfect palette',
          },
          {
            id: 5,
            name: 'Project Management',
            path: '/service-single',
            desc: 'We oversee every detail for a successful project',
          },
          {
            id: 6,
            name: 'Custom Furnishings',
            path: '/service-single',
            desc: 'Elevate your space with unique furnishings',
          },
        ],
      },
      {
        id: 3,
        menus: [
          {
            id: 7,
            name: 'Concept Development',
            path: '/service-single',
            desc: 'Develop a design concept',
          },
          {
            id: 8,
            name: 'Revamps & Remodels',
            path: '/service-single',
            desc: 'Renovation and remodeling services that breathe new life',
          },
        ],
      },
      {
        id: 5,
        menus: [
          {
            id: 9,
            name: 'Embark on a Design Journey with Us',
            path: '#',
            desc: 'Let’s Talk',
            img: menu_image_1,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Pages',
    path: '#',
    isMegaMenu: false,
    isDropdown: [
      {
        id: 1,
        name: 'About Us',
        path: '/about-us',
      },
      {
        id: 2,
        name: 'Services',
        path: '/services',
      },
      {
        id: 4,
        name: 'Project Single',
        path: '/project-single',
      },
      {
        id: 5,
        name: 'Product Archive',
        path: '/product-archive',
      },
      {
        id: 6,
        name: 'Product Single',
        path: '/product-single',
      },
      {
        id: 7,
        name: 'Login',
        path: '/login',
      },
      {
        id: 8,
        name: 'Career',
        path: '/career',
      },
      {
        id: 9,
        name: 'Job Details',
        path: '/job-details',
      },
      {
        id: 10,
        name: 'Team',
        path: '/team',
      },
      {
        id: 11,
        name: 'Team Single',
        path: '/team-single',
      },
      {
        id: 12,
        name: 'Contact 2',
        path: '/contact-2',
      },
      {
        id: 13,
        name: 'Cart',
        path: '/cart',
      },
      {
        id: 14,
        name: 'Checkout',
        path: '/checkout',
      },
    ],
  },
  {
    id: 5,
    name: 'Blog',
    path: '#',
    isMegaMenu: false,
    isDropdown: [
      {
        id: 1,
        name: 'Blog Archive',
        path: '/blog-archive',
      },
      {
        id: 2,
        name: 'Blog Single',
        path: '/blog-single',
      },
      {
        id: 3,
        name: 'Blog Left Sidebar',
        path: '/blog-left-sidebar',
      },
      {
        id: 4,
        name: 'Blog Right Sidebar',
        path: '/blog-right-sidebar',
      },
    ],
  },
  {
    id: 6,
    name: 'Contact',
    path: '/contact',
    isMegaMenu: false,
    isDropdown: false,
  },
];
=======
import menu_image_1 from "@/assets/images/menu-image-1.png";
import type { StaticImageData } from "next/image";

type DropdownItem = {
    id: number;
    name: string;
    path: string;
};

type MegaMenuItem = {
    id: number;
    menus: {
        id: number;
        name: string;
        path: string;
        desc: string;
        img?: string | StaticImageData; // необов’язково, тільки для деяких
    }[];
}

type MenuItem = {
    id: number;
    name: string;
    path: string;
    isDropdown: DropdownItem[] | false;
    isMegaMenu: MegaMenuItem[] | false;
}

export const menuList: MenuItem[] = [
    {
        id: 1,
        name: "Home",
        path: "/",
        isMegaMenu: false,
        isDropdown: [
            {
                id: 1,
                name: "Home 1",
                path: "/home-1"
            },
            {
                id: 2,
                name: "Home 2",
                path: "/home-2"
            },
            {
                id: 3,
                name: "Home 3",
                path: "/home-3"
            },
            {
                id: 4,
                name: "Home 4",
                path: "/home-4"
            },

        ]
    },
    {
        id: 2,
        name: "Projects",
        path: '/project-archive',
        isMegaMenu: false,
        isDropdown: false
    },
    {
        id: 3,
        name: "Services",
        path: "#",
        isDropdown: false,
        isMegaMenu: [
            {
                id: 1,
                menus: [
                    {
                        id: 1,
                        name: "Residential Design",
                        path: "/service-single",
                        desc: "Everything from concept to completion"
                    },
                    {
                        id: 2,
                        name: "Commercial Design",
                        path: "/service-single",
                        desc: "Focuses on optimizing functionality and aesthetics"
                    },
                    {
                        id: 3,
                        name: "Space Planning",
                        path: "/service-single",
                        desc: "Maximize the potential of your space"
                    }
                ]
            },
            {
                id: 2,
                menus: [
                    {
                        id: 4,
                        name: "Color Consultation",
                        path: "/service-single",
                        desc: "We help you choose the perfect palette"
                    },
                    {
                        id: 5,
                        name: "Project Management",
                        path: "/service-single",
                        desc: "We oversee every detail for a successful project"
                    },
                    {
                        id: 6,
                        name: "Custom Furnishings",
                        path: "/service-single",
                        desc: "Elevate your space with unique furnishings"
                    }
                ]
            },
            {
                id: 3,
                menus: [
                    {
                        id: 7,
                        name: "Concept Development",
                        path: "/service-single",
                        desc: "Develop a design concept"
                    },
                    {
                        id: 8,
                        name: "Revamps & Remodels",
                        path: "/service-single",
                        desc: "Renovation and remodeling services that breathe new life"
                    }
                ]
            },
            {
                id: 5,
                menus: [
                    {
                        id: 9,
                        name: "Embark on a Design Journey with Us",
                        path: "#",
                        desc: "Let’s Talk",
                        img: menu_image_1
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Pages",
        path: "#",
        isMegaMenu: false,
        isDropdown: [
            {
                id: 1,
                name: "About Us",
                path: "/about-us"
            },
            {
                id: 2,
                name: "Services",
                path: "/services"
            },
            {
                id: 4,
                name: "Project Single",
                path: "/project-single"
            },
            {
                id: 5,
                name: "Product Archive",
                path: "/product-archive"
            },
            {
                id: 6,
                name: "Product Single",
                path: "/product-single"
            },
            {
                id: 7,
                name: "Login",
                path: "/login"
            },
            {
                id: 8,
                name: "Career",
                path: "/career"
            },
            {
                id: 9,
                name: "Job Details",
                path: "/job-details"
            },
            {
                id: 10,
                name: "Team",
                path: "/team"
            },
            {
                id: 11,
                name: "Team Single",
                path: "/team-single"
            },
            {
                id: 12,
                name: "Contact 2",
                path: "/contact-2"
            },
            {
                id: 13,
                name: "Cart",
                path: "/cart"
            },
            {
                id: 14,
                name: "Checkout",
                path: "/checkout"
            }
        ]
    },
    {
        id: 5,
        name: "Blog",
        path: "#",
        isMegaMenu: false,
        isDropdown: [
            {
                id: 1,
                name: "Blog Archive",
                path: "/blog-archive"
            },
            {
                id: 2,
                name: "Blog Single",
                path: "/blog-single"
            },
            {
                id: 3,
                name: "Blog Left Sidebar",
                path: "/blog-left-sidebar"
            },
            {
                id: 4,
                name: "Blog Right Sidebar",
                path: "/blog-right-sidebar"
            },
        ]
    },
    {
        id: 6,
        name: "Contact",
        path: "/contact",
        isMegaMenu: false,
        isDropdown: false
    },
]
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
