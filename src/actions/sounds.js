import database from '../firebase/firebase';

const _addSound = (sound) => ({
    type: 'ADD_SOUND',
    sound
});

export const addSound = (soundData = {
    title: '',
    description: '',
    author: '',
    published: 0
}) => {
    return (dispatch) => {
        const sound = {
            title: soundData.title,
            description: soundData.description,
            author: soundData.author,
            published: soundData.published
        };

        return database.ref('sounds').push(sound).then(ref => {
            dispatch(_addSound({
                id: ref.key,
                ...sound
            }));
        });
    };
};

const _removeSound = ({ id } = {}) => ({
    type: 'REMOVE_SOUND',
    id
});

export const removeSound = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`sounds/${id}`).remove().then(() => {
            dispatch(_removeSound({ id }));
        })
    }
};

const _editSound = (id, updates) => ({
    type: 'EDIT_SOUND',
    id,
    updates
});

export const editSound = (id, updates) => {
    return (dispatch) => {
        return database.ref(`sounds/${id}`).update(updates).then(() => {
            dispatch(_editSound(id, updates));
        });
    }
};

const _getSounds = (sounds) => ({
    type: 'GET_SOUNDS',
    sounds
});

export const getSounds = () => {
    return (dispatch) => {
        return database.ref('sounds').once('value').then(snapshot => {
            const sounds = [];

            snapshot.forEach(item => {
                sounds.push({
                    id: item.key,
                    ...item.val()
                });
            });

            dispatch(_getSounds(sounds));
        });
    };
};
