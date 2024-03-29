import { useState } from "react";
import Banner from "./Banner";
import CourseSelect from "./CourseSelect";

const terms = {
  Fall: "Fall",
  Winter: "Winter",
  Spring: "Spring",
};

const MenuButton = ({ term, selection, setSelection }) => (
  <div>
    <input
      type="radio"
      id={term}
      className="btn-check"
      checked={term === selection}
      autoComplete="off"
      onChange={() => setSelection(term)}
    />
    <label className="btn btn-success mb-1 p-2" htmlFor={term} data-cy={term}>
      {term}
    </label>
  </div>
);

const TermSelector = ({ selection, setSelection }) => (
  <div className="btn-group">
    {Object.keys(terms).map((term) => (
      <MenuButton
        key={term}
        term={term}
        selection={selection}
        setSelection={setSelection}
      />
    ))}
  </div>
);

const Courses = ({ selection, courses }) => (
  <div>
    {/* 1. Filter JSON to term we want 2. Pass filtered term into CourseList to be displayed */}
    <CourseSelect
      courses={Object.values(courses).filter(
        (course) => course.term === terms[selection]
      )}
      biglist={Object.values(courses)}
    />
  </div>
);

const TermPage = ({ title, courses }) => {
  const [selection, setSelection] = useState(() => Object.keys(terms)[0]);
  return (
    <div>
      <Banner title={title} />
      <TermSelector selection={selection} setSelection={setSelection} />
      <Courses selection={selection} courses={courses} />
    </div>
  );
};

export default TermPage;
