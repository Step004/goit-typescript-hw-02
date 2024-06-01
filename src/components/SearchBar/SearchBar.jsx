import css from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  
    const onSubmitBar = (e) => {
      e.preventDefault();
      const form = e.target;
      const [input] = form.elements;
      const inputValue = input.value.trim();
      if (inputValue === "") {
         toast.error("Please, enter your text.", {
           duration: 2000,
         });
        return;
      }
      onSubmit(inputValue);
      form.reset();
  };
  
  return (
    <header>
      <div className={css.topLine}>
        <form onSubmit={onSubmitBar} className={css.form}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.input}
          />
          <button type="submit" className={css.button} >
            <IoSearch />
          </button>
          <Toaster />
        </form>
      </div>
    </header>
  );
}
