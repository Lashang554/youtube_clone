import { Link } from "react-router-dom";

export default function VideoCard({ video }) {
	return (
		<Link
			to={`/watch/${video.id}`}
			className="group block w-full max-w-sm rounded-xl outline-none transition focus-visible:ring-2 focus-visible:ring-red-500"
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

			<div className="mt-3 flex gap-3">
				<img
					src={video.channelImg}
					alt={`${video.channel} channel`}
					className="h-9 w-9 rounded-full object-cover"
				/>
				<div className="min-w-0">
					<h3 className="line-clamp-2 text-sm font-semibold leading-5 text-white group-hover:text-red-100">
						{video.title}
					</h3>
					<p className="text-xs text-gray-400">{video.channel}</p>
					<p className="text-xs text-gray-400">
						{video.views} • {video.time}
					</p>
				</div>
			</div>
		</Link>
	);
}
