import React from "react";
import "./error404.css";

import { Footer, Navbar } from "../../components";

const Error404 = () => {
    return (
        <>
            <Navbar />
            <div className="container__main__404 mb-2 flex jc-center">
                <div className="container__inner__404 mt-4 flex jc-center a-item-center">
                    <img
                        className="error__image"
                        src="https://res.cloudinary.com/sameep1/image/upload/v1649494853/project_videoLibrary/error404_image_vrr1co.jpg"
                        alt="error__404__image" />
                </div>
            </div>

            <Footer />

        </>);
}

export default Error404;