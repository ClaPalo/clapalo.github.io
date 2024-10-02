import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { NavHashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";

function Navbar() {
    return (
        <div className="fixed top-0 w-[100%] z-[100] max-w-full">
            <BrowserRouter>
                <div className="p-2 grid grid-cols-3 py-4 px-4 bg-inherit backdrop-blur-md">
                    <div className="flex items-center">
                        {/* <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        Claudio Paloscia
                    </h1> */}
                    </div>
                    <div className="flex justify-center items-center">
                        <NavHashLink smooth to="#home">
                            <Button
                                variant={"secondary"}
                                className="bg-transparent"
                            >
                                Home
                            </Button>
                        </NavHashLink>
                        <Separator orientation="vertical" className="h-3/4" />
                        <NavHashLink smooth to="#about">
                            <Button
                                variant={"secondary"}
                                className="bg-transparent"
                            >
                                About
                            </Button>
                        </NavHashLink>
                        <Separator orientation="vertical" className="h-3/4" />
                        <NavHashLink smooth to="#projects">
                            <Button
                                variant={"secondary"}
                                className="bg-transparent"
                            >
                                Project
                            </Button>
                        </NavHashLink>
                    </div>
                    <div className="flex justify-end items-center"></div>
                </div>
                <Separator orientation="horizontal" className="w-full" />
            </BrowserRouter>
        </div>
    );
}

export default Navbar;
