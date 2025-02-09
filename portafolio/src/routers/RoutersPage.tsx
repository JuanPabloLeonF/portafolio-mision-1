import { createBrowserRouter } from "react-router-dom"
import { HomePage } from "../pages/home/HomePage"
import { FooterComponent } from "../components/footer/FooterComponent"
import { AboutPage } from "../pages/about/AboutPage"
import { HeaderComponent } from "../components/header/HeaderComponent"
import { SkillPage } from "../pages/skill/SkillPage"
import { ProfilePage } from "../pages/profile/ProfilePage"
import { ContactPage } from "../pages/contact/ContactPage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <>
            <HeaderComponent />
            <HomePage />
        </>
    },
    {
        path: "/about",
        element: (
            <>
                <HeaderComponent />
                <AboutPage />
                <FooterComponent />
            </>
        )
    },
    {
        path: "/skill",
        element: (
            <>
                <HeaderComponent />
                <SkillPage />
                <FooterComponent />
            </>
        )
    },
    {
        path: "/profile",
        element: (
            <>
                <HeaderComponent />
                <ProfilePage />
                <FooterComponent />
            </>
        )
    },
    {
        path: "/contact",
        element: (
            <>
                <HeaderComponent />
                <ContactPage />
            </>
        )
    },
])