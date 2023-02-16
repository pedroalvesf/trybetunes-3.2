import AlbumCard from "../components/album/AlbumCard";
import { useEffect, useState } from "react";
import searchAlbumsAPI from "../services/searchAlbumApi";
import Suggestions from "../components/suggestions/Suggestions";

function Home () {

    const [musics, setMusics] = useState([]);
    const [artistName, setArtistName] = useState('');

    const getAlbum = async () => {
        const response = await searchAlbumsAPI({artistName});
        setMusics(response);
    }
    useEffect(() => {
        getAlbum();
    }, []);


    console.log(musics)
    return (

        <div>
            <div className="container-home
            pt-20
            ">
                <Suggestions />
                <div className="container-result-artist
                grid
                grid-auto-fit-xs
                w-screen
                gap-2
                md:w-11/12
                m-auto
                ">
                    {musics.map((music, index) => (
                        <AlbumCard
                        key={ index }
                        album={ music }
                        />

                    ))}
                </div>
                </div>
            </div>
    );
}

export default Home;