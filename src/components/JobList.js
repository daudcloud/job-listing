import React, { useState, useEffect } from "react";
import Category from "./Category";

export default function JobList({ job, onChange, filters }) {
  const [categories, setCategories] = useState([]);
  const [match, setMatch] = useState(false);

  useEffect(() => {
    setCategories([
      ...categories,
      job.role,
      job.level,
      ...job.languages,
      ...job.tools,
    ]);
  }, []);

  useEffect(() => {
    if (filters.length !== 0) {
      for (let i = 0; i < filters.length; i++) {
        if (!categories.includes(filters[i])) {
          setMatch(false);
          return;
        }
      }
      setMatch(true);
    } else {
      setMatch(true);
    }
  }, [filters]);

  if (match) {
    return (
      <div
        className={`job-list ${job.featured ? "job-featured" : ""}`}
        key={job.id}
      >
        {/* <!-- Item Start --> */}
        <img src={job.logo} alt={job.company} />
        <div className="job-info">
          <div className="job-head">
            <span>{job.company}</span>
            {job.new && <span className="bubble">NEW!</span>}
            {job.featured && (
              <span className="bubble bubble-featured">FEATURED</span>
            )}
          </div>
          <div className="job-title">{job.position}</div>
          <div className="job-foot">
            <span>1d ago</span>
            <div className="dot" />
            <span>Full Time</span>
            <div className="dot" />
            <span>USA only</span>
          </div>
        </div>
        <div className="divider" />
        <div className="job-category">
          {categories.map((category, index) => (
            <Category
              category={category}
              job={job}
              key={index}
              onChange={onChange}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
