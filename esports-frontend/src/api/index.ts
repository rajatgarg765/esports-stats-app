import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_GO_BACKEND_URL || 'http://localhost:8080/api/v1'; // Default to Go backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

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

// Function to fetch all events
export const getEvents = async (): Promise<Event[]> => {
  const response = await api.get('/events');
  return response.data;
};

// Function to fetch a single event by ID
export const getEventById = async (id: string): Promise<Event> => {
  const response = await api.get(`/events/${id}`);
  return response.data;
};

// You'll add functions for teams, players, etc., here later