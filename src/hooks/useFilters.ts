import { useState } from "react";

function useFilters() {
  const [filters, setFilters] = useState<{
    age: string;
    status: string;
  }>({ age: "", status: "" });

  const activedFilters = (filter: string) => {
    if (filter === "age") {
      if (filters.age.length !== 0) {
        setFilters({ ...filters, age: "" });
      } else {
        setFilters({ ...filters, age: "?age=true" });
      }
    } else if (filter === "status") {
      if (filters.status.length !== 0) {
        setFilters({ ...filters, status: "" });
      } else {
        setFilters({ ...filters, status: "?status=true" });
      }
    }
  };

  return { filters, setFilters, activedFilters };
}

export default useFilters;
