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
        A highly motivated <span class="font-bold">full-stack developer</span> with <span class="font-bold">3 years of experience</span>, known for taking ownership of projects from <span class="font-bold">inception to deployment</span>. Passionate about learning new technologies, solving complex problems, and working across diverse tech stacks. Proven track record of building <span class="font-bold">scalable applications</span>, optimizing performance, and delivering high-quality solutions across <span class="font-bold">frontend</span>, <span class="font-bold">backend</span>, and <span class="font-bold">DevOps</span>.
      </p>

      <div className='flex justify-between flex-center flex-col md:flex-row' >

        <div className='flex flex-center text-t-secondary-dark space-x-6 pt-4'>
          <Link
            to='/'
            className={`flex flex-center space-x-2 cursor-pointer hover:text-t-accent ${location.pathname === '/' ? 'text-t-accent' : 'text-t-secondary-dark'}`}
          >
            <span>home</span>
            <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
          </Link>

          <Link
            to='/work'
            className={`flex flex-center space-x-2 cursor-pointer hover:text-t-accent ${location.pathname === '/work' ? 'text-t-accent' : 'text-t-secondary-dark'}`}
          >
            <span>work</span>
            <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
          </Link>

          <Link
            to='/blog'
            className={`flex flex-center space-x-2 cursor-pointer hover:text-t-accent ${location.pathname === '/blog' ? 'text-t-accent' : 'text-t-secondary-dark'}`}
          >
            <span>blog</span>
            <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
          </Link>
        </div>
        <div className='flex flex-end text-t-secondary-dark space-x-6 pt-4'>
          <a
            href="https://drive.google.com/uc?export=download&id=1n8WaC0Tm9MrPJaBwisKcgn81do3-PyRp"
            className='flex pt-4 space-x-2 text-t-secondary-dark cursor-pointer hover:text-t-accent md:pt-0'
            download
          >
            <span>Download Resume</span>
            <FontAwesomeIcon width={12} height={12} icon={faDownload} />
          </a>
        </div>

      </div>
    </>
  );
}

export default Header;
