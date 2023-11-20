import { RowHeadIcon, Redirect, Circle } from "../Icons"
import "./index.css"

const renderTableCell = (columnName, rowData, searchQuery) => {
  const normalizeString = (str) => str.toString().toLowerCase();

  const highlightSearchTerm = (text, query) => {
    const normalizedText = normalizeString(text);
    const startIndex = normalizedText.indexOf(normalizeString(query));

    if (startIndex !== -1) {
      const beforeHighlight = text.substring(0, startIndex);
      const highlighted = text.substring(startIndex, startIndex + query.length);
      const afterHighlight = text.substring(startIndex + query.length);

      return (
        <span>
          {beforeHighlight}
          <span className="highlighted">{highlighted}</span>
          {afterHighlight}
        </span>
      );
    }

    return text;
  };

  switch (columnName) {
    case "User":
      const userName = rowData[columnName]?.name || "";
      const userEmail = rowData[columnName]?.email || "";
      const highlightedName = highlightSearchTerm(userName, searchQuery);
      const highlightedEmail = highlightSearchTerm(userEmail, searchQuery);

      return (
        <div className="user-section">
          <div className="user-name-email">
            <span className="user-name">{highlightedName}</span>
            <span className="user-email">{highlightedEmail}</span>
          </div>
          <Redirect />
        </div>
      );

    case "Action taken by":
      return (
        <div className="user-section">
          <div className="user-name-email">
            <span className="user-name">
              {highlightSearchTerm(rowData[columnName].name, searchQuery)}
            </span>
            <span className="user-email">
              {highlightSearchTerm(rowData[columnName].email, searchQuery)}
            </span>
          </div>
        </div>
      );

    case "Risk level":
      let color = "#88670F";
      if (rowData[columnName] === "Low") {
        color = "#006540";
      }
      return (
        <span className="risk-level">
          <Circle color={color} />
          {highlightSearchTerm(rowData[columnName], searchQuery)}
        </span>
      );
    case "Date added on":
      return (
        <span className="date-added-on">
          {highlightSearchTerm(rowData[columnName], searchQuery)}
        </span>
      );
    case "Previously reviewed":
      return (
        <div className="previously-reviewed">
          <span className="previously-reviewed-choice">
            {highlightSearchTerm(rowData[columnName].choice, searchQuery)}
          </span>
          <span className="previously-reviewed-date">
            {highlightSearchTerm(rowData[columnName].date, searchQuery)}
          </span>
        </div>
      );
    default:
      return (
        <span className="default-row">
          {highlightSearchTerm(rowData[columnName], searchQuery)}
        </span>
      );
  }
};

const Table = ({
  headings,
  data,
  searchQuery,
  triggerReasonFilter,
  riskLevelFilter,
}) => {
  const filteredData = data.filter((row) =>
    headings.some((heading) => {
      const cellValue = row[heading];
      const normalizedSearchQuery = searchQuery.toLowerCase();

      // Extract values if cellValue is an object, otherwise convert to string
      const valuesToCompare =
        typeof cellValue === "object" && cellValue !== null
          ? Object.values(cellValue).map((value) => String(value).toLowerCase())
          : [String(cellValue).toLowerCase()];

      // Used spread operator to handle multiple values for comparison
      return valuesToCompare.some((value) =>
        value.includes(normalizedSearchQuery)
      );
    })
  );

  return (
    <table className="table-container">
      <thead>
        <tr className="table-header-row">
          {headings.map((heading, index) => (
            <th className="table-head" key={index}>
              <div className="row-head-icon">
                <div>{heading}</div>
                <div>
                  {heading === "Risk level" && <RowHeadIcon />}
                  {heading === "In queue for" && <RowHeadIcon />}
                  {heading === "Date added on" && <RowHeadIcon />}
                </div>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headings.map((heading, colIndex) => (
              <td key={colIndex}>
                {renderTableCell(heading, row, searchQuery)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
