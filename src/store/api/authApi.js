/**
 * Auth RTK Query API — keep slice in sync via onQueryStarted where needed.
 */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "../slices/authSlice";

export const authApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000", credentials:'include' }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/auth/login",
                method: "POST",
                body: credentials,
            }),
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    const user = data?.user ?? data;
                    dispatch(setCredentials({ user }));
                } catch (error) {
                    console.error(error);
                }
            },
            invalidatesTags: ["User"],
        }),
        register: builder.mutation({
            query: (userData) => ({
                url: "/auth/register",
                method: "POST",
                body: userData,
            }),
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    const user = data?.user ?? data;
                    dispatch(setCredentials({ user }));
                } catch (error) {
                    console.error(error);
                }
            },
            invalidatesTags: ["User"],
        }),
        logout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),
            async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    dispatch(logout());
                } catch (error) {
                    console.error(error);
                }
            },
            invalidatesTags: ["User"],
        }),
        getUser: builder.query({
            query: () => ({
                url: "/auth/user",
                method: "GET",
            }),
            providesTags: ["User"]
        }),
        // updateUser: builder.mutation({
        //     query: (userData) => ({
        //         url: "/auth/user",
        //         method: "PUT",
        //         body: userData,
        //     }),
        //     invalidatesTags: ["User"],
        // }),
        // deleteUser: builder.mutation({
        //     query: () => ({
        //         url: "/auth/user",
        //         method: "DELETE",
        //     }),
        // }),
    }),
});

export const {
    useLoginMutation,
    useRegisterMutation,
    useLogoutMutation,
    useGetUserQuery,
    useUpdateUserMutation,
    useDeleteUserMutation,
} = authApi;
