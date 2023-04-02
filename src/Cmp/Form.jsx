import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ show, cancel }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    show: show.name,
    id: show.id,
    day: "",
    slot: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    return setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      localStorage.setItem("user", JSON.stringify(formData));
      cancel(false);
      return navigate(`/user`);
    } catch (err) {
    
      return alert("something is missing");
    }
  };

  return (
    <form className="w-100 h-100 p-3 text-start form" onSubmit={handleSubmit}>
      <div className="mb-1">
        <label htmlFor="showName" className="col-form-label">
          Show Name :
        </label>
        <input
          type="text"
          className="form-control"
          readOnly
          value={show.name}
          required
          onClick={() => alert("you can not change show name from here!!")}
          id="showName"
        />
      </div>
      <div className="mb-1">
        <label htmlFor="showId" className="col-form-label">
          Show Id :
        </label>
        <input
          type="text"
          className="form-control"
          readOnly
          value={show.id}
          required
          onClick={() => alert("you can not change show name from here!!")}
          id="showName"
        />
      </div>
      <div className="mb-1">
        <label htmlFor="Email" className="col-form-label">
          Email :
        </label>
        <input
          type="email"
          placeholder="ABC@gmail.com"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          required
          name="email"
          id="Email"
        />
      </div>
      <div className="mb-1">
        <label htmlFor="Name" className="col-form-label">
          Your Full Name :
        </label>
        <input
          type="text"
          placeholder="Full Name"
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          id="recipient-name"
        />
      </div>
      <div className="mb-1 py-2 d-flex" style={{ gap: "5px" }}>
        <select
          class="form-select"
          name="day"
          value={formData.day}
          onChange={handleChange}
          required
          id="Day"
        >
          <option value="">---Day---</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">TuesDay</option>
        </select>
        <select
          className="form-select"
          name="slot"
          value={formData.slot}
          onChange={handleChange}
          required
          id="slot"
        >
          <option value="">---Slot---</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <center className="mb-1">
        <input
          className="btn btn-success"
          type="submit"
          readOnly
          value="Book"
        />{" "}
        &nbsp;
        <input
          className="btn btn-danger "
          style={{ width: "90px" }}
          readOnly
          onClick={() => cancel(false)}
          value="Cancel"
        />
      </center>
    </form>
  );
};

export default Form;
