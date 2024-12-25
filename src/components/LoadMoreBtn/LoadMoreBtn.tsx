import s from "./LoadMoreBtn.module.css";

type Props = {
  onClick: () => void;
  isVisible: () => boolean;
};

const LoadMoreBtn = ({ onClick,isVisible }: Props) => {
    return (
    <div className={s.box}>
    {isVisible() && (
    <button className={s.btn} onClick={onClick}>
      Load more
    </button>
    )}
    </div>
  );
};

export default LoadMoreBtn;