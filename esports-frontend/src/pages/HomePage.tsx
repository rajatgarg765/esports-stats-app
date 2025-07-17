import React from 'react';
import { useEvents } from '../hooks/useEvents';
import EventCard from '../components/EventCard';

const HomePage: React.FC = () => {
  const { data: events, isLoading, isError, error } = useEvents();

  if (isLoading) {
    return <div className="text-center text-lg mt-8">Loading events...</div>;
  }

  if (isError) {
    return <div className="text-center text-lg mt-8 text-red-600">Error loading events: {error.message}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Latest Events</h2>
      {events && events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.ID} event={event} />
          ))}
        </div>
      ) : (
        <p className="text-gray-700">No events found. Time to add some data!</p>
      )}
    </div>
  );
};

export default HomePage;