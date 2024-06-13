import React from "react";

const SuccessfulMessage = ({ show }) => {
    return (
        <div
            className={`fixed left-1/2 transform -translate-x-1/2 bg-[#2B4246] text-white rounded-xl transition-transform duration-500 ease-out ${show ? "translate-y-0 opacity-100 w-[90%] py-2 pl-6 top-1 text-xs sm:text-sm sm:top-3 md:text-md md:top-3 lg:text-base lg:top-5 lg:w-1/4 lg:py-6 2xl:" : "-translate-y-full opacity-0 pointer-events-none"}`}
        >
            <div className="flex items-center mb-1 lg:pb-2">
                <svg className="w-4 h-4" viewBox="0 0 21 21" fill="#fff">
                    <path d="M14.28 7.72a.748.748 0 0 1 0 1.06l-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.75.75 0 0 1 1.06 0Zm5.47 2.78A9.75 9.75 0 1 1 10 .75a9.76 9.76 0 0 1 9.75 9.75Zm-1.5 0A8.25 8.25 0 1 0 10 18.75a8.26 8.26 0 0 0 8.25-8.25Z" />
                </svg>
                <h2 className="ml-4 font-bold">Message Sent!</h2>
            </div>
            <p className="text-gray-400">Thanks for completing the form. We'll be in touch soon!</p>
        </div>
    );
};

export default SuccessfulMessage;
