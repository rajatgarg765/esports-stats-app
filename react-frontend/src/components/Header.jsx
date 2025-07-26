import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation

const Header = ({ userProfileImageUrl }) => {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f5] px-10 py-3">
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-4 text-[#111418]">
                    <div className="size-4">
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_6_330)">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                                    fill="currentColor"
                                ></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_6_330"><rect width="48" height="48" fill="white"></rect></clipPath>
                            </defs>
                        </svg>
                    </div>
                    <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">Esports History</h2>
                </div>
                <div className="flex items-center gap-9">
                    {/* Use Link component for client-side navigation */}
                    <Link className="text-[#111418] text-sm font-medium leading-normal" to="/">Home</Link>
                    <Link className="text-[#111418] text-sm font-medium leading-normal" to="/events">Events</Link>
                    <Link className="text-[#111418] text-sm font-medium leading-normal" to="/teams">Teams</Link>
                    <Link className="text-[#111418] text-sm font-medium leading-normal" to="/players">Players</Link>
                    <Link className="text-[#111418] text-sm font-medium leading-normal" to="/games">Games</Link>
                </div>
            </div>
            <div className="flex flex-1 justify-end gap-8">
                <label className="flex flex-col min-w-40 !h-10 max-w-64">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                        <div
                            className="text-[#60758a] flex border-none bg-[#f0f2f5] items-center justify-center pl-4 rounded-l-lg border-r-0"
                            data-icon="MagnifyingGlass"
                            data-size="24px"
                            data-weight="regular"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                <path
                                    d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                                ></path>
                            </svg>
                        </div>
                        <input
                            placeholder="Search"
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-full placeholder:text-[#60758a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                            value=""
                        />
                    </div>
                </label>
                <button
                    className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#f0f2f5] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
                >
                    <div className="text-[#111418]" data-icon="Bell" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                            <path
                                d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
                            ></path>
                        </svg>
                    </div>
                </button>
                <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style={{ backgroundImage: `url("${userProfileImageUrl}")` }}
                ></div>
            </div>
        </header>
    );
};

export default Header;
