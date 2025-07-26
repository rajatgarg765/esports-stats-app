import React, { useState, useEffect } from 'react';

// Main App component
const App = () => {
    // State variables to hold fetched data
    const [heroData, setHeroData] = useState(null);
    const [featuredEvents, setFeaturedEvents] = useState([]);
    const [latestNews, setLatestNews] = useState([]);
    const [quickStats, setQuickStats] = useState(null);
    const [userProfileImageUrl, setUserProfileImageUrl] = useState('https://lh3.googleusercontent.com/aida-public/AB6AXuCz9U0B5W-ueoC7asEMc1-qCbyh2_5_KFpTbyyHUqdXVoLYtlM9Xx9R5Ggsf2HMfX4yLeawFGzH0MqA_9oLadSkzl7t57D1_D31eeie3bywxiAZYpfuzLYFbYLh5pJZlpqIBpyDmm5R2GcGMbfNooZFpeniHAdyvO9GeBMI4nW3ltZuDRpJMGvR-Ora9PKpqcQQeD6XyUNXuLTTBijrJ9GxEyfTPPi2JX6khGaGmFxF3Fhr5egu-TlqPV1gjAZdUQQt5uBNIPjsmm4u'); // Default placeholder

    const API_BASE_URL = 'http://localhost:8081/api/v1';

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        // Function to fetch Hero Section data
        const fetchHeroData = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/homepage/hero`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setHeroData(data);
            } catch (error) {
                console.error('Error fetching hero data:', error);
                // Fallback to static data if API fails
                setHeroData({
                    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2qLJUFQpINks5HGyGFaZBAYWmVQwDZSHbpbCHMKCy2BrJnNxDQqeqle8f0CcaAoY2LRNzfNcXhvfnILVSPoe_IPwxT_j0CsVX9uWIUqdPHjV8jfCuqDeh-j9MMM9ZUEjkD7UmC7dZXy5HfS7sb7ZgZFUQCqIaWsIVFGSNSwzmB-qXzUIiQl5iV5Txa-99RkIePnsrHH3DaNbWDgMsZmGuDiNnTvSdadukK6yCtSeDfvbpqFdZv5_rDOMJUKnD72Z3UWk-r81Yva7g',
                    title: 'Relive the Glory Days of Esports',
                    description: 'Explore the rich history of competitive gaming, from classic tournaments to legendary players. Dive into detailed stats, match results, and iconic moments that shaped the esports landscape.'
                });
            }
        };

        // Function to fetch Featured Events data
        const fetchFeaturedEvents = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/events`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                // Ensure imageUrl is present for each event, use placeholder if not
                const eventsWithImages = data.events.map((event: any) => ({ // Added any for type safety
                    ...event,
                    imageUrl: event.imageUrl || `https://placehold.co/300x150/000000/FFFFFF?text=${encodeURIComponent(event.name)}`
                }));
                setFeaturedEvents(eventsWithImages.slice(0, 3)); // Display up to 3 featured events
            } catch (error) {
                console.error('Error fetching featured events:', error);
                setFeaturedEvents([]); // Clear events on error
            }
        };

        // Function to fetch Latest News data
        const fetchLatestNews = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/news`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                // Adjust based on your actual news API response structure
                // Assuming it's an object with a 'news' array, or directly an array
                const newsArticles = Array.isArray(data) ? data : (data.news || []);

                // Ensure img is present for each news item, use placeholder if not
                const newsWithImages = newsArticles.map((news: any) => ({ // Added any for type safety
                    ...news,
                    img: news.img || `https://placehold.co/300x150/000000/FFFFFF?text=${encodeURIComponent(news.title)}`
                }));
                setLatestNews(newsWithImages.slice(0, 2)); // Display up to 2 latest news articles
            } catch (error) {
                console.error('Error fetching latest news:', error);
                setLatestNews([]); // Clear news on error
            }
        };

        // Function to fetch Quick Stats data
        const fetchQuickStats = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/stats/homepage`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setQuickStats(data);
            } catch (error) {
                console.error('Error fetching quick stats:', error);
                // Fallback to static data if API fails
                setQuickStats({
                    totalEvents: '1,200',
                    totalPrizeMoney: '500',
                    mostPopularGame: 'League of Legends'
                });
            }
        };

        // Function to fetch User Profile Image (optional)
        const fetchUserProfileImage = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/user/profile`); // Example API
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                if (data.profileImageUrl) {
                    setUserProfileImageUrl(data.profileImageUrl);
                }
            } catch (error) {
                console.warn('User profile image not fetched, using default. Error:', error);
            }
        };

        // Call all fetch functions
        fetchHeroData();
        fetchFeaturedEvents();
        fetchLatestNews();
        fetchQuickStats();
        fetchUserProfileImage();
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
            <div className="layout-container flex h-full grow flex-col">
                {/* Header Section */}
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
                            <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Events</a>
                            <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Teams</a>
                            <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Players</a>
                            <a className="text-[#111418] text-sm font-medium leading-normal" href="#">Games</a>
                            <a className="text-[#111418] text-sm font-medium leading-normal" href="#">News</a>
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

                {/* Main Content Area */}
                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        {/* Hero Section */}
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

                        {/* Featured Events Section */}
                        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Events</h2>
                        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
                            <div className="flex items-stretch p-4 gap-3">
                                {featuredEvents.length > 0 ? (
                                    featuredEvents.map((event: any) => ( // Added any for type safety
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

                        {/* Latest News Section */}
                        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Latest News</h2>
                        <div>
                            {latestNews.length > 0 ? (
                                latestNews.map((news: any) => ( // Added any for type safety
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

                        {/* Quick Stats Section */}
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
                    </div>
                </div>

                {/* Footer Section */}
                <footer className="flex justify-center">
                    <div className="flex max-w-[960px] flex-1 flex-col">
                        <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
                            <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                                <a className="text-[#60758a] text-base font-normal leading-normal min-w-40" href="#">About</a>
                                <a className="text-[#60758a] text-base font-normal leading-normal min-w-40" href="#">Contact</a>
                                <a className="text-[#60758a] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
                                <a className="text-[#60758a] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="#">
                                    <div className="text-[#60758a]" data-icon="TwitterLogo" data-size="24px" data-weight="regular">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                            <path
                                                d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"
                                            ></path>
                                        </svg>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="text-[#60758a]" data-icon="InstagramLogo" data-size="24px" data-weight="regular">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                            <path
                                                d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
                                            ></path>
                                        </svg>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="text-[#60758a]" data-icon="FacebookLogo" data-size="24px" data-weight="regular">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                            <path
                                                d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"
                                            ></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                            <p className="text-[#60758a] text-base font-normal leading-normal">@2024 Esports History. All rights reserved.</p>
                        </footer>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default App;