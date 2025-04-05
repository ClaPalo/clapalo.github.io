function About() {
    const images: { [key: string]: string } = {
        python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        javascript:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        typescript:
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        c: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
        nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
        react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        docker: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    };
    return (
        <div
            className="w-full flex flex-col md:flex-row md:justify-around md:items-center my-44"
            id="about"
        >
            <div className="flex flex-col justify-center items-center md:items-start md:justify-start md:ml-20">
                <h1 className="font-semibold text-ternary mb-5 text-4xl text-center md:text-start">
                    Who am I?
                </h1>
                <p className="w-5/6 md:w-1/2 text-center md:text-start">
                    I'm a Software Engineering Specialist at xAI.
                    I'm passionate about Fullstack Development and Security, and
                    I'm always looking for new things to learn and how I can
                    challenge myself.
                    <br />
                    <br />
                    I recently graduated in Computer Science and Engineering at
                    Politecnico di Milano and University of Illinois at Chicago.
                    My latest research focused on Electron application's
                    security, focusing on the implementation of security
                    mechanisms related to HTTP headers. My advisors were Jason
                    Polakis and Stefano Zanero.
                    <br />
                    <br />
                    I'm Co-Founder and Software Engineer at Freeroom, a
                    project born at Politecnico di Milano and aimed at gathering
                    and serving data about classroom occupation to students and
                    universities staff. We raised €35.000 in fundings and we
                    ranked 1st at the Enhance challenge.
                    <br />
                    <br />
                    I'm not only interested in tech! I'm a big fan of Minecraft,
                    I love everything related to Doctor Who and I like to draw.
                </p>
                <p className="font-semibold text-ternary text-xl mt-5 text-center md:text-start">
                    My tech stack:
                </p>
                <div className="hidden md:flex flex-row gap-4 mt-5">
                    {Object.keys(images).map((key) => (
                        <img
                            src={images[key]}
                            width={40}
                            className="hover:scale-110"
                        />
                    ))}
                </div>
                <div className="flex flex-row gap-4 mt-5 md:hidden">
                    {Object.keys(images).map((key) => (
                        <img src={images[key]} width={20} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
