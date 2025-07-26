import React from 'react';

const FeaturedEventsSection = ({ featuredEvents }) => {
    return (
        <>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Events</h2>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="flex items-stretch p-4 gap-3">
                    {featuredEvents.length > 0 ? (
                        featuredEvents.map((event) => (
                            <div key={event.id} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
                                    style={{ backgroundImage: `url("${event.imageUrl}")` }}
                                ></div>
                                <div>
                                    <p className="text-[#111418] text-base font-medium leading-normal">{event.name}</p>
                                    <p className="text-[#60758a] text-sm font-normal leading-normal">{event.overview}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="p-4 text-center text-[#60758a]">No featured events found or loading...</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default FeaturedEventsSection;
