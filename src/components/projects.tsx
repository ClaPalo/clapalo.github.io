import "../project.css";
import { WobbleCard } from "./ui/wobble-card";
import { FaGithub } from "react-icons/fa";

function Projects() {
    return (
        <div
            id="projects"
            className="w-full h-full flex flex-col justify-start items-center px-10 lg:px-10"
        >
            <h1 className="text-ternary font-bold text-4xl md:text-7xl">
                My Projects
            </h1>
            <div className="hidden md:grid grid-cols-3 w-full lg:w-2/3 h-full gap-3 mt-10">
                <WobbleCard
                    containerClassName="col-span-3 rounded-2xl h-full card-violet"
                    className="card card-violet"
                >
                    <div className="card-content text-white flex flex-row justify-around">
                        <div>
                            <a
                                href="https://freeroom.digital"
                                target="_blank"
                                className="cursor-pointer"
                            >
                                <div className="inline-block relative">
                                    <div className="block">
                                        <img
                                            src="/click.gif"
                                            alt="click"
                                            width={70}
                                            className="absolute top-0 -right-12"
                                        />
                                    </div>
                                    <img
                                        src="/freeroom.png"
                                        alt="freeroom"
                                        width={200}
                                    />
                                </div>
                            </a>
                            <p className="my-3 w-1/2 z-30">
                                Group project born at Politecnico di Milano, the
                                aim is to provide students and staff insights
                                regarding the class occupation in real-time.
                                <br />
                                <br />
                                Platform (under development) created using{" "}
                                <strong>AstroJS</strong>,
                                <strong>InfluxDB</strong> and deployed on{" "}
                                <strong>Cloudflare</strong>.
                            </p>
                        </div>
                        <img
                            src="screen-freeroom.png"
                            alt="freeroom"
                            width={600}
                            className="absolute -right-[60%] xl:-right-[60%] 2xl:-right-[35%] -bottom-[50%] object-cover rounded-2xl scale-125"
                        />
                    </div>
                </WobbleCard>
                <WobbleCard
                    containerClassName="col-span-2 rounded-2xl h-full relative card-cyan"
                    className="card card-cyan"
                >
                    <div className="card-content w-full h-full text-black">
                        <div>
                            <h1 className="font-semibold text-4xl z-30">
                                Academic Portfolio
                            </h1>
                            <p className="my-3 w-2/3 z-30">
                                <strong>Responsive</strong> design of a
                                professional portfolio, based on extensive use
                                of <strong>React waypoints</strong> and{" "}
                                <strong>CSS scroll snap</strong>.{" "}
                            </p>
                            <a
                                href="https://github.com/ClaPalo/Academic-Portfolio"
                                target="_blank"
                                className="text-black hover:text-black z-30"
                            >
                                <FaGithub size={30} />
                            </a>
                        </div>
                    </div>
                    <img
                        src="/portfolio.png"
                        alt="portfolio"
                        width={1000}
                        className="absolute -bottom-[40%] -right-[40%] md:-bottom-[10%] lg:-bottom-[10%] xl:-bottom-[20%] 2xl:-bottom-[75%]  object-cover rounded-2xl scale-125"
                    />
                </WobbleCard>
                <WobbleCard
                    containerClassName="col-span-1 rounded-2xl h-full card-yellow"
                    className="card card-yellow "
                >
                    <div className="card-content text-black">
                        <h1 className="font-semibold text-4xl z-30">
                            Eriantys
                        </h1>
                        <p className="my-3 w-full z-30">
                            Digital version of the board game Eriantys,
                            developed in <strong>Java</strong> using MVC
                            pattern. Supports GUI and CLI.
                        </p>
                        <a
                            href="https://github.com/ClaPalo/ing-sw-2022-Liu-Nobile-Paloscia"
                            target="_blank"
                            className="text-black hover:text-black z-30"
                        >
                            <FaGithub size={30} />
                        </a>
                    </div>
                </WobbleCard>
            </div>
            <div className="md:hidden grid grid-cols-1 w-5/6 h-full gap-3 mt-10">
                <div className="col-span-1 card card-violet rounded-2xl h-full card-violet p-2 items-center">
                    <div className="card-content text-white flex flex-row justify-around">
                        <div className="flex flex-col justify-center items-center">
                            <a
                                href="https://freeroom.digital"
                                target="_blank"
                                className="cursor-pointer"
                            >
                                <div className="inline-block relative">
                                    <div className="block">
                                        <img
                                            src="/click.gif"
                                            alt="click"
                                            width={50}
                                            className="absolute top-0 -right-8"
                                        />
                                    </div>
                                    <img
                                        src="/freeroom.png"
                                        alt="freeroom"
                                        width={150}
                                    />
                                </div>
                            </a>
                            <p className="my-3 w-full z-30 text-center text-sm">
                                Group project born at Politecnico di Milano, the
                                aim is to provide students and staff insights
                                regarding the class occupation in real-time.
                                <br />
                                <br />
                                Platform (under development) created using{" "}
                                <strong>AstroJS</strong>,
                                <strong>InfluxDB</strong> and deployed on{" "}
                                <strong>Cloudflare</strong>.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card card-cyancol-span-1 rounded-2xl h-full relative card-cyan p-2 items-center">
                    <div className="card-content w-full h-full text-white items-center flex flex-col justify-center">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="font-semibold text-2xl z-30">
                                Academic Portfolio
                            </h1>
                            <p className="my-3 w-2/3 z-30 text-center text-sm">
                                <strong>Responsive</strong> design of a
                                professional portfolio, based on extensive use
                                of <strong>React waypoints</strong> and{" "}
                                <strong>CSS scroll snap</strong>.{" "}
                            </p>
                            <a
                                href="https://github.com/ClaPalo/Academic-Portfolio"
                                target="_blank"
                                className="text-white invalid:z-30"
                            >
                                <FaGithub size={25} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 card card-yellow rounded-2xl h-full card-yellow p-2 items-center">
                    <div className="card-content text-white">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="font-semibold text-2xl z-30">
                                Eriantys
                            </h1>
                            <p className="my-3 w-full z-30 text-center text-sm">
                                Digital version of the board game Eriantys,
                                developed in <strong>Java</strong> using MVC
                                pattern. Supports GUI and CLI.
                            </p>
                            <a
                                href="https://github.com/ClaPalo/ing-sw-2022-Liu-Nobile-Paloscia"
                                target="_blank"
                                className="text-white z-30"
                            >
                                <FaGithub size={25} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
