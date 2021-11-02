const App = () => {
    return (
        <div>
            <h2>Tweets</h2>
            <Tweet
                username="jd11" name="John Doe"
                message = "Hello world!"
                date="01-01-1970"
            />
            <Tweet
                username="asdf5" name="Amanda Dufresne"
                message = "Foo bar bazz."
                date="07-07-1977"
            />
            <Tweet
                username="bgee33" name="Barb Guthier"
                message = "Lorem ipsum dolor est..."
                date="12-21-2012"          
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));