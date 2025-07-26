import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedEventsSection from '../components/FeaturedEventsSection';
import LatestNewsSection from '../components/LatestNewsSection';
import QuickStatsSection from '../components/QuickStatsSection';

const Home = () => {
    const [heroData, setHeroData] = useState(null);
    const [featuredEvents, setFeaturedEvents] = useState([]);
    const [latestNews, setLatestNews] = useState([]);
    const [quickStats, setQuickStats] = useState(null);

    const API_BASE_URL = 'http://localhost:8081/api/v1';

    useEffect(() => {
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
                setHeroData({
                    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2qLJUFQpINks5HGyGFaZBAYWmVQwDZSHbpbCHMKCy2BrJnNxDQqeqle8f0CcaAoY2LRNzfNcXhvfnILVSPoe_IPwxT_j0CsVX9uWIUqdPHjV8jfCuqDeh-j9MMM9ZUEjkD7UmC7dZXy5HfS7sb7ZgZFUQCqIaWsIVFGSNSwzmB-qXzUIiQl5iV5Txa-99RkIePnsrHH3DaNbWDgMsZmGuDiNnTvSdadukK6yCtSeDfvbpqFdZv5_rDOMJUKnD72Z3UWk-r81Yva7g',
                    title: 'Relive the Glory Days of Esports',
                    description: 'Explore the rich history of competitive gaming, from classic tournaments to legendary players. Dive into detailed stats, match results, and iconic moments that shaped the esports landscape.'
                });
            }
        };

        const fetchFeaturedEvents = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/events`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                const eventsWithImages = data.events.map((event) => ({
                    ...event,
                    imageUrl: event.imageUrl || `https://placehold.co/300x150/000000/FFFFFF?text=${encodeURIComponent(event.name)}`
                }));
                setFeaturedEvents(eventsWithImages.slice(0, 3));
            } catch (error) {
                console.error('Error fetching featured events:', error);
                setFeaturedEvents([]);
            }
        };

        const fetchLatestNews = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/news`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                const newsArticles = Array.isArray(data) ? data : (data.news || []);
                const newsWithImages = newsArticles.map((news) => ({
                    ...news,
                    img: news.img || `https://placehold.co/300x150/000000/FFFFFF?text=${encodeURIComponent(news.title)}`
                }));
                setLatestNews(newsWithImages.slice(0, 2));
            } catch (error) {
                console.error('Error fetching latest news:', error);
                setLatestNews([]);
            }
        };

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
                setQuickStats({
                    totalEvents: '1,200',
                    totalPrizeMoney: '500',
                    mostPopularGame: 'League of Legends'
                });
            }
        };

        fetchHeroData();
        fetchFeaturedEvents();
        fetchLatestNews();
        fetchQuickStats();
    }, []);

    return (
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1 mx-auto px-4 sm:px-6 md:px-8">
            <HeroSection heroData={heroData} />
            <FeaturedEventsSection featuredEvents={featuredEvents} />
            <LatestNewsSection latestNews={latestNews} />
            <QuickStatsSection quickStats={quickStats} />
        </div>
    );
};

export default Home;
