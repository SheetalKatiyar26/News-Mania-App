import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import { useNavigate } from "react-router";
const Search = (props) => {
  const [filterValue, setFilterValue] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [data, setData] = useState([]);
  const apiKey = process.env.REACT_APP_NEWS_API;

  //   let navigate = useNavigate();

  useEffect(() => {
    var requestUrl = `https://newsdata.io/api/1/news?apiKey=${apiKey}&country=in&qInTitle=${searchValue}`;
    if (searchValue.length !== 0) {
      fetch(requestUrl)
        .then((response) => {
          return response.json();
        })
        .then((datas) => {
          setData(datas);
        })
        .catch((err) => {
          console.log("There has been an error");
        });
    }
  }, [searchValue]);

  const onTrigger = (event) => {
    props.searchCall(event);
    console.log("event", event);
    setFilterValue([]);
    // navigate("/search");
    // props.scrollRef.current.scrollIntoView({ behavior: "smooth" });

    // event.preventDefault();
  };

  const onSubmit = () => {
    props.searchCall(searchValue);
    setFilterValue([]);
    // navigate("/search");
    // if (event.target.search.value != "") {
    //   props.scrollRef.current.scrollIntoView({ behavior: "smooth" });
    // }
    // event.preventDefault();
  };

  const handleSearch = debounce((event) => {
    setSearchValue(event.target.value.trim());
    console.log("event.target.value.trim()", event.target.value.trim());
    const filterArray = data.results?.filter((e) => {
      return e.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    if (searchValue === "") {
      setFilterValue([]);
    } else {
      setFilterValue(filterArray);
    }
  }, 2000);

  return (
    <div id="search" className="Search">
      <form className="form-data">
        <input
          type="search"
          placeholder="Search for a News..."
          name="search"
          onChange={(e) => handleSearch(e)}
          autoComplete="off"
        />
        <button className="submit" onClick={() => onSubmit()}>
          Search
        </button>
      </form>
      {filterValue?.length != 0 && searchValue !== "" && (
        <div
          className=" movieShow"
          style={{
            display: searchValue == "" ? "none" : "block",
          }}
        >
          {filterValue?.map((e) => {
            return (
              <p
                style={{ cursor: "pointer" }}
                onClick={() => onTrigger(e.title)}
                key={e.title}
              >
                {e.title}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Search;
