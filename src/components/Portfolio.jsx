import React from "react";

const Portfolio = () => {
    return(
    <div>
        <main>
            <h1>Things I've built, in no particular order</h1>
            <section className="project">
                <h2 className="project-name">The First Project: Juicebox</h2>
                <p>Developing Juicebox was an excellent opportunity for me to hone my skills in both front-end and back-end web development. Specifically, I gained valuable experience in setting up databases and APIs, allowing me to work seamlessly on both ends of the development process.</p>
                <p>Here is the github repository for Juicebox: https://github.com/Alexmm1/Juicebox </p>
            </section>
            <section className="project">
                <h2 className="project-name">The Second Project: FinessTrackr</h2>
                <p>Developing FitnessTrackr with my school partner was an excellent opportunity for us to hone our skills in both front-end and back-end web development. Specifically, we gained valuable experience in setting up databases and APIs, allowing us to work seamlessly on both ends of the development process.</p>
                <p>Here is the github repository for FinessTrackr: https://github.com/Alexmm1/FinessTrackr</p>
            </section>
        </main>
    </div>
    )
}

export default Portfolio;