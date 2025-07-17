import { useQuery } from '@tanstack/react-query';
import { getEvents, getEventById } from '../api';

// This interface should mirror your Go model for Event
interface Event {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    name: string;
    game: string;
    startDate: string;
    endDate: string;
    prizePool: string;
    location: string;
    winnerTeamId: number;
    WinnerTeam: { // Match the Go `models.Team` structure
      ID: number;
      Name: string;
      LogoURL: string;
      // ... other team fields you define
    };
    description: string;
  }

export const useEvents = () => {
  return useQuery<Event[], Error>({
    queryKey: ['events'],
    queryFn: getEvents,
  });
};

export const useEvent = (id: string) => {
  return useQuery<Event, Error>({
    queryKey: ['event', id],
    queryFn: () => getEventById(id),
    enabled: !!id, // Only run query if id is available
  });
};