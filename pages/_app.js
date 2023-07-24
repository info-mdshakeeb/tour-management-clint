import { store } from '@/redux/store';
import '@/styles/globals.css';
import { Space_Grotesk } from 'next/font/google';
import { Provider } from 'react-redux';
const inter = Space_Grotesk({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
    return <div className={`${inter.className}`}>
        <Provider store={store} >
            <Component {...pageProps} />
        </Provider>
    </div>
}
