import React from "react";

const Portfolio = () => {
    return(
    <div>
        <main>
            <h1>Things I've built, in no particular order</h1>
            <section className="project">
                <h2 className="project-name">The First Project: Juicebox</h2>
                <p>Working on Juicebox was good way to learn how to set up the database and api and to be able to work on the front and back-end of web dev.</p>
                <p>Here is the github repository for Juicebox: https://github.com/Alexmm1/Juicebox </p>
            </section>
            <footer>
                <a href="https://facebook.com" target="_blank">
                    <img class="media-link" src="https://jolivar.ca/wp-content/uploads/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png" alt="facebook"/>
                </a>
                <a href="www.linkedin.com/in/alexander-mayeux-568ba6268" target="_blank">
                    <img class="media-link" src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt="linkedin"/>
                </a>
                <a href="https://twitter.com" target="_blank">
                    <img class="media-link" src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="twitter"/>
                </a>
            </footer>
        </main>
    </div>
    )
}

export default Portfolio;