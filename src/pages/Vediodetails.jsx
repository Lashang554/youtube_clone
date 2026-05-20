import { Link, useParams } from "react-router-dom";
import { LikeIcon, MoreVerticalIcon, SaveIcon, ShareIcon } from "../components/YoutubeIcons";
import { videos } from "../data/videos";

export default function VideoDetails() {
	const { id } = useParams();
	const video = videos.find((item) => item.id === id);
	const suggestedVideos = videos.filter((item) => item.id !== id).slice(0, 4);
	const actions = [
		{ label: "Like", icon: LikeIcon },
		{ label: "Share", icon: ShareIcon },
		{ label: "Save", icon: SaveIcon },
	];

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
				<div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex items-center gap-3">
						<img
							src={video.channelImg}
							alt={`${video.channel} channel`}
							className="h-11 w-11 rounded-full object-cover"
						/>
						<div>
							<p className="font-semibold">{video.channel}</p>
							<p className="text-sm text-gray-400">
								{video.views} • {video.time} • {video.category}
							</p>
						</div>
					</div>

					<div className="flex flex-wrap items-center gap-2">
						<button
							type="button"
							className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
						>
							Subscribe
						</button>
						{actions.map((action) => (
							<button
								key={action.label}
								type="button"
								className="inline-flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-red-500"
							>
								<action.icon className="h-5 w-5" />
								{action.label}
							</button>
						))}
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
						<article
							key={suggestedVideo.id}
							className="group flex gap-3 rounded-lg p-2 transition hover:bg-zinc-900"
						>
							<Link to={`/watch/${suggestedVideo.id}`} className="flex-shrink-0 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-red-500">
								<img
									src={suggestedVideo.thumbnail}
									alt={suggestedVideo.title}
									className="h-20 w-32 rounded-lg object-cover"
								/>
							</Link>
							<div className="min-w-0">
								<Link
									to={`/watch/${suggestedVideo.id}`}
									className="block rounded outline-none focus-visible:ring-2 focus-visible:ring-red-500"
								>
									<h3 className="line-clamp-2 text-sm font-semibold">
										{suggestedVideo.title}
									</h3>
								</Link>
								<p className="mt-1 text-xs text-gray-400">
									{suggestedVideo.channel}
								</p>
								<p className="text-xs text-gray-400">
									{suggestedVideo.views} • {suggestedVideo.time}
								</p>
							</div>
							<button
								type="button"
								aria-label={`More actions for ${suggestedVideo.title}`}
								className="h-8 w-8 flex-shrink-0 rounded-full p-1.5 text-zinc-300 opacity-100 transition hover:bg-zinc-800 sm:opacity-0 sm:group-hover:opacity-100"
							>
								<MoreVerticalIcon className="h-5 w-5" />
							</button>
						</article>
					))}
				</div>
			</aside>
		</div>
	);
}
