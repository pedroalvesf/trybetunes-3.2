import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icon: <BiIcons.BiLogIn />,
        cName: 'nav-text'
    },
    {
        title: 'Search',
        path: '/search',
        icon: <FaIcons.FaSearch />,
        cName: 'nav-text'
    },
    {
        title: 'Favorites',
        path: '/favorites',
        icon: <FaIcons.FaHeart />,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <IoIcons.IoMdPerson />,
        cName: 'nav-text'
    }
];