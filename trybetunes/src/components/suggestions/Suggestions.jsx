import sugges from './SuggestionData';

function Suggestions () {

    return (
        <div className="container-suggestions">
            <h1>Some suggestions created just for you!</h1>
            <div className="container-suggestions-cards
            grid
            grid-auto-fit-xs
            w-screen
            gap-2
            md:w-11/12
            m-auto
            ">
                {sugges.map((suggestion, index) => (
                    <div className="suggestion-card" key={index}>
                        
                        <div className="suggestion-card-image">

                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Suggestions;