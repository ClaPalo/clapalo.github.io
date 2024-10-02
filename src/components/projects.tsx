import "../project.css";
import { WobbleCard } from "./ui/wobble-card";
import { FaGithub } from "react-icons/fa";

function Projects() {
    return (
        <div
            id="projects"
            className="w-full h-full flex flex-col justify-start items-center px-32"
        >
            <h1 className="text-ternary font-bold">My Projects</h1>
            <div className="grid grid-cols-3 w-2/3 h-full gap-3 mt-10">
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
                        className="absolute -bottom-[40%] -right-[40%] md:-bottom-[10%] lg:-bottom-[20%] xl:-bottom-[30%] 2xl:-bottom-[55%]  object-cover rounded-2xl scale-125"
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
                                <img
                                    src="/freeroom.png"
                                    alt="freeroom"
                                    width={200}
                                />
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
            </div>
        </div>
    );
}

export default Projects;
