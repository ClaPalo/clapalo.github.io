import { Separator } from "./ui/separator";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className="flex flex-col pt-20 pb-5">
            <div className="flex flex-row justify-center items-center">
                <Separator orientation="horizontal" className="w-full mr-10" />
                <div className="flex flex-row gap-4">
                    <a href="https://github.com/ClaPalo" target="_blank">
                        <FaGithub
                            size={30}
                            className="hover:-translate-y-1 hover:scale-110 transition-all ease-in-out"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/claudio-paloscia"
                        target="_blank"
                    >
                        <FaLinkedin
                            size={30}
                            className="hover:-translate-y-1 hover:scale-110 transition-all ease-in-out"
                        />
                    </a>
                </div>
                <Separator orientation="horizontal" className="w-full ml-10" />
            </div>
            <div className="flex flex-row justify-center items-center mt-5">
                <div className="flex flex-col justify-center items-center">
                    <p>Contact me</p>
                    <a href="mailto:claudio@paloscia.com">
                        claudio@paloscia.com
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
