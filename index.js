function App(){

    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState("");
    const [color, setColor] = React.useState("#fff")

    React.useEffect(() => {
        async function fetchData(){
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randIndex])
        }
        fetchData();
    }, [])

    const getNewQuote = () => {

        const colors = [

            "#000000",
            "#A9A9A9",
            "#696969",
            "#2F4F4F",
            "#708090",
            "#556B2F",
            "#006400",
            "#008B8B",
            "#00CED1",
            "#00008B",
            "#191970",
            "#9400D3"
        ];
        let randIndex = Math.floor(Math.random() * quotes.length);
        let randColorIndex = Math.floor(Math.random() * colors.length);
            setRandomQuote(quotes[randIndex])
            setColor(colors[randColorIndex])
    }

    return (
        <div style={{backgroundColor: color, minHeight: "100vh"}}>
        <div className="container pt-5">
            <div className="jumbotron">
                <div className="card">
                    <div className="card-header">Inspirational Quotes</div>
                    <div className="card-body">
                        {randomQuote ? (
                            <>
                            <h5 className="card-title">- {randomQuote.author || "No author"}</h5>
                            <p className="card-text">&quot;{randomQuote.text}&quot;</p>
                            </>
                        ) : (
                            <h2>Loading</h2>
                        )}

                        <div className="row"></div>
                        <button onClick={getNewQuote} className="btn btn-primary ml=3">New Quote</button>
                        <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22I%20have%20been%20impressed%20with%20the%20urgency%20of%20doing.%20Knowing%20is%20not%20enough%3B%20we%20must%20apply.%20Being%20willing%20is%20not%20enough%3B%20we%20must%20do.%22%20Leonardo%20da%20Vinci" + 
                    encodeURIComponent(
                        '"' + randomQuote.text + '" ' + randomQuote.author
                    )
                } 
                    target="_blank" className="btn btn-warning">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href={"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Mark%20Twain&content=Twenty%20years%20from%20now%20you%20will%20be%20more%20disappointed%20by%20the%20things%20that%20you%20didn%E2%80%99t%20do%20than%20by%20the%20ones%20you%20did%20do%2C%20so%20throw%20off%20the%20bowlines%2C%20sail%20away%20from%20safe%20harbor%2C%20catch%20the%20trade%20winds%20in%20your%20sails.%20%20Explore%2C%20Dream%2C%20Discover." +
                        encodeURIComponent(randomQuote.author) + 
                        "&content=" + 
                        encodeURIComponent(randomQuote.text) + 
                        "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
                        } 
                        target="_blank" className="btn btn-danger">
                            <i className="fab fa-tumblr"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}


ReactDOM.render(<App/>, document.getElementById('app'))