function Budget(props){
    return(
        <div>
            <h1>Budget</h1>
            <button className="back-button" onClick={props.back}>Back</button>
        </div>
    );
}

export default Budget;