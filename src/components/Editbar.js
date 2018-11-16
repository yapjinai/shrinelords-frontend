import React, { Component } from 'react'
import '../assets/css/Editbar.css'
import Itembar from './Itembar'
import Toolbar from './Toolbar'

export default class Editbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      originalItems: props.items,
      filteredItems: props.items
    }
  }

  render() {

    return (
      <div className="Editbar" onClick={this.toggle}>
        <div>
          <input
            name='filter'
            placeholder='search'
            value={this.state.query}
            onChange={this.handleChange}
          />
        </div>
        <Itembar
          items={this.state.filteredItems}
          createOffering={this.props.createOffering}
        />
        <Toolbar
          updateMouseMode={this.props.updateMouseMode}
        />
      </div>
    )
  }

  componentDidUpdate() {
    if (this.props.items !== this.state.originalItems) {
      this.setState({
        originalItems: this.props.items,
        filteredItems: this.props.items
      })
    }
  }

///////////////////////////////////////

  handleChange = (e) => {
    const newFilteredItems = this.state.originalItems.filter(i => {
      const nameWithSpaces = i.name.split('-').join(' ').toLowerCase()

      return (
        nameWithSpaces.includes(e.target.value.toLowerCase()) ||
        i.tags.includes(e.target.value.toLowerCase())
      )
    })
    this.setState({
      query: e.target.value,
      filteredItems: newFilteredItems
    })
  }
}
