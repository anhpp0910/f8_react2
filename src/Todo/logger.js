function logger(reducer) {
  return (prevState, action) => {
    console.group(action.type);
    console.log("preState:", prevState);

    console.log("action:", action);
    const newState = reducer(prevState, action);
    console.log("nextState:", newState);
    console.groupEnd();
    return newState;
  };
}

export default logger;
