import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'


function Header() {
  return (
    <>
      <h1 className="pt-4 text-white text-xl">
        Hey, I'm Shimanshu 👋
      </h1>

      <p className='text-t-secondary pt-6 sm:leading-7' >
        A full stack developer with 2+ years of experience in tech. I honed my skills at Blue Sky Analytics, shaping SpaceTime's user experience. I've tackled diverse freelance projects globally. Also, left my mark on the Google Play Store with Blue Wallet and ColorPie, celebrating over 4000+ downloads.
      </p>

      <div className='flex flex-center text-t-secondary-dark space-x-6 pt-4'>

        <div className='flex flex-center  space-x-2 text-t-secondary-dark cursor-pointer hover:text-t-accent' >
          <span>work </span>
          <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
        </div>

        <div className='flex flex-center  space-x-2 cursor-pointer hover:text-t-accent' >
          <span>blog</span>
          <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
        </div>

      </div >

    </>

  )
}

export default Header