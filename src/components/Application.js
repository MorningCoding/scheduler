import React, { useState, useEffect } from "react";
import axios from "axios";
import Appointments from "components/Appointments";
import "components/Application.scss";
import DayList from "./DayList";
//import InterviewerList from "./InterviewerList";

export default function Application(props) {
  
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    // you may put the line below, but will have to remove/comment hardcoded appointments variable
    appointments: {}
  });

  const dailyAppointments = [];

  const setDay = day => setState({ ...state, day });
  const appointments = getAppointmentsForDay(state, day);

const schedule = appointments.map((appointment) => {
  const interview = getInterview(state, appointment.interview);

  useEffect(() => {
    const getDays = axios.get('/api/days');
    const getAppointments = axios.get('/api/appointments');
    const getInterviewers = axios.get('/api/interviewers');

    Promise.all([getDays, getAppointments, getInterviewers]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  return (
    <main className="layout">
      <section className="sidebar">
        {<div>
            <img
              className="sidebar--centered"
              src="images/logo.png"
              alt="Interview Scheduler"
            />
            <hr className="sidebar__separator sidebar--centered" />
            <nav className="sidebar__menu">
              <DayList
                  days={state.days}
                  day={state.day}
                  setDay={.....}
              />
            </nav>
            <img
              className="sidebar__lhl sidebar--centered"
              src="images/lhl.png"
              alt="Lighthouse Labs"
            />
          </div>
        }
      </section>
      <section className="schedule">
        {/*replace this*/}
        {dailyAppointments.map((appointment) => (
          <Appointments
            key={appointment.id}
            {...appointment}
            
          />)
        )}{<Appointments key="last" time="5pm" />}
      </section>
    </main>

    
  );
}
