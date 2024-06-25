import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'


function Skill() {
    return (
        <div className='w-full h-full mt-8'>

            <h1 className="text-white text-xl" >My Skills</h1>

            {/* this is for subsection  */}
            <div className="ml-4">

                {/* languague subsections and other subsection following that  */}
                <div className="flex flex-col" >

                    <h1 className="text-white text-l mt-4 " > Languages </h1>

                    <div className='flex flex-row flex-center flex-wrap gap-2 mt-2 ' >

                        <div className="rounded py-2 px-1 border-stone-400 border text-xs space-x-1 text-t-secondary-dark  " >
                            <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
                            <span> Javascript </span>
                        </div>

                        <div className="rounded py-2 px-1 border-stone-400 border text-xs space-x-1 text-t-secondary-dark  " >
                            <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
                            <span> Typescript </span>
                        </div>

                        <div className="rounded py-2 px-1 border-stone-400 border text-xs  text-t-secondary-dark  " > Golang </div>
                        <div className="rounded py-2 px-1 border-stone-400 border text-xs  text-t-secondary-dark  " > Python </div>

                    </div>


                </div>


                {/* frontend subsections and other subsection following that  */}
                <div className="flex flex-col" >

                    <h1 className="text-white text-l mt-4 " > Frontend </h1>

                    <div className='flex flex-row flex-center flex-wrap gap-2 mt-2 ' >

                        <div className="rounded py-2 px-1 border-stone-400 border text-xs space-x-1 text-t-secondary-dark  " >
                            <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
                            <span> REACT </span>
                        </div>

                        <div className="rounded py-2 px-1 border-stone-400 border text-xs space-x-1 text-t-secondary-dark  " >
                            <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
                            <span> ANGULAR </span>
                        </div>

                        <div className="rounded py-2 px-1 border-stone-400 border text-xs space-x-1 text-t-secondary-dark  " >
                            <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
                            <span> SCSS </span>
                        </div>
                        <div className="rounded py-2 px-1 border-stone-400 border text-xs space-x-1 text-t-secondary-dark  " >
                            <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
                            <span> HTML </span>
                        </div>
                        <div className="rounded py-2 px-1 border-stone-400 border text-xs space-x-1 text-t-secondary-dark  " >
                            <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
                            <span> CSS </span>
                        </div>

                        <div className="rounded py-2 px-1 border-stone-400 border text-xs space-x-1 text-t-secondary-dark  " >
                            <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
                            <span> Tailwind </span>
                        </div>




                    </div>


                </div>


                {/* Backend subsections and other subsection following that  */}
                <div className="flex flex-col" >

                    <h1 className="text-white text-l mt-4 " > Backend </h1>

                    <div className='flex flex-row flex-center flex-wrap gap-2 mt-2 ' >

                        <div className="rounded py-2 px-1 border-stone-400 border text-xs space-x-1 text-t-secondary-dark  " >
                            <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
                            <span> Fiber (Golang) </span>
                        </div>

                        <div className="rounded py-2 px-1 border-stone-400 border text-xs space-x-1 text-t-secondary-dark  " >
                            <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
                            <span> Node js </span>
                        </div>

                        <div className="rounded py-2 px-1 border-stone-400 border text-xs space-x-1 text-t-secondary-dark  " >
                            <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
                            <span> Express Js </span>
                        </div>



                    </div>


                </div>


                {/* Database subsections and other subsection following that  */}
                <div className="flex flex-col" >

                    <h1 className="text-white text-l mt-4 " > Database </h1>

                    <div className='flex flex-row flex-center flex-wrap gap-2 mt-2 ' >

                        <div className="rounded py-2 px-1 border-stone-400 border text-xs space-x-1 text-t-secondary-dark  " >
                            <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
                            <span> MYsql </span>
                        </div>

                        <div className="rounded py-2 px-1 border-stone-400 border text-xs space-x-1 text-t-secondary-dark  " >
                            <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
                            <span> Oracle db </span>
                        </div>

                        <div className="rounded py-2 px-1 border-stone-400 border text-xs space-x-1 text-t-secondary-dark  " >
                            <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
                            <span> MongoDB </span>
                        </div>

                        <div className="rounded py-2 px-1 border-stone-400 border text-xs space-x-1 text-t-secondary-dark  " >
                            <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
                            <span> Redis </span>
                        </div>

                    </div>


                </div>

                {/* Devops subsections and other subsection following that  */}
                <div className="flex flex-col" >

                    <h1 className="text-white text-l mt-4 " > Devops </h1>

                    <div className='flex flex-row flex-center flex-wrap gap-2 mt-2 ' >

                        <div className="rounded py-2 px-1 border-stone-400 border text-xs space-x-1 text-t-secondary-dark  " >
                            <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
                            <span> Aws </span>
                        </div>

                        <div className="rounded py-2 px-1 border-stone-400 border text-xs space-x-1 text-t-secondary-dark  " >
                            <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
                            <span> Docker </span>
                        </div>

                    </div>


                </div>



            </div>






        </div>
    )
}

export default Skill