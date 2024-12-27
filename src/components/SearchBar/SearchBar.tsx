import { Field, Form, Formik, FormikHelpers } from "formik";
import s from "./SearchBar.module.css";

interface FormData {
  search: string;
}

type Props = {
  onSubmit: (value: string) => void;
}

const SearchBar = ({ onSubmit }: Props) => {
  const handleSubmit = (values: FormData, actions: FormikHelpers<FormData>): void => {
    const formattedSearch = values.search.trim().toLowerCase();
    onSubmit(formattedSearch);
    actions.resetForm();
  };

  return (
    <>
      <header className={s.header}>
        <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
          <Form>
            <Field
              className={s.inputSearch}
              type="text"
              name="search"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button className={s.btn} type="submit">
              Search
            </button>
          </Form>
        </Formik>
      </header>
    </>
  );
};

export default SearchBar;