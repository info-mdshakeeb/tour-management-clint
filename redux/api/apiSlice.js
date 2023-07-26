import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4321" }),
    endpoints: (builder) => ({
        getServices: builder.query({
            query: (limit) => {
                if (limit) {
                    return `/api/v1/services?limit=${limit}`
                } else {
                    return `/api/v1/services`
                }
            }
        }),
        singleServices: builder.query({
            query: (id) => `/api/v1/services/${id}`
        })
    })
})

export const { useGetServicesQuery, useSingleServicesQuery } = api