function Schedule(props) {
    return (
        <div>
            <h1 style={{ marginTop: "10px" }}>Schedule</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p>{props.schedule}</p>
            </div>
            <button style={{ marginTop: "-20px" }} className="back-button" onClick={props.back}>Back</button>
        </div>
    );
}

export default Schedule;