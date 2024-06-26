import React from 'react'
import Image from 'next/image'
import Tag from './Tag'
import CreatePostIcons from './CreatePostIcons'
import Button from './Button'


export default function CreatePost() {
  return (
    <div className='flex justify-center mt-28 '>
 <main className='w-[720px] h-[565px] z-[10] overflow-hidden rounded-2xl bg-[#ffffff]'>

<header className='w-[720px] h-[80px]  py-3 px-4 flex justify-between bg-[#f7f7f8]'>
{/* title */}
<div>
<p className='text-2xl leading-9 font-normal font-inter text-[#3f3f50]'>Introduce Yourself</p>
<p className='text-xs h-[20px] w-[342px] leading-5 size-1 font-normal text-[#8a8aa3]'>It will help you increase the reach within community </p>
</div>
{/* cross icon */}
<div>
    <Image src={"/cross.svg"} alt='cross' height={14} width={14} className='mt-3 mr-1'/>
</div>
    </header>



{/* hero section of create post */}
<section className='w-[720px]   h-[321px] py-3 px-4'>
<p className='w-[237px] text-sm  h-[24px] text-[#8a8aa3] leading-6 line-1.5 font-normal font-inter '>What do you want to talk about</p>
</section>


{/* tag section */}
<section className='h-[44px] w-[720px] y-2 px-4 bg-[#ffffff]'>
<div className='flex w-[816px] h-[28px] gap-2'>
  <Tag tagname="product"/>
  <Tag tagname="Webinar"/>
  <Tag tagname="Training"/>
  <Tag tagname="Label"/>
</div>  
</section>



    {/* icon section */}

    <section className=' mb-2 w-[720px] h-[48px] flex  pt-3 pr-4 pb-4 pl-3'>
<CreatePostIcons icon='/T.svg' width={14} height={14}/>
<CreatePostIcons icon='/pin.svg' width={9} height={9}/>
<CreatePostIcons icon='/happy.svg'  width={30} height={30}/>
    </section>


    {/* footer */}
    <footer className='bg-[#f7f7f8] w-[720px] h-[72px] flex justify-between'>
        
        {/* toggle and button */}
        <section className='mt-2'>
        <label className="relative flex justify-between items-center p-1">
  <input
    type="checkbox"
    className="absolute left-1/2 -translate-x-1/2 w-4 h-4 peer appearance-none rounded-md"
  />
  <span className="w-8 h-4 flex items-center flex-shrink-0 ml-2 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-4" />
</label>
<span className=' ml-3 text-sm leading-6 size-1.5 font-normal text-[#121217] width-[125px] height-[24px]'>Post Anonymously</span>

        </section>

        
        {/* buttons */}

        <section className='flex mt-2 gap-6'>
    <Button className='w-[109px] h-[48px] border-gray-300 text-[#334155] bg-[#ffffff]'>
  Cancel
</Button>

<Button className='w-[109px] mr-5 h-[48px] border-[#0f172a] text-[#ffffff] bg-[#fe5bac]'>
  Post
</Button>
        </section>
    </footer>
        </main>
    </div>
  )
}
