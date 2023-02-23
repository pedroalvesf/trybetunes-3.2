import Data from "../../assets/Data";
import AlbumCard from "../album/AlbumCard";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation, Pagination } from "swiper";


function favoritesAlbums() {
    return (
        <div className="container-favorites-albums
        max-w-screen-xl
        m-auto
        ">
            <div className="container-favorites-albums-header
            flex
            flex-row
            justify-evenly
            mb-10
            ">
                <h1
                className="
                text-white
                hover:underline
                text-2xl
                "
                >Your favorites
                </h1>
                <h2
                className="text-white
                hover:underline
                text-xl
                "
                >Show all</h2>
            </div>
                <div className="favorites-albums
                ">
                    <Swiper
                className="
                w-screen
                gap-2
                md:w-11/12
                m-auto"

        slidesPerView={"auto"}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        // want to give a padding to the navigation buttons
        style={{
        "--swiper-pagination-color": "#1e1e",}}
        modules={[Pagination]}
      >{Data.FavoritesData.map((album, index) => (
        <SwiperSlide
        key={ index }
        className="
        w-52
        "
        >

        <AlbumCard
        key={ index }
        album={ album }
        />
        </SwiperSlide>
    ))}</Swiper>
            </div>
        </div>
    );
};

export default favoritesAlbums;