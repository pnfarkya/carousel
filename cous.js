import React, { useEffect, useState } from "react";
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { AlignVerticalCenter } from "@mui/icons-material";
import './cau.css';

export function Carousel(props) {
    const { children, show } = props;
    const [currentIndex, setCurrent] = useState(0);
    const [length, setLength] = useState(children.length);
    const [touchPosition, setTouch] = useState(null);

    useEffect(() => {
        setLength(children.length);
    }, [children]);

    const next = () => {
        if (currentIndex < length - show) {
            setCurrent(preState => preState + 1);
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrent(preState => preState - 1);
        }
    }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;
        setTouch(touchDown);
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition;
        if (touchDown == null) {
            return;
        }
        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;

        if (diff > 10) {
            next();
        }

        if (diff < -10) {
            prev();
        }

        setTouch(null);
    }

    const wrapStyle = "carousel-content-wrapper";

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {
                    currentIndex > 0 && (
                        <ArrowCircleLeftRoundedIcon onClick={prev} color='primary' style={{ alignSelf: 'center', height: '50px', width: '50px' }} />
                    )}
                <div className={wrapStyle} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                    <div className={`carousel-content show-${show}`} style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}>
                        {children}
                    </div>
                </div>{
                    currentIndex < length - show && (
                        <ArrowCircleRightRoundedIcon onClick={next} color='primary' style={{ alignSelf: 'center', height: '50px', width: '50px' }} />
                    )
                }
            </div>

        </div>
    )
}

//export default Carousel;