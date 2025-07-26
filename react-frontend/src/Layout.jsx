import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'; // Used to render child routes
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = () => {
    // State for user profile image, potentially fetched here if needed globally
    const [userProfileImageUrl, setUserProfileImageUrl] = useState('https://lh3.googleusercontent.com/aida-public/AB6AXuCz9U0B5W-ueoC7asEMc1-qCbyh2_5_KFpTbyyHUqdXVoLYtlM9Xx9R5Ggsf2HMfX4yLeawFGzH0MqA_9oLadSkzl7t57D1_D31eeie3bywxiAZYpfuzLYFbYLh5pJZlpqIBpyDmm5R2GcMbfNooZFpeniHAdyvO9GeBMI4nW7ltZuDRpJMGvR-Ora9PKpqcQQeD6XyUNXuLTTBijrJ9GxEyfTPPi2JX6khGaGmFxF3Fhr5egu-TlqPV1gjAZdUQQt5uBNIPjsmm4u'); // Default placeholder

    const API_BASE_URL = 'http://localhost:8081/api/v1';

    useEffect(() => {
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
        fetchUserProfileImage();
    }, []);

    return (
        <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
            <div className="layout-container flex h-full grow flex-col">
                {/* Pass userProfileImageUrl to Header */}
                <Header userProfileImageUrl={userProfileImageUrl} />

                {/* This is where the content of the current route (Home, Events, etc.) will be rendered */}
                {/* Adjusted padding for responsiveness: px-4 on small screens, increasing with breakpoint */}
                <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
                    <Outlet />
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Layout;
