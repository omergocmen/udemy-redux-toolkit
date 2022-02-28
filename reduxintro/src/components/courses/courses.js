import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";



export default function Courses() {
  const courses = useSelector((state) => state.courses.courses);
  const teachers=useSelector(state=>state.teachers.teachers)
  return (
    <div >
      <div className="header text-center m-3 w-100">
        <h2>KURSLAR</h2>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {courses.map((course) => {
            return (
            <div class="col" key={course.id}>
                <div class="card" style={{height:"100%"}}>
                  <img src={course.courseImageUrl} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{course.courseName}</h5>
                    <p class="card-text">
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </p>
                    {teachers.map(teacher=>{
                      if(teacher.id===course.courseTeacherId)
                      {
                        return (
                          <Link className="d-block text-decoration-none"  to={`/teachers/${teacher.id}`}>{teacher.firstName} {teacher.lastName}</Link>
                        )
                      }
                    })}
                    <b class="card-title">{course.categoryName}</b>
                    <p class="card-title"><FontAwesomeIcon icon={faStar} /> {course.coursePoint}</p>
                  </div>
                </div>
              </div>
            )
        })}
      </div>
    </div>
  );
}
