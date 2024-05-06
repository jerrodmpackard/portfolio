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
            <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
                <div className='grid sm:grid-cols-2 items-center justify-center'>
                    <img className='h-[400px] md:h-[500px] lg:h-[600px] pl-5 md:pl-10 mx-auto' src={Jerrod.src} alt='Jerrod' />
                    <div className='sm:px-5 md:px-10'>
                        <p className="text-4xl md:text-6xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 py-8">Hi there! I’m Jerrod Packard</p>
                        <p className="text-xl md:text-3xl lg:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700">A Front End Web Developer passionate about creating interactive applications and experiences on the web</p>
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
                                PottyMap
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                A full stack application designed to help users find nearby bathrooms. Built in Next.js and C#, leveraging the Mapbox API.
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
                                A weather application built in Next.js, leveraging the OpenWeatherMap API.
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
                                Pokedex
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                A pokedex application built in React, leveraging the Pokemon API.
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

            <div>
                <h1 className='text-center text-4xl md:text-6xl lg:text-7xl font-bold py-8'>Skills</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 px-5'>
                    
                </div>
            </div>

        </>

    )
}

export default Portfolio
