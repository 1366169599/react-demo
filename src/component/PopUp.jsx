import React, { Component } from 'react';
import { Button } from 'zent';
import './PopUp.less'
class PopUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showPop: true
        }
    }
    closePop = () => {
        this.setState({
            showPop: false
        })
    }
    render() {
        return (
            <div>
                {this.state.showPop ? <div className="container">
                    <div className="title-bar">
                        <span>标题</span>
                        <span className="close" onClick={this.closePop}>X</span>
                    </div>
                </div> : ""}


            </div>
        )

    }
}
export default PopUp