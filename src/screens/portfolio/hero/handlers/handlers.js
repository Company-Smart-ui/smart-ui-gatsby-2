import queryString from "query-string";

export const setCountCardsPerScreenSize = (size) => {
  if (size < 768) {
    return 2;
  } else if (size >= 768 && size < 1440) {
    return 4;
  } else if (size >= 1440 && size < 1720) {
    return 6;
  }
  return 8;
};

export const parseTechnologies = () => {
  if (typeof window !== "undefined") {
    const parsed = queryString.parse(window.location.search);
    return parsed.technologies;
  }
};

export const sliceItemsPerPage = (arr, currentPage, itemsPerPage) => {
  const indexOfLastCard = currentPage * itemsPerPage;
  const indexOfFirstCard = indexOfLastCard - itemsPerPage;

  return arr.slice(indexOfFirstCard, indexOfLastCard);
};