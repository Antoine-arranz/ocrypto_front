const event = (state: any) => {
  return state.event.events;
};

const quantity = (state: any) => {
  return state.event.quantity;
};

export default { event, quantity };
