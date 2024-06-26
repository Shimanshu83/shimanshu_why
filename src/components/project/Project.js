import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Project() {
  return (
    <>
      <h1 className="text-white text-xl">Projects</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-6'>

        {/* Simply Test Project */}
        <div className='bg-secondary-bg p-6 rounded-lg border border-transparent hover:border-stone-500 hover:shadow-lg transition-all ease-in duration-200'>
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
        </div>

        {/* Satbara Agriculture App Project */}
        <div className='bg-secondary-bg p-6 rounded-lg border border-transparent hover:border-stone-500 hover:shadow-lg transition-all ease-in duration-200'>
          <div className='flex flex-center space-x-2 text-white cursor-pointer hover:text-t-accent'>
            <span>Satbara Agriculture App</span>
            <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
          </div>
          <p className='text-neutral-500 pt-2 text-sm sm:leading-7'>
            Created an Express.js app to serve APIs to Satbara Agriculture app using Node.js and MongoDB.
          </p>
          <div className='flex flex-row flex-center flex-wrap gap-2 mt-4'>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">NODE</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">EXPRESS</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">MONGO DB</div>
          </div>
        </div>

        {/* Memories Project */}
        <div className='bg-secondary-bg p-6 rounded-lg border border-transparent hover:border-stone-500 hover:shadow-lg transition-all ease-in duration-200'>
          <div className='flex flex-center space-x-2 text-white cursor-pointer hover:text-t-accent'>
            <span>Memories</span>
            <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
          </div>
          <p className='text-neutral-500 pt-2 text-sm sm:leading-7'>
            The app is called "Memories" and it is a social media app that allows users to share their memories. 
            Developed from 10/2021 to the present.
          </p>
          <div className='flex flex-row flex-center flex-wrap gap-2 mt-4'>
            {/* Add the relevant technologies used for the Memories project */}
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">REACT</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">NODE</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">EXPRESS</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">MONGO DB</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">CSS</div>
          </div>
        </div>

        {/* xandzero Project */}
        <div className='bg-secondary-bg p-6 rounded-lg border border-transparent hover:border-stone-500 hover:shadow-lg transition-all ease-in duration-200'>
          <div className='flex flex-center space-x-2 text-white cursor-pointer hover:text-t-accent'>
            <span>xandzero</span>
            <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
          </div>
          <p className='text-neutral-500 pt-2 text-sm sm:leading-7'>
            xandzero is a CLI implementation of the classic game tic-tac-toe, also known as x and zero. It offers a customizable gaming experience, allowing players to choose the size of the game board.
          </p>
          <div className='flex flex-row flex-center flex-wrap gap-2 mt-4'>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">GOLANG</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">COBRA</div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Project;
