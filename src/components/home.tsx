import { CardSpotlight } from "./ui/card-spotlight";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiReadCvLogoFill } from "react-icons/pi";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";

function Home() {
    return (
        <div className="w-full h-full md:h-5/6" id="home">
            <CardSpotlight className="hidden w-full h-full md:flex flex-row justify-around items-center">
                <div className="flex flex-col z-20 mr-10">
                    <div className="flex flex-row gap-2 items-center justify-start">
                        <img src="/hello2.gif" width={30} />
                        <p className="font-medium text-lg">Hi there!</p>
                        <p className="font-medium text-lg">I'm</p>
                    </div>
                    <div className="flex flex-row gap-4 text-xl lg:text-2xl">
                        <h1>Claudio </h1>
                        <h1 className="font-bold">Paloscia</h1>
                    </div>
                    <h2 className="text-ternary text-xl lg:text-2xl font-semibold">
                        Software Engineer Specialist @ xAI
                    </h2>
                    <h3>
                        University of Illinois <strong>Chicago</strong> and
                        Politecnico di <strong>Milano</strong>
                    </h3>
                    <div className="flex flex-row gap-4 mt-5">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href="https://github.com/ClaPalo"
                                        target="_blank"
                                    >
                                        <FaGithub
                                            size={30}
                                            className="hover:-translate-y-1 hover:scale-110 transition-all ease-in-out"
                                        />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Github</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href="https://www.linkedin.com/in/claudio-paloscia"
                                        target="_blank"
                                    >
                                        <FaLinkedin
                                            size={30}
                                            className="hover:-translate-y-1 hover:scale-110 transition-all ease-in-out"
                                        />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>LinkedIn</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href="/Paloscia_Resume_October.pdf"
                                        target="_blank"
                                    >
                                        <PiReadCvLogoFill
                                            size={30}
                                            className="hover:-translate-y-1 hover:scale-110 transition-all ease-in-out"
                                        />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Resume</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
                <div className="z-20">
                    {/* <a href="https://www.vecteezy.com/free-vector/programmer"> */}
                    <img
                        src="/illustration.png"
                        alt="Claudio Paloscia"
                        width={500}
                    />
                    {/* </a> */}
                </div>
            </CardSpotlight>
            <div className="flex flex-col justify-center items-center h-full w-full md:hidden">
                <div className="mx-20 mb-10">
                    {/* <a href="https://www.vecteezy.com/free-vector/programmer"> */}
                    <img
                        src="/illustration.png"
                        alt="Claudio Paloscia"
                        width={500}
                    />
                    {/* </a> */}
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex flex-row gap-2 items-center justify-start">
                        <img src="/hello2.gif" width={25} />
                        <p className="font-medium text-sm">Hi there!</p>
                        <p className="font-medium text-sm">I'm</p>
                    </div>
                    <div className="flex flex-row gap-4 text-sm">
                        <h1>Claudio </h1>
                        <h1 className="font-bold">Paloscia</h1>
                    </div>
                    <h2 className="text-ternary text-sm font-semibold">
                        Computer Science and Engineering student
                    </h2>
                    <h3 className="text-xs">
                        University of Illinois <strong>Chicago</strong> and
                        Politecnico di <strong>Milano</strong>
                    </h3>
                    <div className="flex flex-row gap-4 mt-5">
                        <a href="https://github.com/ClaPalo" target="_blank">
                            <FaGithub
                                size={20}
                                className="hover:-translate-y-1 hover:scale-110 transition-all ease-in-out"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/claudio-paloscia"
                            target="_blank"
                        >
                            <FaLinkedin
                                size={20}
                                className="hover:-translate-y-1 hover:scale-110 transition-all ease-in-out"
                            />
                        </a>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href="/Resume_Paloscia_September_2024.pdf"
                                        target="_blank"
                                    >
                                        <PiReadCvLogoFill
                                            size={20}
                                            className="hover:-translate-y-1 hover:scale-110 transition-all ease-in-out"
                                        />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Resume</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
