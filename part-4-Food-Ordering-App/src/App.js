import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
// import UserContext from "./utils/UserContext";
import DarkModeContext from "./utils/DarkModeContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

// Lazy load the Grocery component
const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
    const [userName, setUserName] = useState();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const data = {
            name: "Akshay",
        };
        setUserName(data.name);
    }, []);

    const toggleDarkMode = () => {
        setIsDark((prev) => !prev);
    };

    return (
        // <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        //     <div className="app">
        //         <Header />
        //         <Outlet />
        //     </div>
        // </UserContext.Provider>
        <Provider store={appStore}>
            <DarkModeContext.Provider value={{ isDarkMode: isDark, toggleDarkMode }}>
                <div className={isDark ? "bg-gray-900 text-white" : "bg-white text-gray-800"}>
                    <Header />
                    <Outlet />
                </div>
            </DarkModeContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Grocery />
                    </Suspense>
                ),
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <ErrorPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
