import React from 'react';
import { Link } from 'react-router-dom';

interface Event {
  ID: number;
  name: string;
  game: string;
  startDate: string;
  endDate: string;
  prizePool: string;
  location: string;
  WinnerTeam: {
    Name: string;
  };
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Link to={`/events/${event.ID}`} className="block">
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{event.name}</h3>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Game:</span> {event.game}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Dates:</span> {event.startDate} - {event.endDate}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Prize Pool:</span> {event.prizePool}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Location:</span> {event.location}
        </p>
        {event.WinnerTeam && event.WinnerTeam.Name && (
          <p className="text-gray-700 font-bold mt-2">
            Winner: {event.WinnerTeam.Name}
          </p>
        )}
      </div>
    </Link>
  );
};

export default EventCard;