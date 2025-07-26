import React from 'react';

const LatestNewsSection = ({ latestNews }) => {
    return (
        <>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Latest News</h2>
            <div>
                {latestNews.length > 0 ? (
                    latestNews.map((news) => (
                        <div key={news.id} className="p-4">
                            <div className="flex items-stretch justify-between gap-4 rounded-lg">
                                <div className="flex flex-col gap-1 flex-[2_2_0px]">
                                    <p className="text-[#60758a] text-sm font-normal leading-normal">Esports News</p>
                                    <p className="text-[#111418] text-base font-bold leading-tight">{news.title}</p>
                                    <p className="text-[#60758a] text-sm font-normal leading-normal">
                                        {news.description}
                                    </p>
                                </div>
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                                    style={{ backgroundImage: `url("${news.img}")` }}
                                ></div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="p-4 text-center text-[#60758a]">No latest news found or loading...</p>
                )}
            </div>
        </>
    );
};

export default LatestNewsSection;
