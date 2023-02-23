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
            <div
            className="
            bg-[#101010]/90
            h-screen
            "
            >
                <div className="container-album-info
                grid
                grid-cols-2
                gap-4
                w-9/12
                m-auto
                pt-10
                ">
                    <div className="container-album-image">
                        <img
                        src={musics[0]?.artworkUrl100}
                        className="
                        w-44
                        "/>
                    </div>
                    <div className="container-album-text
                    text-white
                    flex
                    flex-col
                    justify-evenly
                    flex-start
                    ">
                        <p
                        >Album</p>
                        <h1
                        className="
                        md:text-4xl
                        sm:text-2xl
                        "
                        >{musics[0]?.collectionName}</h1>
                        <p>{musics[0]?.artistName} - {musics[0]?.trackCount}</p>
                    </div>
                </div>
                <div className="container-album-musics
                "
                >
                    <div className="container-album-musics-header
                    flex
                    flex-row
                    gap-5
                    pl-10
                    pr-5
                    ">
                        <p>#</p>
                        <p>Title</p>
                    </div>
                    {musics.slice(1).map((music, index) =>(
                        <div
                        className="flex
                        flex-row
                        pl-10
                        pr-5
                        gap-5
                        text-white
                        hover:bg-[#181818]/100
                        "
                        >
                            <p
                            className="font-mono
                            "
                            >{index > 8 ? index + 1 : '0' + (index + 1)}</p>
                            <div
                            className="flex
                            flex-col
                            flex-auto
                            "
                            >
                            <p
                            >{music.trackName}</p>
                            <p className="text-gray-500
                            text-xs
                            ">{music.artistName}</p>
                            </div>
                            <audio
                            className="w-8/12
                            bg-black
                            hover:bg-[#181818]/100
                            "
                            src={music.previewUrl} controls>
                                <track kind="captions" />
                                <code>audio</code>
                            </audio>
                        </div>
                    ))
                    }
                </div>
            </div>
    )
}

export default MusicsAlbum;