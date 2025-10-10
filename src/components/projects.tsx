import "../project.css";
import { WobbleCard } from "./ui/wobble-card";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

function Projects() {
    return (
        <div
            id="projects"
            className="w-full h-fit flex flex-col justify-start items-center px-10 lg:px-10"
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
                                <div className="inline-block relative">
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
                    <div className="card-content w-full h-full text-white">
                        <div>
                            <h1 className="font-semibold text-4xl z-30">
                                Inventory Management
                            </h1>
                            <p className="my-3 w-2/3 z-30">
                                Demo of an inventory management Web Application fully deployed on AWS.
                                Created using <strong>NextJS</strong>, <strong>ExpressJS</strong>, <strong>PostgreSQL</strong> and <strong>Prisma</strong>.<br />
                                Deployed with <strong>Amplify</strong>, <strong>EC2</strong>, <strong>RDS</strong>, <strong>S3</strong> and <strong>API Gateway</strong>.
                            </p>
                            <div className="flex flex-row gap-3">
                                <a
                                    href="https://github.com/ClaPalo/inventory-management"
                                    target="_blank"
                                    className="text-white z-30"
                                >
                                    <FaGithub size={30} />
                                </a>
                                <a
                                    href="https://main.d470kvzhkas7w.amplifyapp.com/"
                                    target="_blank"
                                    className="text-white z-30"
                                >
                                    <TbWorldWww size={30} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <img
                        src="/inventory.png"
                        alt="inventory"
                        width={1000}
                        className="absolute -bottom-[40%] -right-[40%] md:-bottom-[10%] lg:-bottom-[10%] xl:-bottom-[70%] 2xl:-bottom-[160%]  object-cover rounded-2xl scale-125 blur-[2px]"
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
            <div className="md:hidden grid grid-cols-1 w-5/6 h-fit gap-3 mt-10">
                <div className="col-span-1 card card-violet rounded-2xl h-full card-violet p-5 items-center">
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
                <div className="card card-cyan col-span-1 rounded-2xl h-full relative card-cyan p-2 items-center">
                    <div className="card-content w-full h-full text-white items-center flex flex-col justify-center">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="font-semibold text-2xl z-30 text-center">
                                Inventory Management
                            </h1>
                            <p className="my-3 w-2/3 z-30 text-center text-sm">
                                Demo of an inventory management Web Application fully deployed on AWS.
                                Created using <strong>NextJS</strong>, <strong>ExpressJS</strong>, <strong>PostgreSQL</strong> and <strong>Prisma</strong>.<br />
                                Deployed with <strong>Amplify</strong>, <strong>EC2</strong>, <strong>RDS</strong>, <strong>S3</strong> and <strong>API Gateway</strong>.
                            </p>
                            <div className="flex flex-row gap-3">
                                <a
                                    href="https://github.com/ClaPalo/inventory-management"
                                    target="_blank"
                                    className="text-white z-30"
                                >
                                    <FaGithub size={25} />
                                </a>
                                <a
                                    href="https://main.d470kvzhkas7w.amplifyapp.com/"
                                    target="_blank"
                                    className="text-white z-30"
                                >
                                    <TbWorldWww size={25} />
                                </a>
                            </div>
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
