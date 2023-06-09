import * as SC from "./PaginationSC";
//import PrevIcon from "../../../public/icon_prev.svg";
//import NextIcon from "../../../public/icon_next.svg";
//import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
//import { ResponsiveButton } from "../base/ResponsiveButton";

interface PaginationProps {
  totalPages: number | undefined;
  totalPosts: number | undefined;
  page: number;
  paginate: (num: number) => void;
  pageList: number[];
}

const chunk = <T,>(arr: T[], size: number): T[][] =>
  // acc: 반환값 누적, cur: 현재 배열, i:index
  arr.reduce(
    (acc, cur, i) => (
      i % size ? acc[acc.length - 1].push(cur) : acc.push([cur]), acc
    ),
    [] as T[][]
  );

export const Pagination = ({
  totalPages,
  totalPosts,
  page: currentPage,
  paginate,
  pageList,
}: PaginationProps) => {
  // 0 -> 1,2,3,4,5 / 1 -> 6,7,8,9,10 / ...
  const chunkSize = 5;

  // chunk 처리된 페이지 배열이 담김
  const chunkedPageNumbers = useMemo(() => {
    if (totalPosts === 0) {
      return chunk([], chunkSize);
    }
    return chunk(pageList, chunkSize);
  }, [pageList, chunkSize, totalPosts]);

  const currentChunk = useMemo(() => {
    // 로직
    //   return chunkedPageNumbers.findIndex((chunkedPageNumber) => {
    //     return chunkedPageNumber.includes(currentPage);
    //   });
    // }, [currentPage, chunkedPageNumbers]);

    // 개선로직
    return Math.floor(Math.floor(currentPage - 1 / 5) / 5);
  }, [currentPage]);

  // 이전, 다음 버튼
  function handlePrevPage() {
    const prevPage = currentPage - 1;
    paginate(prevPage);
  }

  function handleNextPage() {
    const nextPage = currentPage + 1;
    paginate(nextPage);
  }

  // 상단 이동 버튼
  function scrollToTop() {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }

  return (
    <SC.PaginationContainer>
      <SC.Empty />
      <SC.PageUl>
        {currentPage === 1 || totalPosts === 0 ? (
          ""
        ) : (
          <SC.PageLi onClick={() => handlePrevPage()}>
            &lt;
            {/* <Image src={PrevIcon} alt="이전 페이지" priority /> */}
          </SC.PageLi>
        )}
        {totalPosts !== 0 &&
          chunkedPageNumbers[currentChunk].map((num) => {
            return (
              <SC.PageLi
                key={num}
                onClick={() => {
                  paginate(num);
                }}
                aria-current={currentPage === num ? "page" : undefined}
              >
                {num}
              </SC.PageLi>
            );
          })}
        {totalPosts === 0 || currentPage === pageList.length ? (
          ""
        ) : (
          <SC.PageLi onClick={() => handleNextPage()}>
            &gt;
            {/* <Image src={NextIcon} alt="다음 페이지" priority /> */}
          </SC.PageLi>
        )}
      </SC.PageUl>
      <button
        onClick={() => {
          scrollToTop();
        }}
        //theme="gray6-gray1-theme"
        //size="sm"
      >
        ↑ 맨 위로 이동
      </button>
    </SC.PaginationContainer>
  );
};