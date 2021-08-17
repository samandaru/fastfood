
import React, { Component } from 'react'
import {data} from './mock'
import Order from './order';
import './style.css'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: [],
      total: 0,
     
    }
  }
  render() {
    const onSelect = (value) => {
      const selected = [...this.state.selected, {id: this.state.selected.length + 1}];
      this.setState({selected  });
     selected.forEach((value)=>
     this.setState({total: this.state.total + value.price})
     );
    };
     const onDelete =(id)=>{
       const selected = this.state.selected.filter((value)=>{
         value.id === id &&this.setState({total: this.state.total - value.price})
         return value.id !== id
       });
       this.setState({selected});
     
    }
    return (
      <div className="wrapper">
        <div className="menu">
          {data.map((value)=>{
            return(
              <div className="category">
                <h1 className='title'>{value.category}</h1>
                <div className="submenu">
                  {
                    value.lists.map(item=>(
                      <div onClick={()=>onSelect(item)}className="item">
                        <img src={item.src} alt="" />
                        <h1>{item.title}</h1>
                        <h2 className='price'>{item.price}sum</h2>
                      </div>  
                    ))
                  }
                </div>
              </div>
             
            )
          })}
          </div>
       <Order onDelete ={(id)=>onDelete(id)} data={this.state}/>
      </div>
    )
  }
}
