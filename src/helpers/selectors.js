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