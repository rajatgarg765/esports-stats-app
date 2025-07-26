import React from 'react';

const HeroSection = ({ heroData }) => {
    return (
        <div className="@container">
            <div className="@[480px]:p-4">
                {heroData ? (
                    <div
                        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10"
                        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("${heroData.imageUrl}")` }}
                    >
                        <div className="flex flex-col gap-2 text-left">
                            <h1
                                className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                            >
                                {heroData.title}
                            </h1>
                            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                                {heroData.description}
                            </h2>
                        </div>
                        <button
                            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                        >
                            <span className="truncate">Explore Events</span>
                        </button>
                    </div>
                ) : (
                    <div className="flex min-h-[480px] items-center justify-center text-[#60758a]">Loading hero data...</div>
                )}
            </div>
        </div>
    );
};

export default HeroSection;
