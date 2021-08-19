import React, { Component } from 'react'

export default class Order extends Component {
    render() {
        return (
            <div className="order">
            <h1 className="title">Order</h1>
            {this.props.data.selected.length <= 0 && (
              <h1 className=''>Not selected</h1>
            )}
            {
              this.props.data.selected.map(value=>(
                <div className="order">
                  <h1>{value.title} - {value.price}sum 
                  <button onClick={()=>this.props.onDelete(value.selectedId)}>delete</button>
                  </h1>
                </div>
              ))
            }
            <h1 className="title">Total {this.props.data.total}sum</h1>
            <button onClick={()=>this.props.onCensel()}>censel</button>
            <button>order</button>
          </div>
        )
    }
}
