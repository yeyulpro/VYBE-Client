import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/chats",
    credentials: "include",
  }),
  tagTypes: ["Chats", "Chat"],
  endpoints: (builder) => ({
    getChats: builder.query({
      query: () => '/',
      providesTags: (result) => [
        result?.chats ? [
          ...result.map(({ _id }) => ({ type: "Chats", id: _id })),
          { type: "Chats", id: "LIST" },
        ]
          : [{ type: "Chats", id: "LIST" }],
      ],
    }),
    getChatById: builder.query({
      query: (id) => `${id}`,
      providesTags: (result, error, id) => [{ type: "Chat", id }],
    }),

    createChat: builder.mutation({
      query: (newChat) => ({
        url: "/",
        method: "POST",
        body:newChat,
      }),

      invalidatesTags: [{ type: "Chats", id: "LIST" }],    }),

    addMessage: builder.mutation({
      query: ({ chatId, content }) => ({
        url: `/${chatId}/message`, // matches backend route: POST /api/chats/:chatId/message
        method: "POST",
        body: { content },
      }),
      invalidatesTags: (result, error, { chatId }) => [
        { type: "Chat", id: chatId },
        { type: "Chats", id: "LIST" },
      ],
    }),

    deleteChat: builder.mutation({
      query: ({ chatId, content }) => ({
        url: `/${chatId}/message`, // matches backend route: POST /api/chats/:chatId/message
        method: "POST",
        body: { content },
      }),
      invalidatesTags: (result, error, { chatId }) => [
        { type: "Chat", id: chatId },
        { type: "Chats", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetChatsQuery,
  useGetChatByIdQuery,
  useCreateChatMutation,
  useAddMessageMutation,
  useDeleteChatMutation,
} = chatApi;
