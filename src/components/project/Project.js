import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Project() {
  return (
    <>
      <h1 className="text-white text-xl">Projects</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-6'>

        

        {/* HTTP Server Project */}
        <div className='relative bg-secondary-bg p-6 rounded-lg border border-transparent hover:border-stone-500 hover:shadow-lg transition-all ease-in duration-200'>
          <div className='flex flex-center space-x-2 text-white cursor-pointer hover:text-t-accent'>
            <a href="https://github.com/Shimanshu83/http_webserver" target="_blank" rel="noopener noreferrer">
              <span className="pr-2">HTTP Server</span>
              <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <p className='text-neutral-500 pt-2 text-sm sm:leading-7'>
            I have worked on building an HTTP/1.1 server that can serve multiple clients. This project involved understanding TCP servers, HTTP request syntax, and other related concepts. The entry point for the HTTP server implementation is in <code>app/server.go</code>.
          </p>
          <div className='flex flex-row flex-center flex-wrap gap-2 mt-4'>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">GOLANG</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">HTTP</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">TCP</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">NET Package</div>
          </div>
        </div>



        {/* Satbara Agriculture App Project */}
        <div className='bg-secondary-bg p-6 rounded-lg border border-transparent hover:border-stone-500 hover:shadow-lg transition-all ease-in duration-200'>
          <div className='flex flex-center space-x-2 text-white cursor-pointer hover:text-t-accent'>
            <a href="https://play.google.com/store/apps/details?id=com.maha.satbara&hl=en_IN" target="_blank" rel="noopener noreferrer">
              <span className="pr-2" >Satbara Agriculture App</span>
              <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <p className='text-neutral-500 pt-2 text-sm sm:leading-7'>
            Developed the backend for the Satbara Agriculture app, which has over a million downloads. The backend was built using Node.js and Express.js to serve APIs, with MongoDB as the database. This app provides essential services to farmers by offering easy access to agricultural records and related information.
          </p>
          <div className='flex flex-row flex-center flex-wrap gap-2 mt-4'>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">NODE</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">EXPRESS</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">MONGO DB</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">REST APIs</div>
          </div>
        </div>




        {/* nand 2 tetris Project */}
        <div className='relative bg-secondary-bg p-6 rounded-lg border border-transparent hover:border-stone-500 hover:shadow-lg transition-all ease-in duration-200'>
          <div className='absolute  border-stone-400 border top-2 right-2  text-white text-xs font-bold px-2 py-1 rounded'>
            In Progress
          </div>
          <div className='flex flex-center space-x-2 text-white cursor-pointer hover:text-t-accent'>
            <a href="https://github.com/Shimanshu83/nand2Tetris" target="_blank" rel="noopener noreferrer">
              <span className="pr-2">nand 2 tetris</span>
              <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <p className='text-neutral-500 pt-2 text-sm sm:leading-7'>
            nand 2 tetris is a comprehensive project-based course that takes you from building simple logic gates from NAND to creating a fully functioning computer and a modern software system. The course teaches you how to construct a computer from scratch, covering both hardware and software aspects.
          </p>
          <div className='flex flex-row flex-center flex-wrap gap-2 mt-4'>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">HARDWARE</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">SOFTWARE</div>
          </div>
        </div>


        {/* Simply Test Project */}
        {/* <div className='bg-secondary-bg p-6 rounded-lg border border-transparent hover:border-stone-500 hover:shadow-lg transition-all ease-in duration-200'>
          <div className='flex flex-center space-x-2 text-white cursor-pointer hover:text-t-accent'>
            <span>Simply Test</span>
            <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
          </div>
          <p className='text-neutral-500 pt-2 text-sm sm:leading-7'>
            This is a MEAN Stack application where you can create a test which other users can take by sharing a link through email. Dashboard to create a test and take the test is created on Angular. The backend is written in Express / Node.js. Admin can see the score of the students in the given panel and can also see the statistics.
          </p>
          <div className='flex flex-row flex-center flex-wrap gap-2 mt-4'>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">ANGULAR</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">NODE</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">EXPRESS</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">JAVASCRIPT</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">TYPESCRIPT</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">HTML</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">CSS</div>
          </div>
        </div> */}




      </div>
    </>
  );
}

export default Project;
