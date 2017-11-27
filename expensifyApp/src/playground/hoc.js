import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
  </div>
);

// const withAdminWarning = (WrappedComponent) => {
//   return (props) => (
//     <div>
//       {props.isAdmin && <p>THis is private Info, Please don't share.</p>}
//       <WrappedComponent {...props}/>
//     </div>
//   );
// };
//
// const AdminInfo = withAdminWarning(Info);
//
//
// ReactDOM.render(<AdminInfo isAdmin= {true} info="These are the details" />, document.getElementById("app"));

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? < WrappedComponent {...props} /> : <p>Please Login to see the info</p>}
    </div>
  );
}

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated= {true} info="These are the details" />, document.getElementById("app"));
