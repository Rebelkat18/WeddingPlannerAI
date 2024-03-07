function Grid(props) {
    return (
        <div className="dash-grid">
            <button className="grid-item" onClick={() => props.handleChecklist()}>Checklist</button>
            <button className="grid-item" onClick={() => props.handleTheme()}>Theme</button>
            <button className="grid-item" onClick={() => props.handleGuestList()}>Guest List</button>
            <button className="grid-item" onClick={() => props.handleSchedule()}>Schedule</button>
            <button className="grid-item" onClick={() => props.handleBudget()}>Budget</button>
            <button className="grid-item" onClick={() => props.handleVendors()}>Vendors</button>
        </div>
    );
}

export default Grid;