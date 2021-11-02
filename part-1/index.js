const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="John Doe" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));