import React from "react";
import { Link } from "react-router-dom";
export const bookList = [
  {
    id: 0,
    src: "https://m.media-amazon.com/images/I/71oZ45OrLjL._SY342_.jpg",
    name: "JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages"

  },
  {
    id: 1,
    src: "https://uploads.sitepoint.com/wp-content/uploads/2017/03/1488480428eloquent-js.jpg",
    name: "Eloquent Javascript"

  },
  {
    id: 2,
    src: "https://exploringjs.com/impatient-js/img-homepage/cover-homepage.jpg",
    name: "Javascript for Impatient Programmers"

  },

]

console.log(bookList);
export default function BookList() {
  return (
    <div>
      <ul>
        {bookList.map((element, idx) => {
          return (

            <li key={idx}>
              <Link to={`${element.id}`}>{element.name}</Link>
            </li>

          )
        })}
      </ul>
    </div>
  );
}
