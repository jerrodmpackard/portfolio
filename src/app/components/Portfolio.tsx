'use client'
import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Jerrod from '../assets/IMG_9129 copy 2.png'
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import pottymap from '../assets/pottymap.png'
import sunnyweather from '../assets/sunnyweather.png'
import pokedex from '../assets/pokedex.png'

import { FaReact, FaHtml5, FaBootstrap, FaFigma, FaGithub, FaSlack } from "react-icons/fa6";
import { IoLogoReact, IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import { SiCsharp, SiDotnet, SiTailwindcss, SiMicrosoftsqlserver, SiMicrosoftazure, SiPostman, SiJira, SiNotion, SiVisualstudiocode } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";
import { IconContext } from "react-icons";

const Portfolio = () => {
    return (
        <>
            {/* Navbar */}
            <div className='mx-auto '>
                <Navbar fluid rounded>
                    <NavbarBrand as={Link} href="#">
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Jerrod Packard</span>
                    </NavbarBrand>
                    <NavbarToggle />
                    <NavbarCollapse>
                        <NavbarLink href="https://www.linkedin.com/in/jerrodpackard/" target="_blank">LinkedIn</NavbarLink>
                        <NavbarLink href="https://github.com/jerrodmpackard" target="_blank">GitHub</NavbarLink>
                        <NavbarLink href="https://drive.google.com/file/d/1ya8ScLCV7v61Ssj5i8cWZODGkkSzADCV/view?usp=drive_link" target="_blank">Resume</NavbarLink>
                    </NavbarCollapse>
                </Navbar>
            </div>

            {/* Hero Header */}
            <div className="h-[42rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
                <div className='grid sm:grid-cols-2 xl:grid-cols-3 items-center justify-center'>
                    <img className='h-[400px] md:h-[500px] lg:h-[600px] pl-5 md:pl-10 mx-auto' src={Jerrod.src} alt='Jerrod' />
                    <div className='px-5 md:px-10 lg:px-16 xl:col-span-2'>
                        <p className="text-4xl md:text-6xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 py-8">Hi there! I’m Jerrod Packard</p>
                        <p className="text-xl md:text-3xl lg:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700">A Front End Web Developer passionate about creating interactive applications and experiences on the web</p>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className='bg-neutral-700 text-white'>
                <h1 className='text-center text-4xl md:text-6xl lg:text-7xl font-bold py-8'>Skills</h1>
                <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-10 pb-8'>
                    <div className='grid grid-cols-2 gap-4 py-8 border rounded-xl'>
                        <h1 className='col-span-2 text-center text-4xl font-semibold'>Tech Stack</h1>
                        <div className='grid justify-center'>
                            <IconContext.Provider value={{ size: '50' }}>
                                <div>
                                    <FaHtml5 className='mx-auto' />
                                </div>
                            </IconContext.Provider>
                            <p className='text-center'>HTML</p>
                        </div>
                        <div className='grid justify-center'>
                            <IconContext.Provider value={{ size: '50' }}>
                                <div>
                                    <IoLogoCss3 className='mx-auto' />
                                </div>
                            </IconContext.Provider>
                            <p className='text-center'>CSS</p>
                        </div>
                        <div className='grid justify-center'>
                            <IconContext.Provider value={{ size: '50' }}>
                                <div>
                                    <IoLogoJavascript className='mx-auto w-10' />
                                </div>
                            </IconContext.Provider>
                            <p className='text-center'>JavaScript</p>
                        </div>
                        <div className='grid justify-center'>
                            <IconContext.Provider value={{ size: '50' }}>
                                <div>
                                    <BiLogoTypescript className='mx-auto w-10' />
                                </div>
                            </IconContext.Provider>
                            <p className='text-center'>TypeScript</p>
                        </div>
                        <div className='grid justify-center'>
                            <IconContext.Provider value={{ size: '50' }}>
                                <div>
                                    <FaReact className='mx-auto w-10' />
                                </div>
                            </IconContext.Provider>
                            <p className='text-center'>React</p>
                        </div>
                        <div className='grid justify-center'>
                            <IconContext.Provider value={{ size: '50' }}>
                                <div>
                                    <TbBrandNextjs className='mx-auto w-10' />
                                </div>
                            </IconContext.Provider>
                            <p className='text-center'>Next.js</p>
                        </div>
                        <div className='grid justify-center'>
                            <IconContext.Provider value={{ size: '50' }}>
                                <div>
                                    <SiTailwindcss className='mx-auto w-10' />
                                </div>
                            </IconContext.Provider>
                            <p className='text-center'>Tailwind</p>
                        </div>
                        <div className='grid justify-center'>
                            <IconContext.Provider value={{ size: '50' }}>
                                <div>
                                    <FaBootstrap className='mx-auto w-10' />
                                </div>
                            </IconContext.Provider>
                            <p className='text-center'>Bootstrap</p>
                        </div>
                        <div className='grid justify-center'>
                            <IconContext.Provider value={{ size: '50' }}>
                                <div>
                                    <SiCsharp className='mx-auto w-10' />
                                </div>
                            </IconContext.Provider>
                            <p className='text-center'>C#</p>
                        </div>
                        <div className='grid justify-center'>
                            <IconContext.Provider value={{ size: '50' }}>
                                <div>
                                    <SiDotnet className='mx-auto w-10' />
                                </div>
                            </IconContext.Provider>
                            <p className='text-center'>.NET</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4 py-8 border rounded-xl'>
                        <h1 className='col-span-2 text-center text-4xl font-semibold'>Tools</h1>
                        <div className='grid justify-center'>
                            <IconContext.Provider value={{ size: '50' }}>
                                <div>
                                    <SiVisualstudiocode className='mx-auto' />
                                </div>
                            </IconContext.Provider>
                            <p className='text-center'>VSCode</p>
                        </div>
                        <div className='grid justify-center'>
                            <IconContext.Provider value={{ size: '50' }}>
                                <div>
                                    <FaGithub className='mx-auto' />
                                </div>
                            </IconContext.Provider>
                            <p className='text-center'>GitHub</p>
                        </div>
                        <div className='grid justify-center'>
                            <IconContext.Provider value={{ size: '50' }}>
                                <div>
                                    <SiMicrosoftazure className='mx-auto w-10' />
                                </div>
                            </IconContext.Provider>
                            <p className='text-center'>Azure</p>
                        </div>
                        <div className='grid justify-center'>
                            <IconContext.Provider value={{ size: '50' }}>
                                <div>
                                    <SiMicrosoftsqlserver className='mx-auto w-10' />
                                </div>
                            </IconContext.Provider>
                            <p className='text-center'>SQL Server</p>
                        </div>
                        <div className='grid justify-center'>
                            <IconContext.Provider value={{ size: '50' }}>
                                <div>
                                    <SiPostman className='mx-auto w-10' />
                                </div>
                            </IconContext.Provider>
                            <p className='text-center'>Postman</p>
                        </div>
                        <div className='grid justify-center'>
                            <IconContext.Provider value={{ size: '50' }}>
                                <div>
                                    <SiJira className='mx-auto w-10' />
                                </div>
                            </IconContext.Provider>
                            <p className='text-center'>Jira</p>
                        </div>
                        <div className='grid justify-center'>
                            <IconContext.Provider value={{ size: '50' }}>
                                <div>
                                    <FaFigma className='mx-auto w-10' />
                                </div>
                            </IconContext.Provider>
                            <p className='text-center'>Figma</p>
                        </div>
                        <div className='grid justify-center'>
                            <IconContext.Provider value={{ size: '50' }}>
                                <div>
                                    <IoLogoVercel className='mx-auto w-10' />
                                </div>
                            </IconContext.Provider>
                            <p className='text-center'>Vercel</p>
                        </div>
                        <div className='grid justify-center'>
                            <IconContext.Provider value={{ size: '50' }}>
                                <div>
                                    <FaSlack className='mx-auto w-10' />
                                </div>
                            </IconContext.Provider>
                            <p className='text-center'>Slack</p>
                        </div>
                        <div className='grid justify-center'>
                            <IconContext.Provider value={{ size: '50' }}>
                                <div>
                                    <SiNotion className='mx-auto w-10' />
                                </div>
                            </IconContext.Provider>
                            <p className='text-center'>Notion</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div>
                <h1 className='text-center text-4xl md:text-6xl lg:text-7xl font-bold py-8'>Projects</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 px-5'>
                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                Potty Map
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                A comprehensive full stack application tailored to assisting users in locating nearby bathrooms. Created with Next.js and C#, it seamlessly integrates with the Mapbox API to deliver an immersive mapping experience. The interactive map dynamically showcases real-time data sourced directly from user inputs, all managed within a robust SQL Server database.
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={pottymap}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href="https://pottymap.vercel.app/"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Check it out →
                                </CardItem>
                                {/* <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Sign up
                            </CardItem> */}
                            </div>
                        </CardBody>
                    </CardContainer>

                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                Sunny Weather
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                This weather application, crafted with Next.js, harnesses the power of the OpenWeatherMap API to provide users with accurate weather information. Users have the option to either search for a city manually or utilize the geolocation feature for instant access to current and five-day weather forecasts. Additionally, seamless integration with local storage empowers users to curate a personalized favorites list of cities.
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={sunnyweather}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href="https://packardjweatherapprebuild-seven.vercel.app/"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Check it out →
                                </CardItem>
                                {/* <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Sign up
                            </CardItem> */}
                            </div>
                        </CardBody>
                    </CardContainer>

                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                Pokédex
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                Developed in React and powered by the Pokémon API, this Pokédex application empowers users to explore Pokémon from generations 1-5. Users can quickly retrieve detailed information by searching with either the Pokémon's name or ID number. Additionally, a randomizer feature generates a surprise Pokémon with a simple button click. Plus, the integration of local storage enables users to save their favorite Pokémon for easy access.
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={pokedex}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href="https://packard-j-pokemon-api-challenge.vercel.app/"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Check it out →
                                </CardItem>
                                {/* <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Sign up
                            </CardItem> */}
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
            </div>

            {/* Skills Section */}
            <div className='bg-neutral-700 text-white pb-8'>
                <h1 className='text-center text-4xl md:text-6xl lg:text-7xl font-bold py-8'>Contact</h1>
                <p className='text-center text-xl pb-4'>jpackard@codestack.co</p>
                <p className='text-center text-xl pb-4'>Stockton, CA</p>
                <p className='text-center text-xl'>(209) 565-3871</p>
            </div>
        </>

    )
}

export default Portfolio
