import React from "react";
import { Outlet } from "react-router-dom";

const Index = () => {
    return(
        <div>
            <main>
                <h1>Developer, Mentor, Determined</h1>
                <p>Interested in improving myself with learning new items and skills, from studying and networking with coworkers.</p>
                <p className="quote">"Accept the things to which fate binds you, and love the people with whom fate brings you together,but do so with all your heart."<br />-Marcus Aurelius</p>
            </main>
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
            <Outlet />
        </div>
    )
}

export default Index;