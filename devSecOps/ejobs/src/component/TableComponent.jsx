import React from "react";

function TableComponent({ title, value }) {
  return (
    <tr>
      <td colSpan="2">{title}</td>
      <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
        <input checked={true} type="checkbox" value="Fair" />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
        <input type="checkbox" value="Fair" />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
        <input type="checkbox" value="Fair" />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
        <input type="checkbox" value="Fair" />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
        <input type="checkbox" value="Fair" />
      </td>
    </tr>
  );
}

export default TableComponent;
