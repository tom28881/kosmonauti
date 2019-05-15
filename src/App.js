import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	cosmonaut: [{firstName: "", lastName: "", birthday: '' , superpower: ''}]
    };
  }
  
  addClick(){
    this.setState(prevState => ({ 
    	cosmonaut: [...prevState.cosmonaut, { firstName: "", lastName: "" , birthday:'', superpower: '' }]
      }
    )
  )
}


  // Vytvoření cosmonauta
  cosmoCreate(){
     return this.state.cosmonaut.map((el, i) => (
       <div className = 'input' key={i}>
    	  <input className = 'input'  placeholder="Jméno" name="firstName" value={el.firstName ||''} onChange={this.handleChange.bind(this, i)} />
          <input className = 'input'  placeholder="Přijmení"  name="lastName" value={el.lastName ||''} onChange={this.handleChange.bind(this, i)} />
          <input className = 'input' placeholder="Narození" name="birthday" value={el.birthday ||''} onChange={this.handleChange.bind(this, i)} />
          <input className = 'input' placeholder="Superschopnosti" name="superpower" value={el.superpower ||''} onChange={this.handleChange.bind(this, i)} />
          <input className = 'delete' type='button' value='Odstranění' onClick={this.removeClick.bind(this, i)}/>  
      </div>          
     )
    )
  }
  
  handleChange(i, e) {
     const { name, value } = e.target;
     let cosmonaut = [...this.state.cosmonaut];
     cosmonaut[i] = {...cosmonaut[i], [name]: value};
     this.setState({ cosmonaut });
  }
  

    //Odstranení cosmonauta
    removeClick(i){
     let cosmonaut = [...this.state.cosmonaut];
     cosmonaut.splice(i, 1);
     this.setState({ cosmonaut });
  }
  
  
  // Vykreslení
  render() {
    return (
      <div className = 'form'>
      <h1 className = 'header'>Basic elektronická evidence kosmonautů</h1>
          {this.cosmoCreate()}        
          <input className = 'button' type='button' value='Nový kosmonaut' onClick={this.addClick.bind(this)}/>
      </div>
    );
  }
}

export default App;
