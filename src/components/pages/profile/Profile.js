import React from "react";

export default function Profile() {
  return (
    <div>
      <div class="card-box text-center">
        <img
          src="https://bootdey.com/img/Content/avatar/avatar7.png"
          class="rounded-circle avatar-xl img-thumbnail"
          alt="profile-image"
        ></img>

        <h4 class="mb-0">Nik G. Patel</h4>
        <p class="text-muted">@webdesigner</p>

        <button
          type="button"
          class="btn btn-success btn-xs waves-effect mb-2 waves-light"
        >
          Follow
        </button>
        <button
          type="button"
          class="btn btn-danger btn-xs waves-effect mb-2 waves-light"
        >
          Message
        </button>

        <div class="text-left mt-3">
          <h4 class="font-13 text-uppercase">About Me :</h4>
          <p class="text-muted font-13 mb-3">
            Hi I'm Johnathn Deo,has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type.
          </p>
          <p class="text-muted mb-2 font-13">
            <strong>Full Name :</strong> <span class="ml-2">Nik G. Patel</span>
          </p>

          <p class="text-muted mb-2 font-13">
            <strong>Mobile :</strong>
            <span class="ml-2">(123) 123 1234</span>
          </p>

          <p class="text-muted mb-2 font-13">
            <strong>Email :</strong>{" "}
            <span class="ml-2 ">user@email.domain</span>
          </p>

          <p class="text-muted mb-1 font-13">
            <strong>Location :</strong> <span class="ml-2">USA</span>
          </p>
        </div>

        <ul class="social-list list-inline mt-3 mb-0">
          <li class="list-inline-item">
            <a
              href="javascript: void(0);"
              class="social-list-item border-purple text-purple"
            >
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              href="javascript: void(0);"
              class="social-list-item border-danger text-danger"
            >
              <i class="fab fa-google"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              href="javascript: void(0);"
              class="social-list-item border-info text-info"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              href="javascript: void(0);"
              class="social-list-item border-secondary text-secondary"
            >
              <i class="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
