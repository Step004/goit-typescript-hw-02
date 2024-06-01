import css from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import { FormEvent } from "react";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const onSubmitBar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("search") as HTMLInputElement;
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
            name="search"
          />
          <button type="submit" className={css.button}>
            <IoSearch />
          </button>
          <Toaster />
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
