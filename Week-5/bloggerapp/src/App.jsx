import { useState } from "react";
import "./App.css";

import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {

    const [view, setView] = useState("books");

    return (

        <div className="container">

            <h1>Blogger App</h1>

            <button onClick={() => setView("books")}>
                Books
            </button>

            <button onClick={() => setView("blogs")}>
                Blogs
            </button>

            <button onClick={() => setView("courses")}>
                Courses
            </button>

            <hr />

            {
                view === "books"
                ? <BookDetails />

                : view === "blogs"
                ? <BlogDetails />

                : <CourseDetails />
            }

        </div>

    );

}

export default App;