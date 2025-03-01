export interface AnimeResult {
  name: string;
  cover_url: string;
}

export interface TrendingResponse {
  results: AnimeResult[];
}

export interface StreamingResponse {
  streams: {
    url: string;
  }[];
}

