import theme from '../icons/theme.png';
import Spinner from 'react-bootstrap/Spinner';

function Theme(props) {
    return (
        <div>
            <h1 style={{ marginTop: "10px" }} >Theme</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img id='placeholder' src={theme} alt="theme" width="50%" />
                <img id='generated' alt="theme" width="50%" style={{ display: "none" }} />
                <Spinner id='spinner' animation="border" role="status" style={{ display: "none" }}>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
            <button style={{ marginTop: "-20px" }} className="back-button" onClick={props.back}>Back</button>
        </div>
    );
}

export default Theme;