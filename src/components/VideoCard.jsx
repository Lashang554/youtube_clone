import { Link } from "react-router-dom";
import { MoreVerticalIcon } from "./YoutubeIcons";

export default function VideoCard({ video }) {
	const watchUrl = `/watch/${video.id}`;

	return (
		<article className="group w-full max-w-sm rounded-xl">
			<Link
				to={watchUrl}
				className="block rounded-xl outline-none transition focus-visible:ring-2 focus-visible:ring-red-500"
			>
				<div className="relative overflow-hidden rounded-xl bg-zinc-900">
					<img
						src={video.thumbnail}
						alt={video.title}
						className="h-48 w-full object-cover transition duration-200 group-hover:scale-105"
					/>
					<span className="absolute bottom-2 right-2 rounded bg-black/85 px-2 py-0.5 text-xs font-medium text-white">
						{video.duration}
					</span>
				</div>
			</Link>

			<div className="mt-3 flex gap-3">
				<img
					src={video.channelImg}
					alt={`${video.channel} channel`}
					className="h-9 w-9 rounded-full object-cover"
				/>
				<div className="min-w-0 flex-1">
					<Link
						to={watchUrl}
						className="block rounded outline-none focus-visible:ring-2 focus-visible:ring-red-500"
					>
						<h3 className="line-clamp-2 text-sm font-semibold leading-5 text-white group-hover:text-red-100">
							{video.title}
						</h3>
					</Link>
					<p className="text-xs text-gray-400">{video.channel}</p>
					<p className="text-xs text-gray-400">
						{video.views} • {video.time}
					</p>
				</div>
				<button
					type="button"
					aria-label={`More actions for ${video.title}`}
					className="h-8 w-8 flex-shrink-0 rounded-full p-1.5 text-zinc-300 opacity-100 transition hover:bg-zinc-900 sm:opacity-0 sm:group-hover:opacity-100"
				>
					<MoreVerticalIcon className="h-5 w-5" />
				</button>
			</div>
		</article>
	);
}
