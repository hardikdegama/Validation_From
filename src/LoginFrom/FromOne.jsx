import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FromDesign.css";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const allData = { username, email, date, phoneNumber, selectedValue };
    localStorage.setItem("AllData", JSON.stringify(allData));
    alert("Data saved to localStorage!");
    navigate("/DataShowPage");
  };

  return (
    <div>
      <h1>This Is A Simple Form</h1>
      <form className="formdesign" onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Select Option:</label>
          <select
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            required
          >
            <option value="">Select an option</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React JS">React JS</option>
          </select>
        </div>
        <div>
          <button type="submit">Save</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
