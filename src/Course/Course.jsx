/* eslint-disable react/prop-types */

const Course = ({ course, handleSelectItem, handleCredit, handlePrice }) => {
    // console.log(course);
    // const {img, title, description, price, course_duration_hours} = course;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={course?.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{course?.title}</h2>
                <p>{course?.description}</p>
                <div className="flex justify-evenly items-center">
                    <p>Price: {course?.price}</p>
                    <p>Duration: {course?.course_duration_hours} Hr</p>
                </div>
                <button className="btn bg-[#2F80ED] text-white font-bold" onClick={() => {
                    handleSelectItem(course);
                    handleCredit(course.course_duration_hours);
                    handlePrice(course?.price)
                }}>
                    Select
                </button>
            </div>
        </div>
    );
};

export default Course;
