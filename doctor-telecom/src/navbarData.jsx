import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as IoIcons2 from 'react-icons/io5';



export const SidebarData = [
  {
    title: 'Home',
    path: '/slackchannel',
    icon: <AiIcons.AiFillHome />,
    
    cName: 'nav-text'
  },
  {
    title: 'Chat',
    path: '/aichatbot',
    icon: <IoIcons2.IoChatbubbleEllipses/>,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    //path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    //path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    //path: '/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    //path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    //path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];