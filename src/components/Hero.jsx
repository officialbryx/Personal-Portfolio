import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/profilePic.jpg";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className="pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-8 text-6xl font-thin tracking-tight lg:text-7xl -ml-1 mt-10">Bryan Tiamzon</h1>
                        <div className="flex items-baseline space-x-2">
                            <span className="text-4xl font-light">An Aspiring</span>
                            <span className="moving-gradient text-4xl font-semibold">Data Scientist</span>
                        </div>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</p>

                        {/* Social Icons */}
                        <div className="flex space-x-4 mt-4">
                            <FaLinkedin className="text-4xl hover:text-blue-500 cursor-pointer" />
                            <FaGithub className="text-4xl hover:text-gray-400 cursor-pointer" />
                            <FaInstagram className="text-4xl hover:text-pink-500 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img
                            src={profilePic}
                            alt="Bryan Tiamzon"
                            className="border"
                            style={{ borderRadius: "20px" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;