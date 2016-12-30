import React from 'react';
import {getFunName} from '../helpers';
class StorePicker extends React.Component {
  constructor(props) {
    super(props);
    this.goToStore = this.goToStore.bind(this);
  }
  goToStore(event) {
    // first grab the text from the box
    // transition from/to the store/:storeid
    event.preventDefault();
    console.log(this.storeInput);
    console.log('hello');
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {
          this.storeInput = input
        }}/>
        <button type="submit">Visit Store</button>
      </form>
    );
  }

}

export default StorePicker;
