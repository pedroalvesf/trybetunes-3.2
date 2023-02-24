import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import AlbumCard from "../components/album/albumCard";


function Search ({ state }) {
    return (<div
        className="bg-[#101010]/90
        py-20
        h-max
        "
    >
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
    </div>);
}

export default Search;