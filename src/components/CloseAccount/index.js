import React, { useState, useEffect } from "react";
import "./index.css";
import { CancelIcon } from "../Icons"

function CloseAccount({ isModalOpen, openModal, closeModal }) {
  const [formValues, setFormValues] = useState({
    email: "",
    uar: false,
    reason: "",
    note: "",
    chargeFee: false,
  });

  const [isFormReady, setIsFormReady] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  const checkFormReady = () => {
    const { email, uar, reason, note, chargeFee } = formValues;
    return (
      email !== "" &&
      (uar === "yes" || uar === "no") &&
      reason !== "" &&
      note !== "" &&
      chargeFee !== ""
    );
  };

  useEffect(() => {
    setIsFormReady(checkFormReady());
  }, [formValues]);

  return (
    <div className="close-account">
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-heading">Close Account</span>
              <button onClick={closeModal} className="modal-close-button">
                <CancelIcon />
              </button>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="modal-form">
                <div className="form-input">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="modal-options">
                  <label>Want to file UAR</label>
                  <div className="option">
                    <input
                      className="option-input"
                      type="radio"
                      name="uar"
                      id="yes"
                      value="yes"
                      onChange={handleInputChange}
                    />
                    <label>Yes</label>
                  </div>
                  <div className="option">
                    <input
                      type="radio"
                      name="uar"
                      id="no"
                      value="no"
                      onChange={handleInputChange}
                    />
                    <label>No</label>
                  </div>
                </div>
                <div className="form-input">
                  <label>Reason:</label>
                  <textarea
                    name="reason"
                    value={formValues.reason}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-input">
                  <label>Note:</label>
                  <textarea
                    name="note"
                    value={formValues.note}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="modal-footer">
                  <div className="charge-closure">
                    <input
                      type="radio"
                      name="chargeFee"
                      checked={formValues.chargeFee}
                      onChange={handleInputChange}
                    />
                    <label>Charge Closure Fee</label>
                  </div>
                  <button
                    className={`footer-close-button ${
                      isFormReady ? "ready-to-submit" : ""
                    }`}
                    type="submit"
                    disabled={!isFormReady}
                  >
                    <span className="footer-close-text">Close Account</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CloseAccount;
