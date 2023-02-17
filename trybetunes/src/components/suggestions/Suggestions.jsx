import data from '../../assets/Data';

function Suggestions () {
    return (
        <div className="container-suggestions
        bg-gradient-to-b from-[#1e1e1e] to-[#121212]
        pt-10

        ">
            <h1
            className="mb-10
            font-bold
            text-2xl
            text-center
            text-white
            "
            >Some suggestions created just for you!</h1>
            <div className="container-suggestions-cards
                grid
                grid-auto-fit-lg
                gap-3
                md:w-9/12
                m-auto
                pb-14
                text-white
            ">
                {data.SuggestionData.map((suggestion, index) => (
                    <div className="suggestion-card
                    bg-black/10
                    w-72
                    h-16
                    flex
                    flex-row
                    gap-5
                    rounded-lg
                    hover:bg-black/90
                    hover:font-bold
                    cursor-pointer
                    " key={index}>
                    <p
                        className="
                        mt-5
                        truncate
                        "
                        >{suggestion.artistName}</p>
                        <div className="suggestion-card-image
                        flex
                        order-first
                        flex-row
                        ">
                            <img
                                src={suggestion.artworkUrl100}
                                alt={suggestion.artistName}
                                className="w-16
                                h-16
                                flex-initial
                                "
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Suggestions;