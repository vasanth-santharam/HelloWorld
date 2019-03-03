import React from 'react';
import  {withRouter} from 'react-router-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';
class Contact extends React.Component {
   constructor(props) {
      super(props);
      this.state = {items: ['hello', 'world', 'click', 'me']};
      this.handleAdd = this.handleAdd.bind(this);
    }
  
    handleAdd() {
      const newItems = this.state.items.concat([
        prompt('Enter some text')
      ]);
      this.setState({items: newItems});
    }
  
    handleRemove(i) {
      let newItems = this.state.items.slice();
      newItems.splice(i, 1);
      this.setState({items: newItems});
    }   
    render() {
      const items = this.state.items.map((item, i) => (
         <div key={item} onClick={() => this.handleRemove(i)}>
           {item}
         </div>
       ));       
       return (
          <div>
             <h1>Contact...</h1>
             <CSSTransitionGroup transitionName="example"
          transitionEnterTimeout={1800}
          transitionLeaveTimeout={1400}>{items}</CSSTransitionGroup>
          </div>
       )
    }
 }
 export default withRouter(Contact);