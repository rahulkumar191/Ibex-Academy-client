import { selector } from "recoil";

import { userState } from "../atoms/user";



export const isUserLoading = selector({
    key: 'isUserLoading',
    get: ({get}) => {
        const state = get(userState);
        return state.isLoading;
    }
})

export const userEmail = selector({
    key: 'userEmail',
    get: ({get}) => {
        const state = get(userState);
        return state.user.email;
    }
})