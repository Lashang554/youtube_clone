import VideoCard from "./VideoCard";
import nepalVsStarsImg from "../image/nepalvsstars.jpg";
import radhaImg from "../image/radha.jpg";
import radhalogoImg from "../image/radhalogo.jpg";
import nepalvsstarlogoImg from "../image/nepalvsstarlogo.jpg";
import musicImg from "../image/music.jpg";
import Music_logoImg from "../image/Music_logo.png";
import venomImg from "../image/venom.jpg";
import ufcImg from "../image/ufc.webp";
import ufclogoImg from "../image/ufclogo.jpg";
import comadyImg from "../image/comady.jpeg";
import orsImg from "../image/ors.png";
import durgaImg from "../image/durga.jpeg";
import mmaImg from "../image/mma.jpg";

export default function VideoList() {
	const videos = [
		{
			title: "Nepal VS Stars | Top End T20 SERIES 2025",
			channel: "Kantipur Max HD",
			views: "66K watching",
			time: "LIVE",
			duration: "4:05:22",
			thumbnail: nepalVsStarsImg,
			channelImg: nepalvsstarlogoImg,
		},
		{
			title: "ACHYUTAM KESHAVAM KRISHNA DAMODARAM",
			channel: "Hindu God Lovers",
			views: "152K views",
			time: "7 months ago",
			duration: "3:15",
			thumbnail: radhaImg,
			channelImg: radhalogoImg,
		},
		{
			title: "Hindi music video 2025 and remixes",
			channel: "music",
			views: "100K views",
			time: "2 months ago",
			duration: "5:15",
			thumbnail: musicImg,
			channelImg: Music_logoImg,
		},
		{
			title: "Venom: The Last Dance with Tom Hardy",
			channel: "the final film in the trilogy",
			views: "1.2M views",
			time: "1 year ago",
			duration: "2:01",
			thumbnail: venomImg,
			channelImg: venomImg,
		},
		{
			title: "UFC 292: Adesanya vs Cannonier",
			channel: "UFC",
			views: "1.2M views",
			time: "1 day ago",
			duration: "15:45",
			thumbnail: ufcImg,
			channelImg: ufclogoImg,
		},
		{
			title: "COMEDY NIGHT WITH CHAMPIONS.|| Episode 20 || Rajendra Khadgi, Jay Kishan .",
			channel: "Comedy Night",
			views: "500k views",
			time: "8 day ago",
			duration: "1:04:45",
			thumbnail: comadyImg,
			channelImg: orsImg,
		},
		{
			title: "ACHYUTAM KESHAVAM KRISHNA DAMODARAM",
			channel: "Hindu God Lovers",
			views: "152K views",
			time: "7 months ago",
			duration: "3:15",
			thumbnail: durgaImg,
			channelImg: nepalvsstarlogoImg,
		},
		{
			title: "MMA fight night 2025 ",
			channel: "MMA",
			views: "64k views",
			time: "5 day ago",
			duration: "1:04:45",
			thumbnail: mmaImg,
			channelImg: durgaImg,
		},
		
	];

	return (
		<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 bg-black">
			{videos.map((video, i) => (
				<VideoCard key={i} video={video} />
			))}
		</div>
	);
}


