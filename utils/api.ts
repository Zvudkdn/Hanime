const API_BASE_URL = process.env.NEXT_PUBLIC_ANIME_API_URL;

export async function getTrendingAnime() {
  const res = await fetch(`${API_BASE_URL}/trending/day/1`);
  if (!res.ok) throw new Error('Failed to fetch trending anime');
  return res.json() as Promise<TrendingResponse>;
}

export async function getAnimeStreams(animeName: string) {
  // Format the anime name: replace spaces with hyphens and ensure proper encoding
  const formattedName = animeName
    .replace(/\s+/g, '-')
    .toLowerCase();
    
  const res = await fetch(`${API_BASE_URL}/watch/${formattedName}`);
  if (!res.ok) throw new Error(`Failed to fetch anime streams for ${animeName}`);
  return res.json() as Promise<StreamingResponse>;
}

