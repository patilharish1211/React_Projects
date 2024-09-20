import { useState } from "react";

const DataRow = ({ item, updateData, deleteData, serialNumber }) => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...item });

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {  
    setEditMode(false);
    setFormData({ ...item });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    updateData(item.id, formData);
    setEditMode(false);
  };

  return (
    <tr>
      <td>{serialNumber}</td>
      <td>{editMode ? <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} /> : item.firstName}</td>
      <td>{editMode ? <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} /> : item.lastName}</td>
      <td>{editMode ? <input type="text" name="city" value={formData.city} onChange={handleChange} /> : item.city}</td>
      <td>{editMode ? <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} /> : item.pincode}</td>
      <td>{editMode ? <input type="text" name="state" value={formData.state} onChange={handleChange} /> : item.state}</td>
      <td>
        {editMode ? (
          <>
            <button className="save-btn" onClick={handleUpdate}>Save</button>
            <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <button className="edit-btn" onClick={handleEdit}>Edit</button>
            <button className="delete-btn" onClick={() => deleteData(item.id)}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default DataRow;
