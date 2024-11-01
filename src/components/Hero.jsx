import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/profilePic.jpg";

const Hero = () => {
    return (
        <div className="border-b border-white pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">Bryan Tiamzon</h1>
                        <span className="bg-gradient-to-r from-red-500 via-purple-500 to-indigo-700 bg-clip-text text-4xl tracking-tight text-transparent">
                            Data Scientist
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</p>
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
