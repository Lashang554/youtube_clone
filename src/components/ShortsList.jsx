import { shorts } from "../data/videos";
import { MoreVerticalIcon, ShortsIcon } from "./YoutubeIcons";

export default function ShortsList() {
	return (
		<section className="bg-black px-4">
			<h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-white">
				<ShortsIcon className="h-6 w-6 text-red-500" />
				Shorts
			</h2>
			<div className="flex gap-4 overflow-x-auto pb-3">
				{shorts.map(short => (
					<div key={short.id} className="w-40 flex-shrink-0">
						<img
							src={short.thumbnail}
							alt={short.title}
							className="h-60 w-full rounded-xl object-cover"
						/>
						<div className="mt-2 flex gap-2">
							<div className="min-w-0 flex-1">
								<p className="line-clamp-2 text-sm font-medium text-white">{short.title}</p>
								<p className="text-xs text-gray-400">{short.views}</p>
							</div>
							<button
								type="button"
								aria-label={`More actions for ${short.title}`}
								className="h-7 w-7 flex-shrink-0 rounded-full p-1 text-zinc-300 transition hover:bg-zinc-900"
							>
								<MoreVerticalIcon className="h-5 w-5" />
							</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
