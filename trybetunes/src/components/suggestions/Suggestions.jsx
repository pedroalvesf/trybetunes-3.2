import sugges from './SuggestionData';

function Suggestions () {

    return (
        <div className="container-suggestions
        bg-black/10

        ">
            <h1
            className="mb-10
            font-bold
            text-2xl
            text-center

            "
            >Some suggestions created just for you!</h1>
            <div className="container-suggestions-cards
                grid
                grid-auto-fit-lg
                gap-3
                md:w-9/12
                m-auto
                pb-20
            ">
                {sugges.map((suggestion, index) => (
                    <div className="suggestion-card
                    bg-black/10
                    w-72
                    h-16
                    flex
                    flex-row
                    gap-5
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