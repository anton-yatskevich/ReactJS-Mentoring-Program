const persistMiddleware = store => next => (action) => {
    const result = next(action);
    localStorage.setItem('redux-state', JSON.stringify(store.getState()));
    return result;
};

export default persistMiddleware;
