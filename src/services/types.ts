export interface AnimeResponse {
  data: AnimeData[];
  meta: Meta;
  links: PaginationLinks;
}

export interface AnimeDetailResponse {
  data: AnimeData;
}

export interface AnimeData {
  id: string;
  type: string;
  links: Links;
  attributes: Attributes;
  relationships: Relationships;
}

export interface Links {
  self: string;
  related: string;
}

export interface Attributes {
  createdAt: string;
  updatedAt: string;
  slug: string;
  synopsis: string;
  description: string;
  coverImageTopOffset: number;
  titles: Titles;
  canonicalTitle: string;
  abbreviatedTitles: string[];
  averageRating: string;
  ratingFrequencies: RatingFrequencies;
  userCount: number;
  favoritesCount: number;
  startDate: string;
  endDate: string;
  nextRelease: object;
  popularityRank: number;
  ratingRank: number;
  ageRating: string;
  ageRatingGuide: string;
  subtype: string;
  status: string;
  tba?: string;
  posterImage: PosterImage;
  coverImage?: CoverImage;
  episodeCount: number;
  episodeLength?: number;
  totalLength: number;
  youtubeVideoId: string;
  showType: string;
  nsfw: boolean;
}

export interface Titles {
  en?: string;
  en_jp: string;
  ja_jp: string;
  en_us?: string;
}

export interface RatingFrequencies {
  "2": string;
  "3": string;
  "4": string;
  "5": string;
  "6": string;
  "7": string;
  "8": string;
  "9": string;
  "10": string;
  "11": string;
  "12": string;
  "13": string;
  "14": string;
  "15": string;
  "16": string;
  "17": string;
  "18": string;
  "19": string;
  "20": string;
}

export interface PosterImage {
  tiny: string;
  large: string;
  small: string;
  medium: string;
  original: string;
  meta: Meta;
}

export interface Dimention {
  width: number;
  height: number;
}

export interface Dimensions {
  tiny: Dimention;
  large: Dimention;
  small: Dimention;
  medium: Dimention;
}

export interface CoverImage {
  tiny: string;
  large: string;
  small: string;
  original: string;
  meta: Meta;
}

export interface Meta {
  dimensions: Dimensions;
  count: number;
}

export interface Relationships {
  genres: Genres;
  categories: Categories;
  castings: Castings;
  installments: Installments;
  mappings: Mappings;
  reviews: Reviews;
  mediaRelationships: MediaRelationships;
  characters: Characters;
  staff: Staff;
  productions: Productions;
  quotes: Quotes;
  episodes: Episodes;
  streamingLinks: StreamingLinks;
  animeProductions: AnimeProductions;
  animeCharacters: AnimeCharacters;
  animeStaff: AnimeStaff;
}

export interface Genres {
  links: Links;
}

export interface Categories {
  links: Links;
}

export interface Castings {
  links: Links;
}

export interface Installments {
  links: Links;
}

export interface Mappings {
  links: Links;
}

export interface Reviews {
  links: Links;
}

export interface MediaRelationships {
  links: Links;
}

export interface Characters {
  links: Links;
}

export interface Staff {
  links: Links;
}

export interface Productions {
  links: Links;
}

export interface Quotes {
  links: Links;
}

export interface Episodes {
  links: Links;
}

export interface StreamingLinks {
  links: Links;
}

export interface AnimeProductions {
  links: Links;
}

export interface AnimeCharacters {
  links: Links;
}

export interface AnimeStaff {
  links: Links;
}

export interface PaginationLinks {
  first: string;
  next: string;
  last: string;
}

export interface AnimeListParams {
  page?: number;
  perPage?: number;
  search?: string;
}

export interface CategoryResponse {
  data: Category[];
  meta: Meta;
  links: PaginationLinks;
}

export interface Category {
  id: string;
  attributes: {
    title: string;
    description: string;
    slug: string;
    nsfw: boolean;
    image: string | null;
    totalMediaCount: number;
  };
}

export interface CategoryParams {
  page?: number;
  perPage?: number;
}
