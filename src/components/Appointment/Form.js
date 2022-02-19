import React, { useState } from 'react'
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

export default function Form(props) {
    
    const [studentName, setStudentName] = useState(props.name || "");
    const [currentInterviewer, setInterviewer] = useState(props.value || null);
    const [error, setError] = useState("");

    const reset = function () {
        setStudentName("");
        setInterviewer(null);
    };

    const cancel = function () {
        reset();
        props.onCancel();
    };
    
    const validateInputOfForm = function () {
        if (studentName === ""){
            setError("Student name cannot be blank");
            return
        }
        setError("");
        props.onSave(studentName,currentInterviewer);

    }

    return (
        <main className="appointment__card appointment__card--create">
        <section className="appointment__card-left">
            <form autoComplete="off" onSubmit={(event)=> event.preventDefault()} >
            <input
                className="appointment__create-input text--semi-bold"
                name={studentName}
                onChange={(event) => setStudentName(event.target.value)} 
                value = {studentName}
                type="text"
                placeholder={"Enter Student Name"}
                data-testid="student-name-input"
            />
            </form>
            <section className="appointment__validation">{error}</section>
            <InterviewerList interviewers={props.interviewers} value={currentInterviewer} onChange={(event) => setInterviewer(event)}/>
        </section>
        <section className="appointment__card-right">
            <section className="appointment__actions">
                <Button danger onClick={cancel}>Cancel</Button>
                <Button confirm onSubmit={event => event.preventDefault()} onClick={validateInputOfForm}>Save</Button>
            </section>
        </section>
        </main>
    )
};