import React from 'react';
import { useParams } from 'react-router-dom';
import { useEvent } from '../hooks/useEvents';

const EventDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: event, isLoading, isError, error } = useEvent(id || '');

  if (isLoading) {
    return <div className="text-center text-lg mt-8">Loading event details...</div>;
  }

  if (isError) {
    return <div className="text-center text-lg mt-8 text-red-600">Error: {error.message}</div>;
  }

  if (!event) {
    return <div className="text-center text-lg mt-8">Event not found.</div>;
  }

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">{event.name}</h1>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Game:</span> {event.game}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Dates:</span> {event.startDate} - {event.endDate}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Prize Pool:</span> {event.prizePool}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Location:</span> {event.location}
      </p>
      {event.WinnerTeam && event.WinnerTeam.Name && (
          <p className="text-gray-800 font-bold text-xl mt-4">
            Winner: {event.WinnerTeam.Name}
          </p>
        )}
      <p className="text-gray-700 mt-4">{event.description}</p>

      {/* Add sections for:
          - Event standings/results (more detailed breakdown)
          - Participating teams
          - Key matches/highlights
          - Player performance from this event
      */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Event Details (Coming Soon)</h2>
        <p className="text-gray-600">
          This page will be expanded to include detailed standings, team rosters, and player statistics for this event.
        </p>
      </div>
    </div>
  );
};

export default EventDetailsPage;