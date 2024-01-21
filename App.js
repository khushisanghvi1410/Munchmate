import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import AboutUs from "./src/components/AboutUs";
import ContactUs from "./src/components/ContactUs";
import Error from "./src/components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantDetails from "./src/components/RestaurantDetails";
import AboutClass from "./src/components/AboutClass";
import { lazy, Suspense } from "react";



const Grocery = lazy(async () => {
 await import("./src/components/Grocery.js");
});
const App = () => {
  return (
    <div className="app">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/about",
        element: <AboutClass count="00"></AboutClass>,
      },

      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantDetails></RestaurantDetails>,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery></Grocery></Suspense>,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}></RouterProvider>);

/*
*Header
 - Logo
 - NavBar Links
   - Home
   - About
   - Contact Us
*Body
 - Search
 - Restaurant Containers
   - Restaurant Card
    -Image
    - Rest Name
    - Star Rating
    - Cuisines
    - Delivery Time
*Footer 
 - CopyRight
 - Links
 - Address
*/
