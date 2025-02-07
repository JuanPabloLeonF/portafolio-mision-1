
import { RouterProvider } from "react-router-dom"
import "./MainComponent.css"
import { router } from "../../routers/RoutersPage"

export const MainComponent = () => {
    return (
        <main className="main">
            <RouterProvider router={router} />
        </main>
    )
}