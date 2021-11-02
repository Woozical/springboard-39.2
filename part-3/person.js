const Person = (props) => {
    const ageMsg = props.age >= 18 ? 'Please go vote!' : 'You must be 18.'
    const name = props.name.length > 8 ? (props.name.slice(0, 6) + '...') : props.name;
    return (
        <div>
            <p>Learn some information about this person.</p>
            <ul>
                <li>Name: {name}</li>
                <li>Age: {props.age}</li>
                <li>Hobbies: 
                    <ul>{props.hobbies.map(hobby => <li>{hobby}</li>)}</ul>
                </li>
            </ul>
            <h3>{ageMsg}</h3>
        </div>
    )
}