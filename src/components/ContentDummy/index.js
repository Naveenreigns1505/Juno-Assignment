import { useState } from "react";
import "./index.css";
import "../App.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CloseAccount from "../CloseAccount";
import { RowHeadIcon, Redirect, Circle } from "../Icons";

const tabs = [
  { id: "tab1", label: "Pending" },
  { id: "tab2", label: "Completed" },
];

const renderTableCell = (columnName, rowData) => {
  switch (columnName) {
    case "User":
      return (
        <div className="user-section">
          <div className="user-name-email">
            <span className="user-name">{rowData[columnName].name}</span>
            <span className="user-email">{rowData[columnName].email}</span>
          </div>
          <Redirect />
        </div>
      );

    case "Action taken by":
      return (
        <div className="user-section">
          <div className="user-name-email">
            <span className="user-name">{rowData[columnName].name}</span>
            <span className="user-email">{rowData[columnName].email}</span>
          </div>
        </div>
      );

    case "Risk level":
      return (
        <span className="risk-level">
          <Circle />
          {rowData[columnName]}
        </span>
      );
    case "Date added on":
      return <span className="date-added-on">{rowData[columnName]}</span>;
    case "Previously reviewed":
      return (
        <div className="previously-reviewed">
          <span className="previously-reviewed-choice">
            {rowData[columnName].choice}
          </span>
          <span className="previously-reviewed-date">
            {rowData[columnName].date}
          </span>
        </div>
      );
    default:
      return rowData[columnName];
  }
};

