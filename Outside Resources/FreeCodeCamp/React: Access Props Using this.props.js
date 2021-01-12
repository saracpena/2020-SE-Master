class ReturnTempPassword extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
              { /* Change code below this line */ }
              <p>Your temporary password is: 
              <strong>{this.props.tempPassword}</strong></p>
              { /* Change code above this line */ }
          </div>
      );
    }
  };
  
  class ResetPassword extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
            <h2>Reset Password</h2>{ /* first child */}
            <h3>We've generated a new temporary password for you.</h3>{ /* second child */}
            <h3>Please reset this password from your account settings ASAP.</h3>{ /* third child */}
            { /* Change code below this line */ }
          <ReturnTempPassword tempPassword={"12345678"} />{ /* fourth child */}
            { /* Change code above this line */ }
          </div>
      );
    }
  };