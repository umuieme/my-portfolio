"use client"
import Image from 'next/image';
import React, { startTransition, useState, useTransition } from 'react'
import { TabButton } from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Android</li>
                <li>iOS</li>
                <li>Flutter</li>
                <li>React Native</li>
                <li>Java//Kotlin</li>
                <li>Dart</li>
                <li>JavaScript</li>
                <li>TypeScript</li>

            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Software and Information System testing</li>
                <li>B.Sc. CSIT</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li>Junior Developer</li>
                <li>Lead Engineer</li>

            </ul>
        )
    }
]

export const AboutMe = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, setTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(()=>{
            setTab(id);
        })
    }

  return (
    <section>
        <div className='text-white '>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <div className='flex flex-col h-full items-center'>
                <Image src="/about-image.png" alt='about me' width={400} height={400}/>
                </div>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold mb-4 text-white'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        Laboris et in veniam proident eiusmod ad voluptate. Et do fugiat elit labore aute deserunt proident sit ut consequat. Occaecat proident veniam eu esse consequat velit ex magna ad ullamco qui sunt. Eiusmod aute fugiat fugiat laborum cillum irure. Labore nisi eu consectetur tempor nostr
                    </p>
                    <div className='flex flex-row mt-4'>
                        <TabButton active={tab == "skills"} selectTab={()=> handleTabChange("skills")} >
                            Skills
                        </TabButton>
                        <TabButton active={tab == "education"} selectTab={()=> handleTabChange("education")} >
                            Education
                        </TabButton>
                        <TabButton active={tab == "experience"} selectTab={()=> handleTabChange("experience")} >
                            Experience
                        </TabButton>
                        
                    </div>
                    <div className='mt-8'>
                     {
                        TAB_DATA.find((t)=> t.id === tab)?.content
                     }
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}
