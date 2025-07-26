import React from 'react';

const QuickStatsSection = ({ quickStats }) => {
    return (
        <>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Quick Stats</h2>
            <div className="flex flex-wrap gap-4 p-4">
                {quickStats ? (
                    <>
                        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#dbe0e6]">
                            <p className="text-[#111418] text-base font-medium leading-normal">Total Events</p>
                            <p className="text-[#111418] tracking-light text-2xl font-bold leading-tight">{quickStats.totalEvents}+</p>
                        </div>
                        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#dbe0e6]">
                            <p className="text-[#111418] text-base font-medium leading-normal">Total Prize Money</p>
                            <p className="text-[#111418] tracking-light text-2xl font-bold leading-tight">${quickStats.totalPrizeMoney}M+</p>
                        </div>
                        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 border border-[#dbe0e6]">
                            <p className="text-[#111418] text-base font-medium leading-normal">Most Popular Game</p>
                            <p className="text-[#111418] tracking-light text-2xl font-bold leading-tight">{quickStats.mostPopularGame}</p>
                        </div>
                    </>
                ) : (
                    <p className="p-4 text-center text-[#60758a] w-full">Loading quick stats...</p>
                )}
            </div>
        </>
    );
};

export default QuickStatsSection;
