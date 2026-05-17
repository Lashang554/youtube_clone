import CategoryBar from "../components/CategoryBar";
import VideoList from "../components/VideoList";
import ShortsList from "../components/ShortsList";

export default function Home() {
  return (
    <div className="flex-1 bg-black pb-6">
      <CategoryBar />
      <VideoList />
      <ShortsList />
    </div>
  );
}
