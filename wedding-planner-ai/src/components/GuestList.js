function GuestList(props){
    return(
        <div>
            <h1>Guest List</h1>
            <button className="back-button" onClick={props.back}>Back</button>
        </div>
    );
}

export default GuestList;