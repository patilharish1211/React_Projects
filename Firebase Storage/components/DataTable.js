import DataRow from "./DataRow";

const DataTable = ({ data, updateData, deleteData }) => {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>SR.</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>City</th>
          <th>Pincode</th>
          <th>State</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <DataRow
            key={index}
            item={item}
            updateData={updateData}
            deleteData={deleteData}
            serialNumber={index + 1}
          />
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
