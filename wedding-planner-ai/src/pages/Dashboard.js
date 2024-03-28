import "./Dashboard.css";
import Chat from "../pages/Chat.js";
import Grid from "../components/Grid.js";
import Checklist from "../components/Checklist.js";
import Theme from "../components/Theme.js";
import GuestList from "../components/GuestList.js";
import Schedule from "../components/Schedule.js";
import Budget from "../components/Budget.js";
import Vendors from "../components/Vendors.js";
import axios from "axios";

function Dashboard(props) {

    const handleChecklist = () => {
        document.querySelector(".dash-grid").style.display = "none";
        document.querySelector(".checklist").style.display = "block";
    }

    //image in here
    const handleTheme = () => {
        document.querySelector(".dash-grid").style.display = "none";
        document.querySelector(".Theme").style.display = "block";

        // get image from server
        // axios.post("http://localhost:8000/image", { prompt: "a wedding cake" })
        //     .then((res) => {
        //         document.querySelector(".Theme img").src = res.data;
        //     })
        //     .catch((err) => {
        //         console.error(err);
        //     });
    }

    const handleGuestList = () => {
        document.querySelector(".dash-grid").style.display = "none";
        document.querySelector(".GuestList").style.display = "block";
    }

    const handleSchedule = () => {
        document.querySelector(".dash-grid").style.display = "none";
        document.querySelector(".Schedule").style.display = "block";
    }

    const handleBudget = () => {
        document.querySelector(".dash-grid").style.display = "none";
        document.querySelector(".Budget").style.display = "block";
    }

    const handleVendors = () => {
        document.querySelector(".dash-grid").style.display = "none";
        document.querySelector(".Vendors").style.display = "block";
    }

    const back = () => {
        document.querySelector(".dash-grid").style.display = "grid";
        document.querySelector(".checklist").style.display = "none";
        document.querySelector(".Theme").style.display = "none";
        document.querySelector(".GuestList").style.display = "none";
        document.querySelector(".Schedule").style.display = "none";
        document.querySelector(".Budget").style.display = "none";
        document.querySelector(".Vendors").style.display = "none";
    }

    return (
        <div>
            <header>Wedding Planner AI</header>
            {/* Grid */}
            <div className="dash-grid-header">
                <div className="grid-name">
                    <h2>{props.name1} & {props.name2}</h2>
                </div>
                <div className="grid-date">
                    <h2>{props.date}</h2>
                </div>
            </div>
            <Grid handleChecklist={handleChecklist}
                handleTheme={handleTheme}
                handleGuestList={handleGuestList}
                handleSchedule={handleSchedule}
                handleBudget={handleBudget}
                handleVendors={handleVendors} />
            {/* Checklist */}
            <div className="checklist">
                <Checklist back={back}/>
            </div>
            {/* Theme */}
            <div className="Theme">
                <Theme back={back}/>
            </div>
            {/* Guest List */}
            <div className="GuestList">
                <GuestList back={back}/>
            </div>
            {/* Schedule */}
            <div className="Schedule">
                <Schedule back={back}/>
            </div>
            {/* Budget */}
            <div className="Budget">
                <Budget back={back}/>
            </div>
            {/* Vendors */}
            <div className="Vendors">
                <Vendors back={back}/>
            </div>
            {/* Chatbox */}
            <div className="chatbox">
                <Chat  name1={props.name1} name2={props.name2} date={props.date}/>
            </div>
        </div>
    );
}
export default Dashboard;