const Table = ({ headings, data }) => (
  <table className="custom-table">
    <thead>
      <tr className="table-header-row">
        {headings.map((heading, index) => (
          <th className="table-head" key={index}>
            <div className="row-head-icon">
              {heading}
              {heading === "Risk level" && <RowHeadIcon />}
              {heading === "In queue for" && <RowHeadIcon />}
              {heading === "Date added on" && <RowHeadIcon />}
            </div>
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {headings.map((heading, colIndex) => (
            <td key={colIndex}>{renderTableCell(heading, row)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

function Content() {
  const tabData = {
    tab1: [
      {
        User: { name: "Sam Altman", email: "samaltman123@gmail.com" },
        "Risk level": "Medium",
        "Trigger reason": "IP Change",
        "In queue for": "4 days",
        "Date added on": "12 Oct, 2023",
        "Previously reviewed": { choice: "Yes", date: "23 Aug, 2023" },
      },
      {
        User: { name: "Sameer Choubey", email: "sammerchoubey123@gmail.com" },
        "Risk level": "High",
        "Trigger reason": "FIFO",
        "In queue for": "4 days",
        "Date added on": "12 Oct, 2023",
        "Previously reviewed": { choice: "No", date: "" },
      },
      {
        User: { name: "Adarsh Panikar", email: "adarsh@onjuno.com" },
        "Risk level": "Low",
        "Trigger reason": "IP Change",
        "In queue for": "5 days",
        "Date added on": "12 Oct, 2023",
        "Previously reviewed": { choice: "No", date: "" },
      },
      {
        User: { name: "Pratik Shetty", email: "pratik3@gmail.com" },
        "Risk level": "High",
        "Trigger reason": "FIFO Change",
        "In queue for": "5 days",
        "Date added on": "12 Oct, 2023",
        "Previously reviewed": { choice: "Yes", date: "12 Sep, 2023" },
      },
      {
        User: { name: "Elon Musk", email: "elon@twitterceo.com" },
        "Risk level": "Low",
        "Trigger reason": "FIFO",
        "In queue for": "5 days",
        "Date added on": "12 Oct, 2023",
        "Previously reviewed": { choice: "Yes", date: "12 Sep, 2023" },
      },
      {
        User: { name: "Trina Kundu", email: "trina@onjuno.com" },
        "Risk level": "Low",
        "Trigger reason": "FIFO",
        "In queue for": "5 days",
        "Date added on": "12 Oct, 2023",
        "Previously reviewed": { choice: "Yes", date: "12 Sep, 2023" },
      },
    ],

    tab2: [
      {
        User: { name: "Sam Altman", email: "samaltman123@gmail.com" },
        "Risk level": "Medium",
        "Action reason": "Flagged",
        "Time to close": "14 days",
        "Date added on": "12 Oct, 2023",
        "Action taken by": { name: "Neil", email: "neil@onjuno.com" },
      },
      {
        User: { name: "Sameer Choubey", email: "sammerchoubey123@gmail.com" },
        "Risk level": "High",
        "Action reason": "Closed",
        "Time to close": "14 days",
        "Date added on": "12 Oct, 2023",
        "Action taken by": { name: "Pratik", email: "pratik3@onjuno.com" },
      },
      {
        User: { name: "Adarsh Panikar", email: "adarsh@onjuno.com" },
        "Risk level": "Low",
        "Action reason": "Cleared",
        "Time to close": "15 days",
        "Date added on": "12 Oct, 2023",
        "Action taken by": { name: "Prashanth", email: "prashanth@onjuno.com" },
      },
      {
        User: { name: "Pratik Shetty", email: "pratik3@gmail.com" },
        "Risk level": "High",
        "Action reason": "SOI requested",
        "Time to close": "15 days",
        "Date added on": "12 Oct, 2023",
        "Action taken by": {
          name: "Rasleen kaur",
          email: "rasleen@onjuno.com",
        },
      },
      {
        User: { name: "Elon Musk", email: "elon@twitterceo.com" },
        "Risk level": "Low",
        "Action reason": "Flagged",
        "Time to close": "15 days",
        "Date added on": "12 Oct, 2023",
        "Action taken by": {
          name: "Pratiik Shetty",
          email: "pratikc3@onjuno.com",
        },
      },
      {
        User: { name: "Trina Kundu", email: "trina@onjuno.com" },
        "Risk level": "Low",
        "Action reason": "Closed",
        "Time to close": "15 days",
        "Date added on": "12 Oct, 2023",
        "Action taken by": {
          name: "Varun Deshpande",
          email: "varun@onjuno.com",
        },
      },
    ],
  };

  const tabHeadings = {
    tab1: [
      "User",
      "Risk level",
      "Trigger reason",
      "In queue for",
      "Date added on",
      "Previously reviewed",
    ],
    tab2: [
      "User",
      "Risk level",
      "Action reason",
      "Time to close",
      "Date added on",
      "Action taken by",
    ],
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [searchQuery, setSearchQuery] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="conatiner">
      <div className="page-heading">
        <span className="heading">Monitoring</span>
      </div>
      <div className="tab-switch">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`switch-button ${activeTab === tab.id ? "active" : ""}`}
          >
            <div className="tab">
              <span className="tab-heading">{tab.label}</span>
              {activeTab === tab.id && <div className="underline"></div>}
            </div>
          </button>
        ))}
        <div className="border-bottom"></div>
        <div className="close-account">
          <button className="close-account-button" onClick={openModal}>
            <AiOutlineCloseCircle className="close-icon" />
            <span className="close-text">Close Account</span>
          </button>
        </div>
        <CloseAccount
          isModalOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
        />
      </div>
      <div className="filtering">
        <div className="search-bar">
          <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.25 3C5.3505 3 3 5.3505 3 8.25C3 11.1495 5.3505 13.5 8.25 13.5C11.1495 13.5 13.5 11.1495 13.5 8.25C13.5 5.3505 11.1495 3 8.25 3ZM1.5 8.25C1.5 4.52208 4.52208 1.5 8.25 1.5C11.9779 1.5 15 4.52208 15 8.25C15 11.9779 11.9779 15 8.25 15C4.52208 15 1.5 11.9779 1.5 8.25Z"
              fill="#ADADAD"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.9571 11.9572C12.25 11.6643 12.7249 11.6643 13.0178 11.9572L16.2803 15.2197C16.5732 15.5126 16.5732 15.9874 16.2803 16.2803C15.9874 16.5732 15.5125 16.5732 15.2196 16.2803L11.9571 13.0178C11.6642 12.7249 11.6642 12.2501 11.9571 11.9572Z"
              fill="#ADADAD"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            name="search"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>
        <div className="filter">
          <button>
            <span>Trigger reason</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.52851 5.5286C3.78886 5.26825 4.21097 5.26825 4.47132 5.5286L7.99992 9.05719L11.5285 5.5286C11.7889 5.26825 12.211 5.26825 12.4713 5.5286C12.7317 5.78895 12.7317 6.21106 12.4713 6.47141L8.47132 10.4714C8.21097 10.7318 7.78886 10.7318 7.52851 10.4714L3.52851 6.47141C3.26816 6.21106 3.26816 5.78895 3.52851 5.5286Z"
                fill="#777676"
              />
            </svg>
          </button>
          <button>
            <span>Risk level</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.52851 5.5286C3.78886 5.26825 4.21097 5.26825 4.47132 5.5286L7.99992 9.05719L11.5285 5.5286C11.7889 5.26825 12.211 5.26825 12.4713 5.5286C12.7317 5.78895 12.7317 6.21106 12.4713 6.47141L8.47132 10.4714C8.21097 10.7318 7.78886 10.7318 7.52851 10.4714L3.52851 6.47141C3.26816 6.21106 3.26816 5.78895 3.52851 5.5286Z"
                fill="#777676"
              />
            </svg>
          </button>
        </div>
        <div className="trigger-reason"></div>
        <div className="risk-level"></div>
      </div>
      <div>
        <Table headings={tabHeadings[activeTab]} data={tabData[activeTab]} />
      </div>
    </div>
  );
}

export default Content;
