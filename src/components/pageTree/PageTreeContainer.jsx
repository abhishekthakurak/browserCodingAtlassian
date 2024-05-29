import { useEffect, useState } from "react";

//service
import { fetchData } from "../../service/data";

//components
import { PageTree } from "./PageTree";

export const PageTreeContainer = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetchData().then((pages) => {
      setPages(pages);
    });
  }, []);

  return (
    <div>
      <PageTree pages={pages} level={1} />
    </div>
  );
};
