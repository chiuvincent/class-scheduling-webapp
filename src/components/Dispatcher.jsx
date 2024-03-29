import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
// import { useProfile } from "../utilities/profile";
import TermPage from "./TermPage";
import CourseEditor from "../pages/CourseEditor";

const CoursesFormForUrl = ({ courses }) => {
  const { id } = useParams();
  return <CourseEditor id={id} course={courses[id]} />;
};

const Dispatcher = ({ title, courses }) => {
  // const [{ user, isAdmin }] = useProfile();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<TermPage title={title} courses={courses} />}
        />
        <Route
          path="/courses/:id/edit"
          element={<CoursesFormForUrl courses={courses} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Dispatcher;
