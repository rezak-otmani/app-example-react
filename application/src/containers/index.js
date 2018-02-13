mport React from 'react';
import { connect } from 'react-redux';

export class Index extends React.Component {
  render() {
    
    return (
      <div className="app">
       
        <div className="page">
          {this.props.children}
        </div>
      </div>
    )
  }
}

//export default connect(state => ({
//  currentUser: state.currentUser
//}))
export default (Index);
}
