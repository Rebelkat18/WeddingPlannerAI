import "./Dashboard.css";
import Chat from "../pages/Chat.js";

function Dashboard() {
    return (
        <div>
            <header>Wedding Planner AI</header>
            <div className="chatbox">
                <Chat />
            </div>
        </div>
    );
}
export default Dashboard;