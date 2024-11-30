import Image from 'next/image';
import { projects } from "@/data/data";
import "./Projects.css";

interface ProjectCardProps {
    title: string;
    description: string;
    imgSrc: string;
    icons: { id: number; icon: JSX.Element }[];
}

function ProjectCard({ title, description, imgSrc, icons }: ProjectCardProps) {
    return (
        <div className="border-gray-200 border-2 max-w-xl rounded-lg flex-grow flex-col flex items-center justify-center bg-[#4b0150]/40 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="w-full h-auto max-h-[200px] overflow-hidden">
                <Image
                    src={imgSrc}
                    alt={title}
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                    layout="responsive"
                    width={500}
                    height={300}
                />
            </div>
            <div className="p-4 mb-auto">
                <h2 className="text-lg font-semibold text-white hover:text-gray-400 transition-colors duration-200">{title}</h2>
                <p className="text-sm text-gray-300 h-16 leading-snug">{description}</p>
                <div className="flex justify-start items-center gap-4 mt-2">
                    {icons.map(({ id, icon }) => (
                        <span key={id} className="transform transition-transform duration-200 hover:scale-110">
                            {icon}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Projects() {
    return (
        <div className="flex flex-col items-center p-6 justify-center" id="projects">
            <h1 className="flex flex-wrap text-white mb-[10vh] font-bold text-5xl justify-center items-center text-center tracking-wide w-full">
                <span className="hidden sm:block">A Small Selection of </span>
                <span className="w-full sm:w-fit text-nowrap font-bold ml-3 text-purple-300">Recent Projects</span>
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8 md:gap-10">
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
