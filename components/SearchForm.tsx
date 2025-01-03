import React from "react";
import Form from "next/form";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/snapshots" scroll={false} className="search-form">
      <input
        type="text"
        name="query"
        defaultValue={query}
        placeholder="Search snapshots"
        className="search-input"
      />
      <button type="submit" className="search-btn text-white">
        <Search className="size-5" />
      </button>
    </Form>
  );
};

export default SearchForm;
