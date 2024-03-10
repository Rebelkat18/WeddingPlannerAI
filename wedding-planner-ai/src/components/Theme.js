
function Theme(props){
    return(
        <div>
            <h1>Theme</h1>
            <img alt="theme" width="50%" height="50%"/>
            <button onClick={props.back}>Back</button>
        </div>
    );
}

export default Theme;