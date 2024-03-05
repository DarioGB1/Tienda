import './carousel.css'
import {useHref} from "react-router-dom";
import React , {useEffect, useRef, useState} from "react";
import {data} from "../assets/data.js";

export default function Carousel() {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex]
        if(imgNode) {
            imgNode.scrollIntoView({
                behavior:"smooth"
            })
        }
    }, [currentIndex]);

    const scrollToImage = (direction) => {
        setCurrentIndex((prevIndex) => {
            if (direction === 'prev') {
                const isFirstSlide = prevIndex === 0;
                return isFirstSlide ? 0 : prevIndex - 1;
            } else {
                const isLastSlide = prevIndex === data.length - 1;
                return isLastSlide ? prevIndex : prevIndex + 1;
            }
        });
    };


    return <div className="carousel-cont">
         <div className="main-container">
             <div className="slider-container">
                 <div className="leftArrow" onClick={() => scrollToImage('prev')}>&#10092;</div>
                 <div className="rightArrow" onClick={() => scrollToImage('next')}>&#10093;</div>
                 <div className="container-images">
                     <ul ref={listRef}>
                         {
                             data.map((item) => {
                                 return <li key={item.id}>
                                     <img src={item.imgUrl} alt={`tienda ${item.id}`}/>
                                 </li>
                             })
                         }
                     </ul>
                 </div>
             </div>
         </div>
     </div>


}
