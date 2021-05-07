import React, { useState, useEffect } from "react";
import JobList from "./components/JobList";
import data from "./data.json";

import "./css/main.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  function handleChange(e) {
    if (filters.includes(e)) return;
    setFilters([...filters, e]);
  }

  function handleClick(e) {
    const newArr = [...filters];
    const index = newArr.indexOf(e.target.id);
    newArr.splice(index, 1);
    setFilters([...newArr]);
  }

  function clearFilter() {
    setFilters([]);
  }

  return (
    <div className="App">
      <header></header>
      <div className="container">
        {filters.length !== 0 && (
          <div className="filter-container">
            <div className="filters">
              {filters.map((filter, index) => {
                return (
                  <div className="filter-item" key={index}>
                    <div className="category">{filter}</div>
                    <div
                      className="filter-remove"
                      id={filter}
                      onClick={handleClick}
                    >
                      <img
                        src="./images/icon-remove.svg"
                        alt="close"
                        id={filter}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="clear" onClick={clearFilter}>
              Clear
            </p>
          </div>
        )}
      </div>
      <div className="container">
        <div className="job-lists">
          {jobs.map((job) => (
            <JobList
              job={job}
              key={job.id}
              onChange={handleChange}
              filters={filters}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
