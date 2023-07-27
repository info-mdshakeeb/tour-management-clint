import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4321/api/v1/" }),
    tagTypes: ['Comments'],
    endpoints: () => ({})

})
