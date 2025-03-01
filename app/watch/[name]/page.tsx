import { getAnimeStreams } from "@/utils/api"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function WatchPage({
  params,
}: {
  params: { name: string }
}) {
  const { streams } = await getAnimeStreams(params.name)
  const streamUrl = streams[0]?.url

  // Convert the URL-formatted name back to display format
  const displayName = params.name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{displayName}</h1>
      <Card>
        <CardHeader>
          <CardTitle>Watch</CardTitle>
        </CardHeader>
        <CardContent>
          {streamUrl ? (
            <div className="aspect-video">
              <video
                src={streamUrl}
                controls
                className="w-full h-full"
                poster="/placeholder.svg"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <p className="text-muted-foreground">No streams available</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

