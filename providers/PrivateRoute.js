'use client'
import { PrimaryLoading } from '@/components/ui/Loading';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { auth, useFirebaseInfo } from "./FirebaseProvaider";

const PrivateRoute = ({ children }) => {
    const router = useRouter();

    const { user, loading } = useFirebaseInfo()
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (!user) {
                router.push("/login");
            }
        });
        return () => unsubscribe();
    }, []);

    if (loading) return <>
        <PrimaryLoading color={'#000000'} />


    </>


    return <>
        {children}
    </>

};

export default PrivateRoute;