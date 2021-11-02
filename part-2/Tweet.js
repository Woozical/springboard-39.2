const Tweet = props => {
    return (
        <div>
            <p>{props.message}</p>
            <i>-{props.name}(@{props.username}) on {props.date}</i>
        </div>
    )
}