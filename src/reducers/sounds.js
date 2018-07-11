const soundsReducerDefaultState = [];

export default (state = soundsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_SOUND':
            return [
                ...state,
                action.sound
            ];
        case 'REMOVE_SOUND':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_SOUND':
            return state.map((sound) => {
                if (sound.id === action.id) {
                    return {
                        ...sound,
                        ...action.updates
                    };
                } else {
                    return sound;
                }
            });
        case 'GET_SOUNDS':
            return action.sounds;
        default:
            return state;
    }
};