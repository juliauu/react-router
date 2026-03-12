import React from "react";

import {HeaderSection} from "../components/sections/header-section/index.jsx";
import {LatestFromKotlinSection} from "../components/sections/latest-from-kotlin-section/index.jsx";
import {WhyKotlinSection} from "../components/sections/why-kotlin-section/index.jsx";
import {UsageSection} from "../components/sections/usage-section/index.jsx";
import {StartSection} from "../components/sections/start-section/index.jsx";
import Header from "../components/header";
import Footer from "../components/footer";
import './index.scss';
import { ThemeProvider } from "@rescui/ui-contexts";

export function meta() {
  return [
    { title: "Kotlin Programming Language" },
    { name: "description", content: "A modern programming language that makes developers happier." },
  ];
}

function OverviewPage() {
    return(
        <div className="overview-page">
            <HeaderSection />
            <LatestFromKotlinSection />
            <WhyKotlinSection />
            <UsageSection />
            <StartSection />
        </div>
    )
}

export default function Home() {
    return(
        <ThemeProvider theme="dark">
            <Header productWebUrl="https://github.com/JetBrains"
                    hasSearch={false}
                    currentUrl="/"
                    searchConfig={{ searchAlgoliaId: "",
                        searchAlgoliaKey: "",
                        searchAlgoliaIndex: "" }}
            />
            <OverviewPage />
            <Footer />
        </ThemeProvider>
    )
}


