import { Image } from "../App/App.types";
import s from "./ImageCard.module.css";

type Props = {
  imageItem: Image;
}

const ImageCard = ({
  imageItem: {
    alt_description,
    likes,
    urls: { small },
    user: {
      name,
      social: { portfolio_url },
    },
  },
}: Props) => {
  return (
    <div className={s.box}>
      <img
        className={s.img}
        src={small}
        alt={alt_description}
          />
          <div className={s.container}>
              <p className={s.textPhoto}>
                  <strong>Author</strong>
                  <a href={portfolio_url} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
              </p>
    <p className={s.textPhoto}>
          <strong>Likes: </strong>
          {likes}
        </p>
          </div>
    </div>
  );
};

export default ImageCard;