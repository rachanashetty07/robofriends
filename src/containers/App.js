import React from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends React.Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots:users}))
    }

    OnSearchChange=(event)=>{
        this.setState({searchfield:event.target.value})
    }
      
     render()
     {
         const filteredrobots=this.state.robots.filter(robots=>{
             return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
         })
         if(this.state.robots.length===0){
            return <h1>Loading</h1>
         }
        else{
            return( <div className='tc'>
                <h1 className='f1'>Robo Friends</h1>
                <Searchbox searchChange={this.OnSearchChange}/>
                <Scroll>
                <CardList robots={filteredrobots}/>
                </Scroll>
                
    
        </div>)
        }
        
    }
}
   
export default App;