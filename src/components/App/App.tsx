import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App



// import { fetchImg } from "../../services/api";
// import SearchBar from "../SearchBar/SearchBar";
// import { useEffect, useState } from "react";
// import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
// import Loader from "../Loader/Loader";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";
// import ImageGallery from "../ImageGallery/ImageGallery";
// import ImageModal from "../ImageModal/ImageModal";

// const App = () => {
//   const [firstLoad, setFirstLoad] = useState<boolean>(true);
//   const [query, setQuery] = useState<string>("");
//   const [perPage, setPerPage] = useState<number>(10);
//   const [page, setPage] = useState<number>(0);
//   const [pagination, setPagination] = useState<boolean>(false);
//   const [totalPage, setTotalPages] = useState<number>(0);
//   const [loader, setLoader] = useState<boolean>(false);
//   const [error, setError] = useState<boolean>(false);
//   const [results, setResults] = useState<[]>([]);
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//   const [selectedImage, setSelectedImage] = useState<object>({});

//   const handleQuery = (query, perPage) => {
//     if (perPage !== "") setPerPage(perPage);
//     setFirstLoad(true);
//     setQuery(query);
//     setPagination(false);
//     setPage(1);
//     return;
//   };

//   const handleLoadMore = () => {
//     setPage(page + 1);
//     setPagination(true);
//     return;
//   };

//   const handleModal = (imageData) => {
//     setSelectedImage(imageData);
//     toggleIsOpen();
//     return;
//   };

//   const toggleIsOpen = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   useEffect(() => {
//     if (!query) return;
//     (async () => {
//       try {
//         setLoader(true);
//         setError({ isActive: false, errCode: "", errMsg: "" });
//         setTotalPages(0);
//         const data = await fetchImg(query, perPage, page);
//         if (pagination) {
//           setResults((prev) => [...prev, ...data.results]);
//           setTotalPages(data.total_pages);
//           return;
//         }
//         setTotalPages(data.total_pages);
//         setResults(data.results);
//       } catch (err) {
//         setError({
//           isActive: true,
//           errCode: err.status,
//           errMsg: err?.response.data.errors.join(", "),
//         });
//       } finally {
//         setLoader(false);
//         setFirstLoad(false);
//       }
//     })();
//   }, [query, page, pagination, perPage]);

//   return (
//     <>
//       <SearchBar handleQuery={handleQuery} query={query} id="gallery" />
//       {firstLoad ? (
//         ""
//       ) : results.length > 0 ? (
//         <ImageGallery data={results} handleModal={handleModal} />
//       ) : (
//         <h2>Images not found...</h2>
//       )}
//       {error.isActive && (
//         <ErrorMessage code={error.errCode} message={error.errMsg} />
//       )}
//       {loader && <Loader />}
//       {page < totalPage && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
//       <ImageModal
//         isOpen={isModalOpen}
//         onClose={toggleIsOpen}
//         selectedImage={selectedImage}
//       />
//     </>
//   );
// };

// export default App;