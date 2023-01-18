import React from 'react';
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from '../../common/carousel/prevArrow';
import "./top-brands.css";
import Slider from 'react-slick';

const topBrandsList = [

    {
        id: 1,
        title: "23 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505652.png",
    },

    {
        id: 2,
        title: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643984189.png",
    },

    {
        id: 3,
        title: "39 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875219.png",
    },

    {
        id: 4,
        title: "32 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/08da44392a73e7e9db7be1e47863f07d_1605502636.png",
    },

    {
        id: 5,
        title: "50 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/d5fc2e2a1c3add1c898b3f5c27e67631_1635754295.png",
    },
    {
        id: 6,
        title: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/45137b90df2f1154a8766b00c03c8fc3_1655800784.png",
    },

    {
        id: 7,
        title: "27 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/acc68e452e5e8ea16d56292838cd0056_1659429876.png",
    },
    {
        id: 8,
        title: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/45137b90df2f1154a8766b00c03c8fc3_1655800784.png",
    },
    {
        id: 9,
        title: "31 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/f2ac1ad991aa8311242cbe675661040e_1568097187.png",
    },
    {
        id: 10,
        title: "26 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/efde2eca9cd50d60b03fc90a236def72_1666521911.png",
    },


];

const settings = {

    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};



const TopBrands = () => {
    return (
        <div className="top-brands  max-width">
            <div className="collection-title"> Top brands for you </div>
            <Slider {...settings}   >

                {topBrandsList.map((brand) => {
                    return <div>

                        <div className="top-brands-cover">
                            <img src={brand.cover} className='top-brands-image' alt="{brand.time}" />

                        </div>



                    </div>




                })}


            </Slider>
        </div>
    );
};

export default TopBrands;
