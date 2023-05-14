'use client';

import react from "react"

interface ClientOnlyProps {
    children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
    const [isMounted, setIsMounted] = react.useState(false);

    react.useEffect(() => {
        setIsMounted(true);
    }, [])

    return isMounted ? <>{ children }</> : null;
}

export default ClientOnly;