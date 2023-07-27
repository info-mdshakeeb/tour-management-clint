const { api } = require("@/redux/api/apiSlice");


const commentApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getComments: builder.query({
            query: () => '/comments'
        }),
        addComments: builder.mutation({
            query: (data) => ({
                url: '/comments/add-comment/',
                method: "POST",
                body: data
            }),
            invalidatesTags: ['Comments']
        }),
        getCommentsById: builder.query({
            query: (id) => `/comments/${id}`,
            providesTags: ['Comments']
        })
    })
})
export const { useAddCommentsMutation, useGetCommentsByIdQuery } = commentApi