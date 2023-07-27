const { api } = require("@/redux/api/apiSlice");

const servicesApi = api.injectEndpoints({
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
export const { useGetServicesQuery, useSingleServicesQuery } = servicesApi
