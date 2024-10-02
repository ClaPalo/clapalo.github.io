function About() {
    return (
        <div
            className="h-5/6 w-full flex flex-row justify-around items-center"
            id="about"
        >
            <div className="flex flex-col justify-start">
                <h1 className="font-semibold text-ternary mb-5 text-4xl">
                    Who am I?
                </h1>
                <p className="w-1/2 text-start">
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
                <p className="font-semibold text-ternary text-xl mt-5">
                    My tech stack:
                </p>
                <div className="flex flex-row gap-4 mt-5">
                    {/* Python, Java, JS, TS, C, Node, React, Express, Docker, MySQL */}

                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                        width={40}
                        className="hover:scale-110"
                    />

                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                        width={40}
                        className="hover:scale-110"
                    />

                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                        width={40}
                        className="hover:scale-110"
                    />

                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                        width={40}
                        className="hover:scale-110"
                    />

                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
                        width={40}
                        className="hover:scale-110"
                    />

                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                        width={40}
                        className="hover:scale-110"
                    />

                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                        width={40}
                        className="hover:scale-110"
                    />

                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                        width={40}
                        className="hover:scale-110"
                    />

                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
                        width={40}
                        className="hover:scale-110"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
