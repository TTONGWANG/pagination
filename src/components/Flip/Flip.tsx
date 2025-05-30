import "./Flip.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useMemo, useState } from "react";
const Flip = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod";
  const arr = useMemo(() => {
    return Array.from({ length: 100 }, (_, i) => `${lorem}+${i}`);
  }, [lorem]);
  const pageNum = useMemo(() => Math.ceil(arr.length / 5), [arr.length]);
  const initPageNum = 5;
  const paginatedItems = useMemo(
    () => arr.slice((currentPage - 1) * initPageNum, currentPage * initPageNum),
    [arr, currentPage]
  );
  const changePage = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {paginatedItems.map((item, index) => (
        <p key={index} className="item">
          {item}
        </p>
      ))}
      <Stack spacing={2}>
        <Pagination count={pageNum} onChange={changePage} />
      </Stack>
    </div>
  );
};

export default Flip;
