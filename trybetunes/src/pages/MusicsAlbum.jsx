import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getMusics from "../services/musicsApi";
import ColorThief from "colorthief";
import AlbumSimilar from "../components/album/AlbumSimilar";


function MusicsAlbum(props) {
    const { id } = useParams();
    const [musics, setMusics] = useState([]);
    const [backgroundColor, setBackgroundColor] = useState("#101010");

    var img = new Image();
    if(musics[0]?.artworkUrl100 && backgroundColor === "#101010") {
        img.onload = function () {
        var colorThief = new ColorThief();
        setBackgroundColor(colorThief.getColor(img));
        };
        img.crossOrigin = 'Anonymous';
        img.src = musics[0].artworkUrl100;
    }

    const getMcs = async () => {
        const musics2 = await getMusics(id);
        setMusics(musics2);
    }
    useEffect(() => {
        getMcs()
    }, [])

    return (
            <div
            className="
            bg-[#101010]/90
            min-h-screen
            m-auto
            "
            >
                <div
                style={{ backgroundImage: `linear-gradient(0deg, rgba(16,16,16, 0.9) 0%, rgb(${backgroundColor}) 100%)`
                } }
                >
                <div
                className="container-album-info
                flex
                flex-row
                max-w-5xl
                m-auto
                gap-4
                pt-10
                pb-5
                ">
                    <div className="container-album-image">
                        <img
                        src={musics[0]?.artworkUrl100}
                        className="
                        w-44
                        ml-10
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
                </div>
                <div className="container-album-musics
                max-w-5xl
                m-auto
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
                        key={index}
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
                            className="truncate
                            max-w-[200px]
                            "
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