import theme from '../icons/theme.png';

function Theme(props) {
    return (
        <div>
            <h1>Theme</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img id='placeholder' src={theme} alt="theme" width="50%" />
                <img id='generated' alt="theme" width="50%" style={{ display: "none" }}/>
            </div>
            <button style={{ marginTop: "-20px" }} className="back-button" onClick={props.back}>Back</button>
        </div>
    );
}

export default Theme;