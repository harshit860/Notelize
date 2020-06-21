let stateObj = {
    Notes: ['testing']
}

export default (state = stateObj, action) => {
    switch (action.type) {
        case 'noteadd':
            console.log(action.note)
            return {
                Notes: [...state.Notes, action.note]
            }
        case 'notedelete':
            console.log(action.note)
            return state
        default:
            return state;
    }
};
