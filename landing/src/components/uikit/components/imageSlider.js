import React from "react";
import "components/uikit/style/imageSlider.scss"

// eslint-disable-next-line no-unused-vars

const ImageSlider = (props) => {
    return (
        <div className="slider__container mb12">
            {props.lectures.map(item => (
                <div onClick={()=>window.location.href=item.url} className="box__container ml4 mr4 cursor-pointer">
                    <div className="box__image">
                        <img src={item.image} alt={item.title}/>
                    </div>
                    <div className="box__detail ml8">
                        <div className="box__name text-bold mb8 mt8">{item.title}</div>
                        <div className="box__role mb8">{item.content}</div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default ImageSlider;