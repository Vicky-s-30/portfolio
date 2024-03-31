import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

function Github() {
  const [duration, setDuration] = useState("");

  // Function to calculate the duration in years, months, and days
  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
      months--;
      days += new Date(end.getFullYear(), end.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    let durationString = "";
    if (years > 0) {
      durationString += years + " year" + (years > 1 ? "s" : "") + " ";
    }
    if (months > 0) {
      durationString += months + " month" + (months > 1 ? "s" : "") + " ";
    }
    if (days > 0) {
      durationString += days + " day" + (days > 1 ? "s" : "");
    }

    return durationString.trim();
  };

  // Function to get the current date
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    // Your start date - adjust as needed
    const startDate = "2023-02-10";
    const currentDate = getCurrentDate();
    const duration = calculateDuration(startDate, currentDate);
    setDuration(duration);
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "10px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <iframe src="https://lottie.host/embed/0076838b-d2b8-4f60-96e5-0bea444b07c9/oeyUWAGhyI.json"></iframe><h2>{` ${duration}`}</h2>
    </Row>
  );
}

export default Github;