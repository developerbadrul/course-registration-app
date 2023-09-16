/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Course from "../../Course/Course";

const Courses = ({handleSelectItem, handleCredit, handlePrice}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('Courses.json')
        .then(res => res.json())
        .then(courses => setCourses(courses))
    }, [])

    // console.log(courses);
    
    return (
        <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                courses.courses?.map(course => <Course key={course.id}
                course={course}
                handleSelectItem={handleSelectItem}
                handleCredit={handleCredit}
                handlePrice={handlePrice}
                ></Course>)
            }
        </div>
    );
};

export default Courses;