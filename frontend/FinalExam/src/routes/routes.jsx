import CardPage from "../components/Home/CardPage"
import Home from "../components/Home"
import UserRoot from "../layout/UserRoot"

const routes = [
    {
        path: "/",
        element: <UserRoot />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ]
    },
]
export default routes