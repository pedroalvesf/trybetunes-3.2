import AlbumCard from "../components/album/AlbumCard";
import { useEffect, useState } from "react";
import searchAlbumsAPI from "../services/searchAlbumApi";
import Suggestions from "../components/suggestions/Suggestions";
import Footer from "../components/footer/Footer";
import FavoritesAlbums from "../components/favorits/FavoritesAlbum";

function Home ({ state }) {
    return (

        <div>
            <div className="container-home
            bg-[#101010]/90
            ">
                <Suggestions />
                <hr className="
                mb-6
                mx-auto
                w-11/12
                border-gray-600
                "/>
                <div className="container-result-artist
                grid
                grid-auto-fit-xs
                w-screen
                gap-2
                md:w-11/12
                m-auto
                ">
                    {state.map((music, index) => (
                        <AlbumCard
                        key={ index }
                        album={ music }
                        />
                    ))}
                </div>
                    <div className="                grid
                grid-auto-fit-xs
                w-screen
                gap-2
                md:w-11/12
                m-auto">
                        <FavoritesAlbums />
                    </div>
                </div>
                <Footer />
            </div>
    );
}

export default Home;