import { createSlice } from "@reduxjs/toolkit";

const getStoredUser = () => {
    const storedUser = localStorage.getItem("user") || null;
    if (!storedUser || storedUser === "undefined") return null;
    try {
        return JSON.parse(storedUser);
    } catch {
        return null;
    }
};

const stored = getStoredUser();

const initialState = {
    user: stored,
    isAuthenticated: !!stored,
    isLoading: false,
    error: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { user } = action.payload;
            state.user = user;
            state.isAuthenticated = !!user;
            state.isLoading = false;
            state.error = null;
           
            if (user) {
                localStorage.setItem("user", JSON.stringify(user));
            } else {
                localStorage.removeItem("user");
            }
        },

        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.isLoading = false;
            state.error= null;
            localStorage.removeItem("user");
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
