import s from "./Loader.module.css";
import { FadeLoader} from "react-spinners";

const LoaderMore = () => {
  return (
    <div className={s.container}>
      <FadeLoader color="#FFFF00" height={15} width={5} />
    </div>
  );
};

export default LoaderMore;