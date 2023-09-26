export interface Game {
  added: number;
  added_by_status: {};
  background_image: string;
  clip: any;
  dominant_color: string;
  esrb_rating: {};
  genres: any;
  id: number;
  metacritic: string;
  name: string;
  parent_platforms: [] | {};
  platforms: [] | {};
  playtime: number;
  rating: number;
  rating_top: number;
  ratings: [] | {};
  ratings_count: number;
  released: string;
  reviews_count: number;
  reviews_text_count: number;
  saturated_color: string;
  short_screenshots: [] | {};
  slug: string;
  stores: [] | {};
  suggestions_count: number;
  tags: [] | {};
  tba: boolean;
  updated: string;
  user_game: any;
}