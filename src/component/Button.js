import React, { Component } from 'react'
import styles from './Button.module.css'
export default class Button extends Component {
    render() {
        console.log("In VButton",this.props)
        return (
            <div >
            <button className={this.props.color==="white"?styles.button:styles.buttonWithBlackColor} >{this.props.children}</button> </div>
        )
    }
}
