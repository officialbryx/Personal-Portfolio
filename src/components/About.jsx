import aboutImg from "../assets/codeLife.gif";
import { ABOUT_TEXT } from "../constants/index.js";

const About = () => {
    return (
        <div className="pb-8 pt-40">
            <h1 className="my-10 text-center text-4xl opacity-30 mt-10">ABOUT
                <span className="bg-gradient-to-r from-red-500 via-purple-500 to-indigo-700 bg-clip-text text-transparent">
                    {" "}ME
                </span>
            </h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img
                            src={aboutImg}
                            alt="about"
                            className="border"
                            style={{ borderRadius: '20px', height: '400px', width: '800px' }}
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p> {/* Corrected `className` */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;