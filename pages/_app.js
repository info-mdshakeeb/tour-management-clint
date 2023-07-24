import '@/styles/globals.css';
import { Space_Grotesk } from 'next/font/google';
const inter = Space_Grotesk({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
    return <div className={`${inter.className}`}>
        <Component {...pageProps} />
    </div>
}
