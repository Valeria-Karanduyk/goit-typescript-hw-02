import s from "./ImageModal.module.css";
import Modal from "react-modal";
import { FaWindowClose } from "react-icons/fa";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useEffect } from "react";
import { Image } from "../App/App.types";

type Props = {
  isOpen: boolean;
  image: Image | null;
  onCloseModal: () => void;
}
const ImageModal = ({ isOpen, onCloseModal, image }: Props) => {
  useEffect(() => {
    if (isOpen) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
  }, [isOpen]);
  return (
    <Modal
      overlayClassName={s.overlay}
      className={s.content}
      isOpen={isOpen}
      onRequestClose={onCloseModal}
    >
      <button className={s.btn} onClick={onCloseModal}>
        <FaWindowClose className={s.icon} />
      </button>
      {image && (
        <div className={s.container}>
          <div className={s.imgContainer}>
            <img
              className={s.img}
              src={image.urls?.regular || ""}
              alt={image.alt_description || "Image"}
            />
          </div>
          <div className={s.moreInform}>
            <p className={s.author}>
              Author:{" "}
              <a
                className={s.linkAuthor}
                href={image.user?.social?.portfolio_url || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {image.user.name}
              </a>
            </p>
            <p className={s.likes}>
              Likes: <span className={s.likesSpan}>{image.likes}</span>
            </p>
            {image.description && (
              <p className={s.description}>{image.description}</p>
            )}
            {image.user.location && (
              <p className={s.location}>Location: {image.user.location}</p>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
