import { ReactNode } from "react"

import { Navigation, Pagination,Autoplay } from "swiper"
import { Swiper, SwiperProps } from "swiper/react"

import { SwiperStyled } from "./styles"
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"


interface iSliderProps {
    children: ReactNode,
    setings: SwiperProps
}

const Slider = ({ children,setings } : iSliderProps) => {

    return (
        <SwiperStyled>
            <Swiper modules={[Navigation, Pagination,Autoplay ]} {...setings}>
                {children}
            </Swiper>
        </SwiperStyled>
    )
}

export default Slider