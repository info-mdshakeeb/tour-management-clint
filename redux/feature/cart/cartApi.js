const { api } = require("@/redux/api/apiSlice");

const cardApi = api.injectEndpoints({
    endpoints: (builder) => ({
        postCart: builder.mutation({
            query: (data) => ({
                url: '/services/add-to-cart',
                method: "POST",
                body: data,

            }),
            invalidatesTags: ['cart']
        }),
        getCart: builder.query({
            query: (id) => `/services/carts/${id}`,
            providesTags: ['cart']
        })
    })
})
export const { usePostCartMutation, useGetCartQuery } = cardApi