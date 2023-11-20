import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CloseAccount from "../CloseAccount"
import { TabData, TabHeadings } from "../../UsersData/data"
import Table from "../Tables"
import "./index.css";
import  "../../App.css"
import { OrderBy, SearchIcon } from "../Icons"

// Define tabs data
const tabs = [
  { id: "tab1", label: "Pending" },
  { id: "tab2", label: "Completed" },
];

// Content component
function Content() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [triggerReasonFilter, setTriggerReasonFilter] = useState("");
  const [riskLevelFilter, setRiskLevelFilter] = useState("");

  // Handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Open modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Handle search query change
  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container">
      {/* Page heading */}
      <div className="page-heading">
        <span className="heading">Monitoring</span>
      </div>

      {/* Tab switch */}
      <div className="tab-switch">
        {/* Map through tabs and render buttons */}
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

        {/* Close account button */}
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

      {/* Filtering section */}
      <div className="filtering">
        {/* Search bar */}
        <div className="search-bar">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            name="search"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>

        {/* Filter buttons */}
        <div className="filter">
          <div className="select-container">
            <select
              value={triggerReasonFilter}
              onChange={(e) => setSearchQuery(e.target.value)}
            >
              <option value="">Trigger Reasons</option>
              <OrderBy />
              <option value="IP Change">IP Change</option>
              <option value="FIFO">FIFO</option>
            </select>
          </div>

          <div className="select-container">
            <select
              value={riskLevelFilter}
              onChange={(e) => setSearchQuery(e.target.value)}
            >
              <option value="">Risk Levels </option>
              <OrderBy />
              <option value="LOW">LOW</option>
              <option value="MEDIUM">MEDIUM</option>
              <option value="HIGH">HIGH</option>
            </select>
          </div>
        </div>
      </div>

      <div className="table-container">
        <Table
          headings={TabHeadings[activeTab]}
          data={TabData[activeTab]}
          searchQuery={searchQuery}
          triggerReasonFilter={triggerReasonFilter}
          riskLevelFilter={riskLevelFilter}
        />
      </div>
    </div>
  );
}

export default Content;
