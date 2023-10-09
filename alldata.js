function AllData(){
  const ctx = React.useContext(UserContext);
  console.log(ctx);

  const allUsers = ctx.users.reduce((acc, user) => {
      acc.push({ name: user.name, email: user.email, password: user.password });
      return acc;
    }, []);

return (
  <div className="page-content page-container" id="page-content">
    <div className="padding">
      <div className="row container d-flex justify-content-left">
        <div className="col-lg-8 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">

              <h4 className="card-title">ALL DATA</h4>
              <p className="card-description">All accounts are listed here:</p>

              <div className="table-responsive">
                <table className="table">

                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Password</th>
                    </tr>
                  </thead>

                  <tbody>
                    {allUsers.map((user, index) => (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                    </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>           
      </div>
    </div>
  </div>
);
}
