/* eslint-disable react/prop-types */
import { useState } from "react"

const DynamicSearchFilterTest = ({ data }) => {
  const[searchText, setSearchedtext] = useState('');

  const filteredData = data.filter((item) => 
    item.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchedtext(e.target.value)}
        placeholder="Search Something..."
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DynamicSearchFilterTest