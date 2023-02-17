import Data from "../../assets/Data";
import AlbumCard from "../album/AlbumCard";

function favoritesAlbums() {
    return (
        <div className="container-favorites-albums">
            <div className="container-favorites-albums-header
            flex
            flex-row
            justify-evenly
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
                grid
                grid-auto-fit-xs
                w-screen
                gap-2
                md:w-11/12
                m-auto
                ">
                {Data.FavoritesData.map((album, index) => (
                    <AlbumCard
                    key={ index }
                    album={ album }
                    />
                ))}
            </div>
        </div>
    );
};

export default favoritesAlbums;