import "./Home.css"

export default function HomePost({ post }) {
    const { name, foregroundImg,backgroundImg, description } = post;
  return (
    <div className="homePostContainer">
      <div className="postTitle">{name}</div>
      <img className="backgroundImg" src={backgroundImg} alt="background image" />
      <img className="foregroundImg" src={foregroundImg} alt="post image" />
      <div className="postDescription">{description}</div>
    </div>
  );
}
