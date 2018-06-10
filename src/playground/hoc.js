import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is : {props.info} </p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = WrapperComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrapperComponent {...props} />
      ) : (
        <p>Please log in to show info</p>
      )}
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);

/* ReactDOM.render(
  <AdminInfo isAdmin={false} info="these are the details" />,
  document.getElementById("app")
);
*/
ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="these are the details" />,
  document.getElementById("app")
);
