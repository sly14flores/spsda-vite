import { Navigate, useLocation } from 'react-router-dom';

export default function Home() {

    const { pathname } = useLocation();

    return (
        <Navigate replace to="/dashboard" state={{
            from: pathname
        }} />
    )

}