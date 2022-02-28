import React from "react";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Teacher() {
  const teachers = useSelector((state) => state.teachers.teachers);
  const courses = useSelector((state) => state.courses.courses);
  const params = useParams();
  const req = JSON.parse(JSON.stringify(params));

  return (
    <div style={{ backgroundColor: "#F8F9FA" }}>
      {teachers.map((teacher) => {
        if (teacher.id.toString() === req.id) {
          return (
            <div
              class="m-auto border-none text-center "
              style={{ width: "80%" }}
            >
              <img style={{width:"18rem"}}
                src={teacher.imageUrl}
                class="card-img-top mt-4 rounded-circle "
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  <b>
                    {teacher.firstName} {teacher.lastName}{" "}
                    <FontAwesomeIcon icon={faStar} /> {teacher.point}
                  </b>
                </h5>
                <b>
                  <FontAwesomeIcon icon={faUser} /> {teacher.totelStudent}{" "}
                  öğrenci
                </b>
              </div>
              <div className="text-center  m-auto" style={{ width: "70%" }}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <h4>KURSLAR</h4>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {courses.map((course) => {
                  if (course.courseTeacherId === teacher.id) {
                    return (
                      <div class="col p-3" key={course.id}>
                        <div class="card" style={{ height: "100%" }}>
                          <img
                            src={course.courseImageUrl}
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body">
                            <h5 class="card-title">{course.courseName}</h5>
                            <p class="card-text">
                              This is a longer card with supporting text below
                              as a natural lead-in to additional content. This
                              content is a little bit longer.
                            </p>
                            <b class="card-title">{course.categoryName}</b>
                            <p class="card-title">
                              <FontAwesomeIcon icon={faStar} />{" "}
                              {course.coursePoint}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
