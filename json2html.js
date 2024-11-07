// json2html.js
export default function json2html(data) {
  // Start the table with the data-user attribute
  let html = '<table data-user="user@gmail.com">';

  // Add the table header
  html += '<thead><tr>';
  // Check for columns dynamically, based on the first object in the array
  if (data.length > 0) {
    Object.keys(data[0]).forEach(key => {
      html += `<th>${key}</th>`;
    });
  }
  html += '</tr></thead>';

  // Add the table body with the data rows
  html += '<tbody>';
  data.forEach(item => {
    html += '<tr>';
    Object.keys(item).forEach(key => {
      html += `<td>${item[key]}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody>';

  // Close the table tag
  html += '</table>';

  return html;
}
