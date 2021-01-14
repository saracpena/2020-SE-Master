class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper/>
        </div>
      );
    }
  };
  
  class Camper extends React.Component {
    render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    )
    } 
  }
  //? line 24 is the same as lines 12-22
  //! const Camper = props => <p>{props.name}</p>;
  
  Camper.defaultProps = {
    name: "CamperBot"
  };
        /*sub-method*/
  Camper.propTypes = {
        /*global var*/
    name: PropTypes.string.isRequired
  };