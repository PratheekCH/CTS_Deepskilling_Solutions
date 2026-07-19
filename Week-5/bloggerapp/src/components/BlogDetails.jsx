function BlogDetails() {

    const blogs = [
        {
            id: 1,
            title: "React Hooks",
            writer: "Pavan"
        },
        {
            id: 2,
            title: "Conditional Rendering",
            writer: "John"
        }
    ];

    return (

        <div>

            <h2>Blog Details</h2>

            <ul>

                {
                    blogs.map(blog => (

                        <li key={blog.id}>
                            {blog.title} - {blog.writer}
                        </li>

                    ))
                }

            </ul>

        </div>

    );

}

export default BlogDetails;