

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faDownload } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const isWorkRoute = location.pathname === '/work';

  return (
    <>
      <h1 className="pt-2 text-white text-xl">
        Hey, I'm Shimanshu 👋
      </h1>

      <p className='text-t-secondary pt-6 sm:leading-7'>
        A full stack developer with 3 years of experience and with high learning rate.  I've tackled diverse  projects and worked in various different tech stack.
      </p>

      <div className='flex justify-between flex-center' >

        <div className='flex flex-center text-t-secondary-dark space-x-6 pt-4'>
          {isWorkRoute ? (
            <Link to='/' className='flex flex-center space-x-2 text-t-secondary-dark cursor-pointer hover:text-t-accent'>
              <span>home</span>
              <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
            </Link>
          ) : (
            <Link to='/work' className='flex flex-center space-x-2 text-t-secondary-dark cursor-pointer hover:text-t-accent'>
              <span>work</span>
              <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
            </Link>
          )}

          {/* commenting for now but will add this later with my new articles that I like to build */}
          {/* <div className='flex flex-center space-x-2 cursor-pointer hover:text-t-accent'>
            <span>blog</span>
            <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
          </div> */}


        </div>

        <a
          href="https://drive.google.com/uc?export=download&id=1f8N8vZWh0t00GjVI34yyd-Eyrkt_rMKA"
          className='flex  pt-4 space-x-2 text-t-secondary-dark cursor-pointer hover:text-t-accent'
          download
        >
          <span>Download Resume</span>
          <FontAwesomeIcon width={12} height={12} icon={faDownload} />
        </a>
      </div>
    </>
  );
}

export default Header;
