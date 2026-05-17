import { useLocation } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { videos } from "../data/videos";

export default function SearchResult() {
	const { search } = useLocation();
	const query = new URLSearchParams(search).get("q")?.trim() ?? "";
	const normalizedQuery = query.toLowerCase();
	const results = videos.filter((video) => {
		const searchableText = `${video.title} ${video.channel} ${video.description}`;

		return searchableText.toLowerCase().includes(normalizedQuery);
	});

	return (
		<div className="bg-black p-4 text-white">
			<div className="mb-5">
				<h1 className="text-xl font-semibold">Search Results</h1>
				<p className="text-sm text-gray-400">
					{query
						? `${results.length} result${results.length === 1 ? "" : "s"} for "${query}"`
						: "Type a search in the top bar to find videos."}
				</p>
			</div>

			{results.length > 0 ? (
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{results.map((video) => (
						<VideoCard key={video.id} video={video} />
					))}
				</div>
			) : (
				<div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 text-gray-300">
					No videos matched your search.
				</div>
			)}
		</div>
	);
}
