import "./Dashboard.scss";
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
    const name1 = props.name1;
    const name2 = props.name2;
    const date = props.date;
    const page = props.page;
    const messages = props.messages;

    const handleChecklist = () => {
        document.querySelector(".dash-grid").style.display = "none";
        document.querySelector(".checklist").style.display = "block";

        props.setPage("checklist");
        props.setTopic("checklist");

        //tell ai to ask about theme
        const prompt = {
            role: "system",
            content: "Ask the user if they would like a checklist for their wedding.",
        };

        props.setMessages([...props.messages, prompt]);

        axios.post("http://localhost:8000/chat", { messages, prompt, name1, name2, date, page })
            .then((res) => {
                props.setMessages((messages) => [
                    ...messages,
                    {
                        role: "assistant",
                        content: res.data,
                    },
                ]);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    const handleTheme = async (e) => {
        document.querySelector(".dash-grid").style.display = "none";
        document.querySelector(".Theme").style.display = "block";

        props.setPage("theme");
        props.setTopic("theme");

        //tell ai to ask about theme
        const prompt = {
            role: "system",
            content: "Ask the user what theme they would like for their wedding.",
        };

        props.setMessages([...props.messages, prompt]);

        axios.post("http://localhost:8000/chat", { messages, prompt, name1, name2, date, page })
            .then((res) => {
                props.setMessages((messages) => [
                    ...messages,
                    {
                        role: "assistant",
                        content: res.data,
                    },
                ]);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    const handleGuestList = () => {
        document.querySelector(".dash-grid").style.display = "none";
        document.querySelector(".GuestList").style.display = "block";

        props.setPage("guestlist");
        props.setTopic("guestlist");

        //tell ai to ask about theme
        const prompt = {
            role: "system",
            content: "Ask the user if they would like a guest list for their wedding.",
        };

        props.setMessages([...props.messages, prompt]);

        axios.post("http://localhost:8000/chat", { messages, prompt, name1, name2, date, page })
            .then((res) => {
                props.setMessages((messages) => [
                    ...messages,
                    {
                        role: "assistant",
                        content: res.data,
                    },
                ]);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    const handleSchedule = () => {
        document.querySelector(".dash-grid").style.display = "none";
        document.querySelector(".Schedule").style.display = "block";

        props.setPage("schedule");
        props.setTopic("schedule");

        //tell ai to ask about theme
        const prompt = {
            role: "system",
            content: "Ask the user if they would like a schedule for their wedding.",
        };

        props.setMessages([...props.messages, prompt]);

        axios.post("http://localhost:8000/chat", { messages, prompt, name1, name2, date, page })
            .then((res) => {
                props.setMessages((messages) => [
                    ...messages,
                    {
                        role: "assistant",
                        content: res.data,
                    },
                ]);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    const handleBudget = () => {
        document.querySelector(".dash-grid").style.display = "none";
        document.querySelector(".Budget").style.display = "block";

        props.setPage("budget");
        props.setTopic("budget");

        //tell ai to ask about theme
        const prompt = {
            role: "system",
            content: "Ask the user if they would like a budget for their wedding.",
        };

        props.setMessages([...props.messages, prompt]);

        axios.post("http://localhost:8000/chat", { messages, prompt, name1, name2, date, page })
            .then((res) => {
                props.setMessages((messages) => [
                    ...messages,
                    {
                        role: "assistant",
                        content: res.data,
                    },
                ]);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    const handleVendors = () => {
        document.querySelector(".dash-grid").style.display = "none";
        document.querySelector(".Vendors").style.display = "block";

        props.setPage("vendors");
        props.setTopic("vendors");

        //tell ai to ask about theme
        const prompt = {
            role: "system",
            content: "Ask the user if they would like a list of vendors for their wedding.",
        };

        props.setMessages([...props.messages, prompt]);

        axios.post("http://localhost:8000/chat", { messages, prompt, name1, name2, date, page })
            .then((res) => {
                props.setMessages((messages) => [
                    ...messages,
                    {
                        role: "assistant",
                        content: res.data,
                    },
                ]);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    const back = () => {
        document.querySelector(".dash-grid").style.display = "grid";
        document.querySelector(".checklist").style.display = "none";
        document.querySelector(".Theme").style.display = "none";
        document.querySelector(".GuestList").style.display = "none";
        document.querySelector(".Schedule").style.display = "none";
        document.querySelector(".Budget").style.display = "none";
        document.querySelector(".Vendors").style.display = "none";

        props.setPage("home");
        props.setTopic("wedding planning");
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
                <Checklist back={back} />
            </div>
            {/* Theme */}
            <div className="Theme">
                <Theme back={back} />
            </div>
            {/* Guest List */}
            <div className="GuestList">
                <GuestList back={back} />
            </div>
            {/* Schedule */}
            <div className="Schedule">
                <Schedule back={back} schedule={props.schedule} />
            </div>
            {/* Budget */}
            <div className="Budget">
                <Budget back={back} />
            </div>
            {/* Vendors */}
            <div className="Vendors">
                <Vendors back={back} />
            </div>
            {/* Chatbox */}
            <div className="chatbox">
                <Chat name1={name1} name2={name2} date={date} page={page} messages={messages} setMessages={props.setMessages} setTopic={props.setTopic} topic={props.topic} setSchedule={props.setSchedule}/>
            </div>
        </div>
    );
}
export default Dashboard;