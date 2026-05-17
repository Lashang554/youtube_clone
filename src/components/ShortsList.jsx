import { shorts } from "../data/videos";

export default function ShortsList() {
	return (
		<section className="bg-black px-4">
			<h2 className="mb-3 text-lg font-semibold text-white">Shorts</h2>
			<div className="flex gap-4 overflow-x-auto pb-3">
				{shorts.map(short => (
					<div key={short.id} className="w-40 flex-shrink-0">
						<img
							src={short.thumbnail}
							alt={short.title}
							className="h-60 w-full rounded-xl object-cover"
						/>
						<p className="mt-2 text-sm font-medium text-white">{short.title}</p>
						<p className="text-xs text-gray-400">{short.views}</p>
					</div>
				))}
			</div>
		</section>
	);
}
