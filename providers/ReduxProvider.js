'use client'

const { store } = require("@/redux/store")
const { Provider } = require("react-redux")

const ReduxProvider = ({ children }) => {
    return (
        <div className="">
            <Provider store={store}>
                {children}
            </Provider>
        </div>
    )
}
export default ReduxProvider