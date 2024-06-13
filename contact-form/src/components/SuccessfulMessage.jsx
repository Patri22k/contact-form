import React from "react";

const SuccessfulMessage = ({ showSuccessMsg }) => {
    return (
        <div 
            className={`fixed z-50 transform -translate-x-1/2 left-1/2 w-30 top-11 md:top-10 lg:top-8 text-xs md:text-sm lg:text-base transition-all duration-500 ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
            <div className="bg-[#2B4246] flex flex-col justify-center rounded-xl p-5">
                <div className="flex mb-4 items-center">
                    <svg width="20" height="21" viewBox="0 0 20 21">
                        <path fill="#fff" d="M14.28 7.72a.748.748 0 0 1 0 1.06l-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.75.75 0 0 1 1.06 0Zm5.47 2.78A9.75 9.75 0 1 1 10 .75a9.76 9.76 0 0 1 9.75 9.75Zm-1.5 0A8.25 8.25 0 1 0 10 18.75a8.26 8.26 0 0 0 8.25-8.25Z" />
                    </svg>
                    <h2 className="ml-4 font-bold">Message Sent!</h2>
                </div>
                <p className="text-gray-400">Thanks for completing the form. We'll be in touch soon!</p>
            </div>
        </div>
    );
};

export default SuccessfulMessage;