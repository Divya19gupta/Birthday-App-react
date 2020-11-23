import React, { Component } from 'react';
import data from './data';
import List from './List';
import './index.css';

class App extends Component{

    state={
      people:data
    }
    setToZero =()=>{
      let p = [];
      this.setState({people:[]})
    }
    render(){
      return(
        <main>
        <div className="container">
          <h3> {data.length} Birthdays today</h3>
          <List people={this.state.people}/>
          <button onClick={this.setToZero}>Clear</button>
        </div>
        </main>
      )
    }
}


// function App() {
//   const [ people , setPerson ] = useState(data);
//   return (
//     <main>
//       <section className="container">
//         <h3>{people.length} birthdays today</h3>
//         <List people={people}/>
//         <button onClick={()=>setPerson([])}>Clear All</button>
//       </section>
//     </main>
//   );
// }

export default App;
