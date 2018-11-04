const logMiddleware = ({ getState, dispatch }) => (next) => (action) => {
    console.log(`Action: ${action.type}, ${action.event}`);
    next(action);
};
export default logMiddleware;