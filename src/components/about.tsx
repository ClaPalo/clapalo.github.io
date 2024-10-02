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
            className="h-5/6 w-full flex flex-col md:flex-row md:justify-around md:items-center"
            id="about"
        >
            <div className="flex flex-col justify-center items-center md:items-start md:justify-start md:ml-20">
                <h1 className="font-semibold text-ternary mb-5 text-4xl text-center md:text-start">
                    Who am I?
                </h1>
                <p className="w-5/6 md:w-1/2 text-center md:text-start">
                    Ea et ea non id est esse voluptate ad nisi minim dolor.
                    Dolor eiusmod nulla anim veniam mollit consectetur aliquip
                    enim incididunt et nostrud incididunt irure anim velit.
                    <br />
                    <br />
                    Exercitation in exercitation dolor sit aliqua eu ipsum esse
                    aute voluptate. Non nostrud in ea enim amet fugiat eu
                    deserunt eu amet incididunt.
                    <br />
                    <br /> Sunt commodo sint Lorem eiusmod Lorem ex esse
                    proident anim id nulla laborum excepteur cupidatat. Anim
                    nostrud labore duis tempor irure adipisicing amet.
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
