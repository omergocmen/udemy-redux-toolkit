import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faPhotoVideo,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import MainCarousel from "../rootComponents/mainCarousel";

export default function main() {
  return (
    <div>
      <MainCarousel />
      <div className="m-5">
        <div class="row featurette">
          <div class="col-md-7 p-5">
            <h2 class="featurette-heading">
              And lastly, this one. <span class="text-muted">Checkmate.</span>
            </h2>
            <p class="lead">
              And yes, this is the last block of representative placeholder
              content. Again, not really intended to be actually read, simply
              here to give you a better view of what this would look like with
              some actual content. Your content.block of representative
              placeholder content. Again, not really intended to be actually
              read, simply here to give you a better view of what this would.
            </p>
          </div>
          <div class="col-md-5 ">
            <img
              className="rounded-circle"
              src="https://picsum.photos/500/500?random=1"
            />
          </div>
        </div>
        <div class="container px-4 py-5" id="hanging-icons">
          <h2 class="pb-2 border-bottom">Hanging icons</h2>
          <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div class="col d-flex align-items-start">
              <div>
                <FontAwesomeIcon
                  style={{ fontSize: "2rem" }}
                  icon={faComment}
                ></FontAwesomeIcon>
                <h2>Featured title</h2>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                  We'll add onto it with another sentence and probably just keep
                  going until we run out of words.
                </p>
                <a href="#" class="btn btn-primary">
                  Primary button
                </a>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <div>
                <FontAwesomeIcon
                  style={{ fontSize: "2rem" }}
                  icon={faPencil}
                ></FontAwesomeIcon>
                <h2>Featured title</h2>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                  We'll add onto it with another sentence and probably just keep
                  going until we run out of words.
                </p>
                <a href="#" class="btn btn-primary">
                  Primary button
                </a>
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <div>
                <FontAwesomeIcon
                  style={{ fontSize: "2rem" }}
                  icon={faPhotoVideo}
                ></FontAwesomeIcon>
                <h2>Featured title</h2>
                <p>
                  Paragraph of text beneath the heading to explain the heading.
                  We'll add onto it with another sentence and probably just keep
                  going until we run out of words.
                </p>
                <a href="#" class="btn btn-primary">
                  Primary button
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
