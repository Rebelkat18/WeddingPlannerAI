import "./Dashboard.css";
import Chat from "../pages/Chat.js";

function Dashboard() {

    const handleClick = () => {
        console.log("Checklist");
    }

    return (
        <div>
            <header>Wedding Planner AI</header>
            {/* Dashboard grid */}
            <div className="dash-grid">
                <div className="grid-name">
                    <h2>Kaitlyn & Cameron</h2>
                </div>
                <div className="grid-date">
                    <h2>July 26th, 2024</h2>
                </div>
                <button className="grid-item" onClick={() => handleClick()}>Checklist</button>
                <button className="grid-item" onClick={() => console.log("Theme")}>Theme</button>
                <button className="grid-item" onClick={() => console.log("Guest List")}>Guest List</button>
                <button className="grid-item" onClick={() => console.log("Schedule")}>Schedule</button>
                <button className="grid-item" onClick={() => console.log("Budget")}>Budget</button>
                <button className="grid-item" onClick={() => console.log("Vendors")}>Vendors</button>
            </div>
            {/* Chatbox */}
            <div className="chatbox">
                <Chat />
            </div>
        </div>
    );
}
export default Dashboard;