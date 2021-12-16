export const CHANGE_IS_ONLINE = 'PROFILE::CHANGE_IS_ONLINE'
export const CHANGE_IS_AUTHED = 'PROFILE::CHANGE_IS_AUTHED'

export const changeIsAuthed = (isAuthed) => ({
    type: CHANGE_IS_AUTHED,
    payload: {
        isAuthed,
    },
})

export const changeIsOnline = (isOnline) => ({
    type: CHANGE_IS_ONLINE,
    payload: {
        isOnline,
    },
})

export const changeIsOnlineWithThunk = (isOnline) => {
    return (dispatch, getState) => {
        console.log(getState())

        setTimeout(() => {
            dispatch(changeIsOnline(isOnline))
        }, 1000)
    }
}