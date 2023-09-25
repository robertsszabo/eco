import "./Home.css"

export default function HomePost({ post }) {
  const { name, foregroundImg, backgroundImg, description } = post;
  return (
    <div className="homePostContainer">
      <div className="title" style={{position:"absolute"}}>{name}</div>
      <img className="backgroundImg" src={backgroundImg} alt="background image" />
      <div className="categories">
        <div className="category">
          <img className="categoriesImg" src="images\pigeon.jpg" alt="post image" />
          <img class="greaterandinverted" src="images\pigeon.jpg" alt="post image" />
          <p className="subtitle">pasari</p>
        </div>
        <div className="category">
          <img className="categoriesImg" src="images\mouse.jpg" alt="post image" />
          <img className="greaterandinverted" src="images\mouse.jpg" alt="post image" />
          <p className="subtitle">rozatoare</p>
        </div>
        <div className="category">
          <img className="categoriesImg" src="images\insects.png" alt="post image" />
          <img className="greaterandinverted" src="images\insects.png" alt="post image" />
          <p className="subtitle">insecte</p>
          
        </div>
        <div className="category">
          <img className="categoriesImg" src="images\cat.png" alt="post image" />
          <img class="greaterandinverted" src="images\cat.png" alt="post image" />
          <p className="subtitle">pisici</p>
        </div>
        <div className="category">
          <img className="categoriesImg" src="images\dog.jpg" alt="post image" />
          <img className="greaterandinverted" src="images\dog.jpg" alt="post image" />
          <p className="subtitle">caini</p>
        </div>
        <div className="category">
          <img className="categoriesImg" src="images\reptile.jpg" alt="post image" />
          <img className="greaterandinverted" src="images\reptile.jpg" alt="post image" />
          <p className="subtitle">reptile</p>
          
        </div>


      </div>
    </div>
  );
}
