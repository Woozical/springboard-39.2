const App = () => {
    return (
        <div>
            <Person name="Alice" age={20} hobbies={['video games', 'jogging']}/>
            <Person name="Bernadette" age={16} hobbies={['cooking', 'guitar']}/>
            <Person name="Cederic" age={26} hobbies={['swimming', 'game dev', 'tabletop']}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));