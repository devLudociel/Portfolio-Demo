//next image

import Image from "next/image"

// next Link

import Link from "next/link"

// Icons

import {HiArrowRight} from 'react-icons/hi2'

const ProjectsBtn = () => {
  return (
  <div className="mx-auto xl:mx-0 ">
    <Link href={'/work'} className=" relative w-[140px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">
      <Image src={'/rounded-text.png'} 
      width={110}
      height={128}
      alt='Projects Button'
      className="animate-spin-slow w-full h-full max-w-[110px] max-h-[128px]"/>
      <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"/>
      </Link>
  </div>
  );
};

export default ProjectsBtn;
