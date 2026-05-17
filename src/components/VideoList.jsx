import VideoCard from "./VideoCard";
import { videos } from "../data/videos";

export default function VideoList() {
	return (
		<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 bg-black">
			{videos.map((video) => (
				<VideoCard key={video.id} video={video} />
			))}
		</div>
	);
}

