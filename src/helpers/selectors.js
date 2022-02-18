export const getAppointmentsForDay = (state, day) => {
    if (state.days.length < 1) {
      return [];
    }
  
    const foundDay = state.days.find((stateDay) => stateDay.name === day);
    if (!foundDay) {
      return [];
    }
  
    const result = foundDay.appointments.map((id) => state.appointments[id]);
    return result;
};

export function getInterviewersForDay(state, day) {
  const interviewersForDay = [];
  let dayInterviewers;
  if (state.days && state.interviewers) {
    dayInterviewers = state.days.filter(a => a.name === day);
    for (const interviewer in state.interviewers) {
      if (dayInterviewers[0] && dayInterviewers[0].interviewers.includes(Number(interviewer))) {
        interviewersForDay.push(state.interviewers[interviewer]);
      }
    }
  }
  return interviewersForDay;
}



export function getInterview(state,interview) {
  if (!interview) {
      return null;
  }
  return {
      student: interview.student,
      interviewer: state.interviewers[interview.interviewer]
  }
}