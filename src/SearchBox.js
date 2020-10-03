import React from "react";

export default function SearchBox({ searchChange }) {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
}

// const SearchBox = ({ searchChange }) => {
//   return (
//     <div className="pa2">
//       <input
//         className="pa3 ba b--green bg-lightest-blue"
//         type="search"
//         placeholder="search robots"
//         onChange={searchChange}
//       />
//     </div>
//   );
// };

// export default SearchBox;
