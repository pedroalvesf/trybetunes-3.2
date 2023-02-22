import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getMusics from "../services/musicsApi";

function MusicsAlbum(props) {
    const { id } = useParams();

    const [musics, setMusics] = useState([]);
    const getMcs = async () => {
        const musics2 = await getMusics(id);
        setMusics(musics2);
        console.log(musics2);
    }
    useEffect(() => {
        getMcs()
    }, [])

    return (
            <div>
                <div className="container-album-info
                grid
                grid-cols-2
                gap-4
                w-5/12
                m-auto
                pt-10
                ">
                    <div className="container-album-image">
                        <img
                        src={musics[0].artworkUrl100}
                        className="
                        w-60
                        "/>
                    </div>
                    <div className="container-album-text
                    text-white
                    flex
                    flex-col
                    justify-evenly
                    ">
                        <p
                        >Album</p>
                        <h1
                        className="
                        md:text-4xl
                        sm:text-2xl
                        "
                        >{musics[0].collectionName}</h1>
                        <p>{musics[0].artistName} - {musics[0].trackCount} </p>
                    </div>
                </div>
                <div className="container-album-musics"
                >
                </div>
            </div>
    )
}

export default MusicsAlbum;