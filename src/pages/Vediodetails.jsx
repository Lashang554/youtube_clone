import { Link, useParams } from "react-router-dom";
import { videos } from "../data/videos";

export default function VideoDetails() {
	const { id } = useParams();
	const video = videos.find((item) => item.id === id);
	const suggestedVideos = videos.filter((item) => item.id !== id).slice(0, 4);

	if (!video) {
		return (
			<div className="p-4 text-white">
				<h1 className="text-xl font-semibold">Video not found</h1>
				<p className="mt-2 text-gray-400">This video is no longer available.</p>
				<Link to="/" className="mt-4 inline-block text-red-400 hover:text-red-300">
					Back to Home
				</Link>
			</div>
		);
	}

	return (
		<div className="grid gap-6 bg-black p-4 text-white lg:grid-cols-[minmax(0,1fr)_360px]">
			<section>
				<div className="overflow-hidden rounded-xl bg-zinc-950">
					<img
						src={video.thumbnail}
						alt={video.title}
						className="aspect-video w-full object-cover"
					/>
				</div>

				<h1 className="mt-4 text-2xl font-bold">{video.title}</h1>
				<div className="mt-3 flex items-center gap-3">
					<img
						src={video.channelImg}
						alt={`${video.channel} channel`}
						className="h-11 w-11 rounded-full object-cover"
					/>
					<div>
						<p className="font-semibold">{video.channel}</p>
						<p className="text-sm text-gray-400">
							{video.views} • {video.time}
						</p>
					</div>
				</div>

				<p className="mt-4 rounded-xl bg-zinc-900 p-4 text-sm leading-6 text-gray-200">
					{video.description}
				</p>
			</section>

			<aside>
				<h2 className="mb-3 text-lg font-semibold">Up next</h2>
				<div className="space-y-4">
					{suggestedVideos.map((suggestedVideo) => (
						<Link
							key={suggestedVideo.id}
							to={`/watch/${suggestedVideo.id}`}
							className="flex gap-3 rounded-lg p-2 transition hover:bg-zinc-900"
						>
							<img
								src={suggestedVideo.thumbnail}
								alt={suggestedVideo.title}
								className="h-20 w-32 rounded-lg object-cover"
							/>
							<div className="min-w-0">
								<h3 className="line-clamp-2 text-sm font-semibold">
									{suggestedVideo.title}
								</h3>
								<p className="mt-1 text-xs text-gray-400">
									{suggestedVideo.channel}
								</p>
								<p className="text-xs text-gray-400">{suggestedVideo.views}</p>
							</div>
						</Link>
					))}
				</div>
			</aside>
		</div>
	);
}
