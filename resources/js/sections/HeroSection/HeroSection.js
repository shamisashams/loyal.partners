import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

import "./HeroSection.css";
import TeamMember from "@/components/TeamMember/TeamMember";

const HeroSection = ({ sliders }) => {
    const [index, setIndex] = useState(0);
    const [play, setPlay] = useState(false);
    useEffect(() => {
        const lastIndex = sliders.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index]);
    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 4000);

        return () => {
            clearInterval(slider);
        };
    }, [index]);

    return (
        <div className="hero">
            {sliders.map((elem, i) => {
                return (
                    <article className="" key={i}>
                        <div className="wrapper">
                            <div className="content">
                                <div className="bold blue">
                                    { elem.title }
                                </div>
                                <p
                                    className="op05"
                                    dangerouslySetInnerHTML={{
                                        __html: elem.description,
                                    }}
                                >
                                </p>
                            </div>
                        </div>

                        <div className={play ? "img view_area play" : "img view_area"}>
                            {elem.file && !play ? (
                                <img src={elem.file?'/'+elem.file.path+'/'+elem.file.title:''} />
                            ) : null}
                            <ReactPlayer
                                className="video"
                                url={elem.youtube_url}
                            />
                            <button className="vid_btn flex centered">
                                <div className="circle " onClick={() => setPlay(true)}>
                                    <img src="/img/icons/arrow-white.svg" alt="" />
                                </div>
                            </button>
                        </div>
                    </article>
                )
            })}
        </div>
    );
};

export default HeroSection;
