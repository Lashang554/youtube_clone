export default function ShortsList() {
	const shorts = [
		{ id: 1, title: "Dance Performance", thumbnail: "https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg" },
		{ id: 2, title: "Funny Clip", thumbnail: "https://i.pinimg.com/236x/6f/42/15/6f421598af56c4a8794a2b6b21869056.jpg" },
		{ id: 3, title: "Cricket Highlights", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcSnxXnptLl2UhZNaG8ChgihyQPQ73ddx5IQ&s" },
	];

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


