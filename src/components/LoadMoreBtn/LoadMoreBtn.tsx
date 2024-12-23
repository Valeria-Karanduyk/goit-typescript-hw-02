import s from "./LoadMoreBtn.module.css";

type Props = {
  onClick: () => void;
  handleLoadMore: () => boolean;
};

const LoadMoreBtn = ({ onClick,handleLoadMore }: Props) => {
    return (
    <div className={s.box}>
    {handleLoadMore() && (
    <button className={s.btn} onClick={onClick}>
      Load more
    </button>
    )}
    </div>
  );
};

export default LoadMoreBtn;