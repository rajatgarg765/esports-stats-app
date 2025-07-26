import React, { useState, useEffect } from 'react';
import EventTable from '../components/EventTable'; // Ensure this path is correct

const Events = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // API_BASE_URL is set to target your Go backend for events data.
    const API_BASE_URL = 'http://localhost:8081/api/v1';

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                // Fetch events from the Go backend
                const response = await fetch(`${API_BASE_URL}/events`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                // The Go backend's /api/v1/events returns an object with an 'events' array
                setEvents(data.events);
            } catch (err) {
                setError(err.message);
                console.error('Error fetching events:', err);
                // Fallback to static data if API fails, ensuring some content is displayed
                setEvents([
                    {
                        id: 1,
                        name: "PUBG Global Championship 2023",
                        date: "Nov 18, 2023",
                        status: "completed",
                        region: "Global"
                    },
                    {
                        id: 2,
                        name: "PUBG Nations Cup 2023",
                        date: "Sep 17, 2023",
                        status: "completed",
                        region: "Global"
                    },
                    {
                        id: 3,
                        name: "PUBG Continental Series 7: Americas",
                        date: "Aug 27, 2023",
                        status: "completed",
                        region: "Americas"
                    },
                    {
                        id: 4,
                        name: "PUBG Mobile World Invitational 2023",
                        date: "Jul 16, 2023",
                        status: "completed",
                        region: "Global"
                    },
                    {
                        id: 5,
                        name: "PUBG Global Invitational.S 2021",
                        date: "Apr 4, 2021",
                        status: "completed",
                        region: "Global"
                    },
                ]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return (
        // Added mx-auto here to center the content container
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1 mx-auto">
            <div className="flex flex-wrap justify-between gap-3 p-4">
                <div className="flex min-w-72 flex-col gap-3">
                    <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">Events</p>
                    <p className="text-[#60758a] text-sm font-normal leading-normal">Browse past events, filter by game, and view results.</p>
                </div>
            </div>
            {/* Filter buttons remain as static elements for now */}
            <div className="flex gap-3 p-3 flex-wrap pr-4">
                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f5] pl-4 pr-2">
                    <p className="text-[#111418] text-sm font-medium leading-normal">PUBG</p>
                    <div className="text-[#111418]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                    </div>
                </button>
                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f5] pl-4 pr-2">
                    <p className="text-[#111418] text-sm font-medium leading-normal">League of Legends</p>
                    <div className="text-[#111418]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                    </div>
                </button>
                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f5] pl-4 pr-2">
                    <p className="text-[#111418] text-sm font-medium leading-normal">Dota 2</p>
                    <div className="text-[#111418]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                    </div>
                </button>
                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f5] pl-4 pr-2">
                    <p className="text-[#111418] text-sm font-medium leading-normal">Counter-Strike</p>
                    <div className="text-[#111418]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                    </div>
                </button>
                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f0f2f5] pl-4 pr-2">
                    <p className="text-[#111418] text-sm font-medium leading-normal">Valorant</p>
                    <div className="text-[#111418]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                    </div>
                </button>
            </div>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">PUBG Events</h2>
            <div className="px-4 py-3 @container">
                {/* Render the EventTable component with fetched data and loading/error states */}
                <EventTable events={events} isLoading={isLoading} error={error} />
            </div>
        </div>
    );
};

export default Events;
