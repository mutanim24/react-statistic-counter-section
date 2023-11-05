// import React from 'react';
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";
import { AiOutlineClockCircle } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { FaAward } from 'react-icons/fa';

const ReactCounter = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 m-7 bg-transparent">
                <div className="bg-[#151414] text-[#20e494] p-8 rounded-2xl space-y-3 transform transition hover:scale-105">
                    <AiOutlineClockCircle className="text-[#20e494] text-5xl mx-auto"></AiOutlineClockCircle>
                    <h1 className="text-5xl font-bold text-center">
                        {counterOn && <CountUp start={0} end={10} duration={2} delay={0}></CountUp>}
                    </h1>
                    <h4 className="text-xl text-center">Years Of Experience</h4>
                </div>
                <div className="bg-[#151414] text-[#20e494] p-8 rounded-2xl space-y-3 transform transition hover:scale-105">
                    <CgWebsite className="text-[#20e494] text-5xl mx-auto"></CgWebsite>
                    <h1 className="text-5xl font-bold text-center">
                        {counterOn && <CountUp start={0} end={210} duration={2} delay={0}></CountUp>}
                    </h1>
                    <h4 className="text-xl text-center">Project’s Complete</h4>
                </div>
                <div className="bg-[#151414] text-[#20e494] p-8 rounded-2xl space-y-3 transform transition hover:scale-105">
                    <BsFillPersonCheckFill className="text-[#20e494] text-5xl mx-auto"></BsFillPersonCheckFill>
                    <h1 className="text-5xl font-bold text-center">
                        {counterOn && <CountUp start={0} end={45} duration={2} delay={0}></CountUp>}+
                    </h1>
                    <h4 className="text-xl text-center">Professionals Team Member</h4>
                </div>
                <div className="bg-[#151414] text-[#20e494] p-8 rounded-2xl space-y-3 transform transition hover:scale-105">
                    <FaAward className="text-[#20e494] text-5xl mx-auto"></FaAward>
                    <h1 className="text-5xl font-bold text-center">
                        {counterOn && <CountUp start={0} end={11} duration={2} delay={0}></CountUp>}
                    </h1>
                    <h4 className="text-xl text-center">Awards Winning</h4>
                </div>


            </div>
        </ScrollTrigger>
    );
};

export default ReactCounter;