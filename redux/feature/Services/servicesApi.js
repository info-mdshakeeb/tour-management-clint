const { api } = require("@/redux/api/apiSlice");

const servicesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getServices: builder.query({
            query: (limit) => {
                if (limit) {
                    return `/services?limit=${limit}`
                } else {
                    return `/services`
                }
            }
        }),
        singleServices: builder.query({
            query: (id) => `/services/${id}`
        })
    })
})
export const { useGetServicesQuery, useSingleServicesQuery } = servicesApi
