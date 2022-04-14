import React, { useEffect, useState } from 'react';
import './landingPage.css';
import { Navbar, CardCategory, Footer } from '../../components';
import axios from 'axios';



const LandingPage = () => {

    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {

        (async () => {
            try {
                const categoryData = await axios.get('/api/categories');
                setCategoryData(categoryData.data.categories);
            }

            catch (error) {
                console.log(error);
            }
        })();

    }, []);

    return (
        <>
            <Navbar />

            <div className="container__main__landingPage flex flex-col jc-center a-item-center">
                <div className="inner_main_landingPage m-4 flex jc-center p-4">
                    <div className='landingPage__dialogue'>WATCH THE LATEST AND GREATEST VIDEOS ON SickVids</div >
                </div>

                <div className="inner__categories__landingPage p-3 m-4">
                    <div className="landingPage__category__heading pb-2">Categories</div>

                    <div className="categories__card__div flex mt-4 jc-center">
                        {categoryData?.map((categories) => <CardCategory key={categories._id} {...categories} />)}
                    </div>
                </div>

                <Footer />
            </div>
        </>

    );
}

export default LandingPage;