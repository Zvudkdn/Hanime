import { getTrendingAnime } from "@/utils/api"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default async function TrendingPage() {
  const { results } = await getTrendingAnime()

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Trending Anime</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {results.map((anime) => (
          <Link 
            key={anime.name} 
            href={`/watch/${anime.name.replace(/\s+/g, '-').toLowerCase()}`}
          >
            <Card className="overflow-hidden hover:ring-2 hover:ring-primary transition-all">
              <div className="aspect-[3/4] relative">
                <Image
                  src={anime.cover_url || "/placeholder.svg"}
                  alt={anime.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                />
              </div>
              <CardContent className="p-4">
                <h2 className="font-semibold line-clamp-2">{anime.name}</h2>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

