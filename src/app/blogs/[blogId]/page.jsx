const blogs = [
  {
    id: 1,
    title: "Complete Guide to React Hooks",
    author: "John Smith",
    date: "2026-04-01",
    category: "React",
    image: "https://i.ibb.co/placeholder1.jpg",
    description: "A deep dive into useState, useEffect, useRef and all essential React Hooks with practical examples."
  },
  {
    id: 2,
    title: "Building Modern UI with Tailwind CSS",
    author: "Sarah Johnson",
    date: "2026-04-03",
    category: "CSS",
    image: "https://i.ibb.co/placeholder2.jpg",
    description: "Learn how to create stunning responsive designs using Tailwind CSS utility classes."
  },
  {
    id: 3,
    title: "JavaScript Array Methods Explained",
    author: "Mike Davis",
    date: "2026-04-05",
    category: "JavaScript",
    image: "https://i.ibb.co/placeholder3.jpg",
    description: "Master map, filter, reduce and other powerful array methods with simple real-world examples."
  },
  {
    id: 4,
    title: "Navigation in React with React Router",
    author: "Emily Clark",
    date: "2026-04-07",
    category: "React",
    image: "https://i.ibb.co/placeholder4.jpg",
    description: "A full tutorial on building multi-page applications using React Router v7."
  }
];

const BlogDetails = async({params}) => {
    console.log(params);
    const {blogId} = await params;
    console.log(blogId);

    const blog = blogs.find(blog => blog.id === parseInt(blogId));

    return (
        <div>
            {
                blog && <div>
                    <h2 className="text-2xl font-bold">{blog.title}</h2>
                    <p>{blog.description}</p>
                     </div>
            }
        </div>
    );
};

export default BlogDetails;