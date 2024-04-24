import construction from '../icons/construction.png';

function GuestList(props){
    return(
        <div>
            <h1>Guest List</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img id='placeholder' src={construction} alt="theme" width="50%" />
            </div>
            <button style={{ marginTop: "-20px" }} className="back-button" onClick={props.back}>Back</button>
        </div>
    );
}

export default GuestList;