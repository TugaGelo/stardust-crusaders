export interface Stand {
  id: number;
  name: string;
  user: string;
  tarotCard: string;
  tarotCardImageUrl: string; // <-- RENAMED from imageUrl
  standImageUrl: string;     // <-- ADD THIS LINE
  userImageUrl: string;
  abilities: string[];
}