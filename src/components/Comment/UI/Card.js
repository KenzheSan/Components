function Card (props) {
    let classes = "Card " + props.className;
    return <div className = {classes}>
        {props.children}
    </div>
}

export default Card;