import React from "react";
import { useSelector } from "react-redux";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Teachers() {
  const teachers = useSelector((state) => state.teachers.teachers);
  return (
    <div>
      <div className="header text-center m-3 w-100">
        <h3>ÖĞRETİM GÖREVLİLERİ</h3>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {teachers.map((teacher, index) => {
          return (
            <div class="col" key={index}>
              <div class="card h-100">
                <img src={teacher.imageUrl} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">
                  <Link className="text-decoration-none"  to={`/teachers/${teacher.id}`}>{teacher.firstName} {teacher.lastName}</Link>
                  </h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <p>
                    <b>
                      <FontAwesomeIcon icon={faStar} /> {teacher.point}
                    </b>
                  </p>
                  <p>
                    <b>
                      <FontAwesomeIcon icon={faUser} /> {teacher.totelStudent}{" "}
                      öğrenci
                    </b>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
