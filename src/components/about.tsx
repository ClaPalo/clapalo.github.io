function About() {
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
                    I'm a Software Engineer Specialist at xAI. I'm passionate
                    about Fullstack Development and Security, and I'm always
                    looking for new things to learn and how I can challenge
                    myself.
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
                    At xAI I developed and reviewed a high-quality dataset of
                    complex coding tasks, while evaluating, providing feedback,
                    and refining team contributions to uphold rigorous
                    standards. Additionally, I created interactive scripts that
                    fully automate Docker container builds, launch, testing, and
                    result extraction—boosting team productivity.
                    <br />
                    <br />
                    I'm not only interested in tech! I love creative videogames
                    such as Minecraft, and I'm passionate about analog
                    photography.
                </p>
            </div>
        </div>
    );
}

export default About;
