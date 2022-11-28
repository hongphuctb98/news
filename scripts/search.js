"use strict";
const searchBtn = document.getElementById("btn-submit");
const inputQuery = document.getElementById("input-query");

//xử lý search API
const getSearchData = async function (searchInput, page, pageSize) {
  try {
    const responseSearch = await fetch(
      `https://newsapi.org/v2/everything?q=${searchInput}&page=${page}&pageSize=${pageSize}&apiKey=4aacf0d7a778429ca34adc5e2d888921`
    );
    const dataSearch = await responseSearch.json();
    // pageEle(dataSearch);
    displayNews(dataSearch);
  } catch (e) {
    alert("Error load ling API");
  }
};

//search button event
searchBtn.addEventListener("click", () => {
  let searchInput = inputQuery.value;
  searchInput
    ? getSearchData(searchInput, page, pageSize)
    : alert("Xin nhập thông tin cần tìm kiếm");
});
