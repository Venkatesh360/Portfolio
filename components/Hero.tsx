import './Hero.css';

function Hero() {
    return (
        <div className="flex items-center justify-center h-screen w-full ">
            <div className="flex flex-col items-center justify-center font-Karla font-[800] text-white">
                <div className="container flex flex-col items-center justify-center">
                    <div className="create text-[10vh] sm:text-[20vw] md:text-[150px] lg:text-[200px] leading-none">
                        CREATE
                    </div>
                    <div className="flex text-[3vh] sm:text-[5vw] md:text-[40px] lg:text-[50px] leading-none justify-center items-center">
                        <div className="maintain text-purple-300">
                            MAINTAIN
                        </div>
                        <span className="dot mx-3">.</span>
                        <div className="transform text-purple-300">
                            TRANSFORM
                        </div>
                    </div>
                </div>
                <div className="box flex justify-center w-fit max-w-[50vw] md:max-w-xl h-auto bg-gray-900/80 items-center p-2 rounded-lg">
                    <p className=" text-[0.9rem] sm:text-[1rem] text-center tracking-normal" style={{ fontWeight: 300 }} >
                        Hi <span className="wave">👋</span>, I am Venkatesh Kashyap. I am a fullstack software developer based in Guwahati, Assam
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
