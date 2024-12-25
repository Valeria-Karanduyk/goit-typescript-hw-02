
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { Image } from "../App/App.types";

type Props = {
  imageList: Image[];
  openModal: (image: Image) => void;
};

const ImageGallery = ({ imageList, openModal }: Props) => {
  return (
    <section className={s.container}>
      {imageList.length > 0 && (
        <ul className={s.list}>
          {imageList.map((img) => (
            <li
              className={s.item}
              key={img.id}
              onClick={() => openModal(img)} 
            >
              <ImageCard imageItem={img} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ImageGallery;
