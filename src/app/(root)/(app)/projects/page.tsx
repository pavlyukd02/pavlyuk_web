import type { Metadata } from 'next'
import PageTitle from '../components/PageTitle'
import { PROJECTS } from '@/constans/common'
import { HiArrowSmRight } from "react-icons/hi";

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Projects - Dim Pavlyuk',
  openGraph: {
    title: 'Projects - Dim Pavlyuk',
    url: '/projects',
  },
  alternates: {
    canonical: '/projects',
  },
}

export default async function ProjectsPage() {
  return (
    <>
      <PageTitle title="Projects" />
      <div className="max-w-[1280px] flex flex-wrap gap-8 px-4 md:px-0">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="relative flex md:flex-row-reverse flex-wrap md:flex-nowrap gap-3 p-3 rounded-[1.75rem] border overflow-hidden transition-transform duration-300  hover:scale-[1.02] group w-[80%]"
          >
            {/* Background hover layer */}
            <div className="absolute inset-0 rounded-[1.75rem] bg-[--hover-gradient] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

            {/* Info */}
            <div className='flex flex-col justify-between'>
              <div className="relative flex flex-col   text-left  p-4 z-10">
                <div>
                  <h3 className="text-2xl font-semibold text-[#ffffff] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[#ffffffcb] mb-2 break-words">
                    {project.des}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 ">
                  {project.iconLists.map((icon, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 bg-[--button-background-color] text-[#ffffffcb] border border-[#ffffffcb] rounded-lg text-sm px-2 py-1 bg-[#0f0f17]"
                    >
                      {/* <img src={icon} alt="icon" className="w-5 h-5" />
                     */}
                      {icon}
                    </span>
                  ))}
                </div>

              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full font-medium gap-1.5 mt-6 px-4 py-2 rounded-xl border border-gray-500 transition-all duration-300 transform hover:translate-y-[-3px] text-white bg-[#06070e] z-10"
              >
                <p>Visit Project</p>
                <HiArrowSmRight className="text-xl scale-x-150 transition-transform duration-300 group-hover:translate-x-3" />

                
              </a>

            </div>

            {/* Image */}
            <div className="relative inline-flex flex-5 z-10 w-[80%]">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex w-full">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full object-cover rounded-xl border border-[--border-color] filter grayscale transition duration-300 ease-in-out group-hover:grayscale-0"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
