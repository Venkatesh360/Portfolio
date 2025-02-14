import React from 'react';
import { FaCopy, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';




function Details() {
    const email = 'venkateshkashyap23@gmail.com'; // Replace with your actual email address

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email).then(() => {
            alert('Email address copied to clipboard');
        }, (err) => {
            console.error('Could not copy text: ', err);
        });
    };

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = "https://drive.google.com/file/d/1MPsSlwdf2XS_UAtYsJdRZ1NVMJXMHA3e/view?usp=sharing"; // Replace with the path to your resume file
        link.download = "Venkateshe Kashyaps Resume"; // Replace with the desired file name
        link.click();
    };

    return (
        <div className="flex flex-col w-full max-w-[600px] items-center justify-center px-4 rounded-lg bg-purple-950/20 gap-y-8 py-4 lg:gap-y-12 shadow-sm shadow-white/70 border-t border-white/70">
            <style>
                {`@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');`}
            </style>
            <h1 className="text-white text-3xl  font-semibold text-center">I&apos;m Venkatesh Kashyap</h1>
            <div className="flex flex-col items-center justify-start w-full text-gray-100 text-[0.9rem] sm:text-[1rem] text-center font-bold lg:leading-normal gap-y-6" style={{ fontWeight: 300 }} >
                <span>
                    I&apos;m a Full Stack Software Engineer based in Guwahati, I constantly try and improve myself by learning new technologies and applying them to my projects.
                     Currently I&apos;m working as a <b className="font-semibold text-white">Associate Software Engineer</b> in <span><a href='https://techvariable.com/about' className="font-semibold mr-2 text-white">TechVariable</a></span> 
                     working alongside the team to help businesses achieve tangible business results faster.
                </span>
                <span>
                    In my free time, I love cooking, watching sci-fi movies and contributing to open-source projects.
                </span>
            </div>
            <div className="flex gap-5">
                <a className="cursor-pointer" href="https://github.com/Venkatesh360" target="_blank" rel="noopener noreferrer">
                    <IoLogoGithub size={28} className="text-white" />
                </a>
                <a className="cursor-pointer" href="https://www.instagram.com/the_1_who_dosnt_care/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={28} className="text-white" />
                </a>
                <a className="cursor-pointer" href="https://www.linkedin.com/in/venkatesh-kashyap-3628481b1/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={28} className="text-white" />
                </a>
                <a className="cursor-pointer" href="https://www.facebook.com/profile.php?id=100008902411278" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={28} className="text-white" />
                </a>
            </div>
            <div className="flex items-center justify-center w-full gap-8">
                <button className="hover:bg-gray-100 border-[1px] sm:border-2 text-gray-100 hover:text-gray-800 font-semibold py-1 px-2 md:py-2 md:px-4 rounded inline-flex items-center" onClick={downloadResume}>
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    <span className="flex gap-2"> <span className="hidden sm:block">Download</span> Resume</span>
                </button>
                <button className="hover:bg-gray-100 border-[1px] sm:border-2 text-gray-100 hover:text-gray-800 font-semibold py-1 px-2 md:py-2 md:px-4 rounded inline-flex items-center" onClick={copyToClipboard}>
                    <FaCopy />
                    <span className="flex gap-2 ml-2"> <span className="hidden sm:flex">Copy</span> Email</span>
                </button>
            </div>
        </div>
    );
}

export default Details;
