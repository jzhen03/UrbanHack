import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as IoIcons2 from 'react-icons/io5';
import * as FaIcons2 from "react-icons/fa6";



export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,

    cName: 'nav-text'
  },
  {
    title: 'MedLink Bro',
    path: '/aichatbot',
    icon: <IoIcons2.IoChatbubbleEllipses/>,
    cName: 'nav-text' 
  },
  {
    title: 'Doctor Consult',
    path: '/slackchannel',
    icon: <FaIcons2.FaUserDoctor />,
    cName: 'nav-text'
  },
  {
    title: 'Location Availability',
    path: '/map',
    icon: <FaIcons.FaHospital/>,
    cName: 'nav-text'
  },
  {
    title: 'Patient Info',
    path: '/patientdata',
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