const coursesData = [
  {
    title: "iOS Development",
    image: "./assets/images/courses/ios-development.jpg",
    status: "რეგისტრაცია დასრულებულია",
  },
  {
    title: "React",
    image: "./assets/images/courses/react.jpg",
    status: "რეგისტრაცია დასრულებულია",
  },
  {
    title: "Intro to Python",
    image: "./assets/images/courses/intro-to-python.jpg",
    status: "რეგისტრაცია დასრულებულია",
  },
  {
    title: "Advanced Python",
    image: "./assets/images/courses/advanced-python.jpg",
    status: "რეგისტრაცია დასრულებულია",
  },
  {
    title: "Advanced Cybersecurity Course",
    image: "./assets/images/courses/advanced-cybersecurity-course.jpg",
    status: "რეგისტრაცია დასრულებულია",
  },
  {
    title: "ToT - Training of Trainers",
    image: "./assets/images/courses/training-of-trainers.jpg",
    status: "რეგისტრაცია დასრულებულია",
  },
  {
    title: "Blockchain",
    image: "./assets/images/courses/blockchain.jpg",
    status: "რეგისტრაცია დასრულებულია",
  },
  {
    title: "DevOps",
    image: "./assets/images/courses/devops.jpg",
    status: "რეგისტრაცია დასრულებულია",
  },
  {
    title: "Information Security Governance",
    image: "./assets/images/courses/information-security-governance.jpg",
    status: "რეგისტრაცია დასრულებულია",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const coursesGridContainer = document.querySelector(".coursesGridContainer");

  coursesData.forEach((course) => {
    const gridItem = document.createElement("div");
    gridItem.classList.add("gridItem");

    const img = document.createElement("img");
    img.src = course.image;
    img.alt = course.title;

    const courseDescription = document.createElement("div");
    courseDescription.classList.add("courseDescription");

    const h3 = document.createElement("h3");
    h3.textContent = course.title;

    const p = document.createElement("p");
    p.textContent = course.status;

    const div = document.createElement("div");
    const svg = document.createElement("div");
    svg.innerHTML = `<svg
    preserveAspectRatio="xMidYMid meet"
    data-bbox="1.833 2.667 13.334 10.666"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="1.833 2.667 13.334 10.666"
    height="16"
    width="17"
    data-type="color"
    role="presentation"
    aria-hidden="true"
  >
    <g>
      <path
        fill="#00aeef"
        d="m10.3 2.867 4.667 4.666a.645.645 0 0 1 0 .934L10.3 13.133a.644.644 0 0 1-.933 0 .644.644 0 0 1 0-.933L12.9 8.667H2.5c-.4 0-.667-.267-.667-.667s.267-.667.667-.667h10.4L9.367 3.8a.605.605 0 0 1-.2-.467c0-.2.066-.333.2-.466a.644.644 0 0 1 .933 0Z"
        data-color="1"
      ></path>
    </g>
  </svg>`;

    const a = document.createElement("a");
    a.href = "#";
    a.textContent = "კურსის დეტალები";

    div.appendChild(svg);
    div.appendChild(a);

    courseDescription.appendChild(h3);
    courseDescription.appendChild(p);
    courseDescription.appendChild(div);

    gridItem.appendChild(img);
    gridItem.appendChild(courseDescription);

    coursesGridContainer.appendChild(gridItem);
  });
});
