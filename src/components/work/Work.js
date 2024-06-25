import React from 'react'

function Work() {
    return (


        <>

            <div className='w-full h-full  border-l-neutral-800 border-l flex flex-row ms-4 gap-3 pb-8'>

                {/* dot  style={{transform:" translateX(50%)"}}  */}
                <div className="-translate-x-2/4  w-3 h-3 rounded-full mt-2 gap-2  border border-t-accent border-background bg-t-accent"></div>

                {/* different component will be visible to you here  */}
                <div className="w-full flex flex-col"  >

                    {/* role */}
                    <h1 className=" mb-2 text-white text-base">
                        Full Stack Developer
                    </h1>


                    <div className="flex flex-col md:justify-between md:flex-row pb-2  ">

                        {/* company name */}
                        <h1 className=" text-white text-lg">
                            Oneture Technologies 
                        </h1>

                        <span className='my-1 mx-2 text-sm text-t-accent'  >
                            March 2024 — Present
                        </span>
                    </div>


                    {/* all the work will be placed here  */}

                    <ol className=' list-disc  text-neutral-500'  >
                        <li className='text-neutral-500  text-sm sm:leading-7' >
                            A lightweight css framework for building fast and flexible interfaces using pre-defined style classes.
                        </li>

                        <li className='text-neutral-500  text-sm sm:leading-7' >
                            A lightweight css framework for building fast and flexible interfaces using pre-defined style classes.
                        </li>


                    </ol>

                </div>
            </div>


            {/* second job div */}
        <div className='w-full h-full  border-l-neutral-800 border-l flex flex-row ms-4 gap-3'>

            {/* dot  style={{transform:" translateX(50%)"}}  */}
            <div className="-translate-x-2/4  w-3 h-3 rounded-full mt-2 gap-2  border border-neutral-800 border-background bg-neutral-800"></div>

            {/* different component will be visible to you here  */}
            <div className="w-full flex flex-col"  >

                {/* role */}
                <h1 className=" mb-2 text-white text-base">
                    Vernost Marketing and technologies limited 
                </h1>


                <div className="flex flex-col md:justify-between md:flex-row pb-2  ">

                    {/* company name */}
                    <h1 className=" text-white text-lg">
                        Oneture Technologies 
                    </h1>

                    <span className='my-1 mx-2 text-sm text-t-accent'  >
                        March 2024 — Present
                    </span>
                </div>


                {/* all the work will be placed here  */}

                <ol className=' list-disc  text-neutral-500'  >
                    <li className='text-neutral-500  text-sm sm:leading-7' >
                        A lightweight css framework for building fast and flexible interfaces using pre-defined style classes.
                    </li>

                    <li className='text-neutral-500  text-sm sm:leading-7' >
                        A lightweight css framework for building fast and flexible interfaces using pre-defined style classes.
                    </li>

                    
                </ol>

            </div>
        </div>



        </>



    )
}

export default Work