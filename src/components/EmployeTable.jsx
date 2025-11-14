const EmployeTable = ({users}) => {
    return(
        <table className="employee-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                     <th>Gender</th>
                    <th>Company</th>
                </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.firstName} {user.lastName}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>{user.company?.name}</td>
                </tr>
              ))}
            </tbody>
        </table>
     );
};

export default EmployeTable;
