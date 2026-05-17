import { shorts } from "../data/videos";

export default function ShortsList() {
	return (
		<div className="px-4 bg-black">
			<h2 className="text-white text-lg font-semibold mb-3">Shorts</h2>
			<div className="flex gap-4 overflow-x-auto scrollbar-hide">
				{shorts.map(short => (
					<div key={short.id} className="w-40 flex-shrink-0">
						<img
							src={short.thumbnail}
							alt={short.title}
							className="rounded-lg h-60 object-cover"
						/>
						<p className="text-white text-sm mt-1">{short.title}</p>
					</div>
				))}
			</div>
		</div>
	);
}

