import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { NavHashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";

function Navbar() {
    return (
        <div className="fixed top-0 w-[100%] z-[100] max-w-full h-12">
            <BrowserRouter>
                <div className="grid grid-cols-3 px-4 bg-inherit backdrop-blur-md h-12">
                    <div className="flex items-center">
                    </div>
                    <div className="flex justify-center items-center">
                        <NavHashLink smooth to="#home" scroll={el => el.scrollIntoView({block: "center", behavior: "smooth"})}>
                            <Button
                                variant={"secondary"}
                                className="bg-transparent"
                            >
                                Home
                            </Button>
                        </NavHashLink>
                        <Separator orientation="vertical" className="h-3/4" />
                        <NavHashLink smooth to="#about" scroll={el => el.scrollIntoView({block: "center", behavior: "smooth"})}>
                            <Button
                                variant={"secondary"}
                                className="bg-transparent"
                            >
                                About
                            </Button>
                        </NavHashLink>
                        <Separator orientation="vertical" className="h-3/4" />
                        <NavHashLink smooth to="#projects" scroll={el => el.scrollIntoView({block: "center", behavior: "smooth"})}>
                            <Button
                                variant={"secondary"}
                                className="bg-transparent"
                            >
                                Projects
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
