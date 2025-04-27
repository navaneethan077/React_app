// src/components/CourseList.jsx
import { useState } from 'react';
import Course from './Course';
import useFetch from '../../useFetch'; // adjust path if needed

function CourseList() {
  const { data: courses, error, loading } = useFetch('http://localhost:3000/courses');
  const [show, setShow] = useState(true);
  const [courseList, setCourseList] = useState(null);

  // Update course list locally when data is fetched
  if (courses && !courseList) {
    setCourseList(courses);
  }

  function handleDelete(id) {
    console.log('Deleting course:', id);
    setCourseList((prevCourses) => prevCourses.filter((course) => course.id !== id));
  }

  if (loading) {
    return (
      <div className="text-center mt-5">
        <img src="/loading.gif" alt="Loading..." />
        <h4 className="mt-3">Loading courses...</h4>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setShow((prevShow) => !prevShow)}
        className="btn btn-info mb-3"
      >
        {show ? 'Hide Courses' : 'Show Courses'}
      </button>

      {show && (
        <div className="row">
          {courseList && courseList.length > 0 ? (
            courseList.map((course) => (
              <Course
                key={course.id}
                id={course.id}
                name={course.name}
                price={course.price}
                img={course.img}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <p>No courses available.</p>
          )}
        </div>
      )}
    </>
  );
}

export default CourseList;
