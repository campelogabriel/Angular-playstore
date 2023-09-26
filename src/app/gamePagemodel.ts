import { Game } from './gameModel';

export interface gamePage {
  count: number;
  description: string;
  filters: {};
  next: string;
  nofollow: boolean;
  nofollow_collections: String[];
  noindex: boolean;
  previous: null | string;
  results: Game[];
  seo_description: string;
  seo_h1: string;
  seo_keywords: string;
  seo_title: string;
}
