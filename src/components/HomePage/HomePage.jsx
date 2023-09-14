import posts from "../../resources/data/home.json"
import HomePost from "./HomePost";

const style = {
  height: "96vh",
  maxHeight: "96vh",
  width: "100vw",
  maxWidth: "100vw",
  display: "flex",
  flexDirection: "row-reverse",
  flexWrap: "wrap",
  justifyContent: "space-around",
  overflowX:"hidden",
  overflowY:"scroll",
  scrollSnapType:"y mandatory",  
  scrollBehavior: "smooth",
};

export default function HomePage() {
  return (
    <div className="postsContainer" style={style}>
      {posts.map((post) => {
        return <HomePost post={post} />;
      })}
    </div>
  );
  
}
