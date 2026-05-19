import { useMemo, useState } from "react";
import CategoryBar from "../components/CategoryBar";
import VideoList from "../components/VideoList";
import ShortsList from "../components/ShortsList";
import { videos } from "../data/videos";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const visibleVideos = useMemo(() => {
    if (selectedCategory === "All") {
      return videos;
    }

    return videos.filter((video) => {
      if (selectedCategory === "Live") {
        return video.time === "LIVE";
      }

      if (selectedCategory === "Mixes") {
        return video.title.toLowerCase().includes("remix");
      }

      return video.category === selectedCategory;
    });
  }, [selectedCategory]);

  return (
    <div className="flex-1 bg-black pb-6">
      <CategoryBar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <VideoList videos={visibleVideos} selectedCategory={selectedCategory} />
      <ShortsList />
    </div>
  );
}
