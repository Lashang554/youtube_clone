import VideoCard from "./VideoCard";

export default function VideoList({ videos, selectedCategory }) {
	return (
		<section className="bg-black px-4 pb-8 pt-4">
			<div className="mb-4 flex items-end justify-between gap-3">
				<div>
					<h2 className="text-xl font-semibold text-white">Recommended</h2>
					<p className="text-sm text-gray-400">
						{videos.length} {selectedCategory === "All" ? "videos" : selectedCategory} for you
					</p>
				</div>
				<span className="hidden rounded-full border border-zinc-800 px-3 py-1 text-xs font-medium text-gray-300 sm:inline-flex">
					Fresh picks
				</span>
			</div>

			{videos.length > 0 ? (
				<div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{videos.map((video) => (
						<VideoCard key={video.id} video={video} />
					))}
				</div>
			) : (
				<div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 text-sm text-gray-300">
					No videos in this category yet.
				</div>
			)}
		</section>
	);
}
