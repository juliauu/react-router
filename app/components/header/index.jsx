import React, { lazy, Suspense, useEffect, useState } from "react";
import "@jetbrains/kotlin-web-site-ui/out/components/header/index.css";

const GlobalHeader = lazy(
    () => import("@jetbrains/kotlin-web-site-ui/out/components/header/index.js")
);

export default function Header(props) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <header style={{ minHeight: "64px", background: "#111" }}/>;
    }

    return (
        <Suspense fallback={<header style={{ minHeight: "64px", background: "#111" }}/>}>
            <GlobalHeader {...props} />
        </Suspense>
    );
}