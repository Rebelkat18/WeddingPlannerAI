import { useNavigate } from "react-router-dom";
import "./Welcome.scss";

function Welcome(props) {
    const nav = useNavigate();

    return (
        <div>
            <header>Wedding Planner AI</header>
            <div className="welcome-item">
                    <h2>Let us help you plan your dream wedding!</h2>
                </div>
            <div className="welcome-grid">
                <div className="grid-name">
                    <p>What is your name?</p>
                    <input type="text" placeholder="Name" onChange={(e) => props.setName1(e.target.value)} />
                </div>
                <div className="grid-name">
                    <p>What is your partner's name?</p>
                    <input type="text" placeholder="Name" onChange={(e) => props.setName2(e.target.value)} />
                </div>
                <div className="grid-date">
                    <p>What is your wedding date?</p>
                    {/* calendar input */}
                    <input type="date" onChange={(e) => props.setDate(e.target.value)} />
                </div>
                <button className="grid-button" onClick={() => nav("/Dashboard/")}>Ready to start planning?</button>
            </div>
        </div>
    );
}

export default Welcome;