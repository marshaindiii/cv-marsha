"use client"
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA  = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>Figma</li>
                <li>MIT App Inventor</li>
            </ul>
        )
    }
]

   const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
    startTransition(() => {
        setTab(id);
    });

    }

    return (
    <section className="text-white"><div className="md:grid md:grid-cols-2 gap-8 item-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16
    " id="about">
        <Image src="/images/pict aboutme.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
                I am Marshaiva Indi Azaria. I studied vocational high school at SMK Negeri 1 Denpasar 
                semester 4 or class 11.  I am a student majoring in Software Engineering. 
                I have the ability to create UI/UX designs, create websites using HTML, 
                CSS programming languages, and 
                am also learning NextJS. While at school, I created several personal, group, 
                and senior websites assigned by my teacher several times.
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} 
                    active={tab === "skills"}> 
                    Skills 
                    </TabButton>
                </div>
                <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
                </div>
          </section>
    );
};

export default AboutSection;