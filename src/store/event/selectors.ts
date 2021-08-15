const event = (state: any) => {
  return state.eventReducer.events;
};

const quantity = (state: any) => {
  return state.eventReducer.quantity;
};

export default { event, quantity };
