export default function VideoCard({ video }) {
	return (
		<div className="w-full max-w-sm">
			{/* Thumbnail */}
			<div className="relative">
				<img
					src={video.thumbnail}
					alt={video.title}
					className="rounded-lg w-full h-48 object-cover"
				/>
				<span className="absolute bottom-2 right-2 bg-black text-white text-xs px-1 rounded">
					{video.duration}
				</span>
			</div>

			{/* Video Info */}
			<div className="flex mt-2 gap-2">
				<img src={video.channelImg} alt="" className="w-9 h-9 rounded-full" />
				<div>
					<h3 className="text-sm font-semibold text-white">{video.title}</h3>
					<p className="text-xs text-gray-400">{video.channel}</p>
					<p className="text-xs text-gray-400">{video.views} • {video.time}</p>
				</div>
			</div>
		</div>
	);
}


