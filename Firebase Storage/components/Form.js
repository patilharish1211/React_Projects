import { useState } from "react";

const Form = ({ addData }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    pincode: "",
    state: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(formData);
    setFormData({ firstName: "", lastName: "", city: "", pincode: "", state: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
      <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
      <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" required />
      <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
