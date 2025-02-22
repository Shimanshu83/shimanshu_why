import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const blogs = [
  {
    title: "Batch Processing in Golang: Updating Millions of Customer Records Efficiently",
    url: "https://medium.com/@shimanshuyadav83/batch-processing-in-golang-updating-millions-of-customer-records-efficiently-e0305dbe31fc",
    image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*M3w0PdRVTo5S0pAaOJHWvw.png"
  },
  {
    title: "1 Billion rows file creation challenge in Golang from 90 minutes to 25 seconds.",
    url: "https://medium.com/@shimanshuyadav83/1-billion-rows-file-creation-challenge-in-golang-d7f3e5e13c2d",
    image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*_5bqfezjBxU2Tn_U0gs3Ow.png"
  }
];

function Blog() {
  return (
    <div className="w-full h-full flex flex-col mt-8 text-base">
      <h1 className="text-white text-xl">Blog</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-6'>
        {blogs.map((blog, index) => (
          <div key={index} className='relative bg-secondary-bg p-6 rounded-lg border border-transparent hover:border-stone-500 hover:shadow-lg transition-all ease-in duration-200'>
            <img src={blog.image} alt={blog.title} className='w-full h-48 object-cover rounded-lg' />
            <h2 className='text-white text-lg mt-4'>{blog.title}</h2>
            <a
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className='flex flex-center space-x-2 text-neutral-200 cursor-pointer hover:text-t-accent mt-4'
            >
              <span>Read Blog</span>
              <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
