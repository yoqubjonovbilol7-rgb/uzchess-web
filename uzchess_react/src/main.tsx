import './index.css'
import { createRoot } from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router";
import NewsPage from "./features/news/page/News.tsx";
import CoursePage from "./features/course/page/Course.tsx";
import MainPage from "./features/main/Page/Main.tsx";



const router = createBrowserRouter([

    {path: "/", element: <MainPage />,children :[
            {path: "/news",element: <NewsPage />},
            {path : "/courses",element : <CoursePage/>}
        ] },




]);

const root = document.getElementById('root');
createRoot(root!).render(<RouterProvider router={router} />);