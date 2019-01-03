import React, { Component } from 'react';
import './chooseShop.less'
import data from './data/shopInfo.json'
import Demo from './demo/demo.jsx'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class chooseShop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shopList: data.data.user.shopList,
            hiddenPop: true,
        }
    }
    componentDidMount() {
        console.log(this.props.name)
        this.state.shopList.forEach((element) => {
            element.choosed = false
        })
    }
    closePop = () => {
        this.setState({
            hiddenPop: false
        })
    }
    choosed = (item) => {
        item.choosed = !item.choosed
        console.log(item.choosed);
    }
    chooseShops=()=>{
      let result = this.state.shopList.filter(item=>{
            return item.choosed
        })
        this.closePop()
        console.log(result);
    }
    searchShop=(event)=>{
        let value = event.target.value;
        if(value) {
        this.setState({
            shopList: data.data.user.shopList.filter(item=>{
                return item.shopName.indexOf(value)>=0
            })
        })
        } else {
            this.setState({ 
                shopList: data.data.user.shopList
            });
        }
        
    }
    render() {
        const img = require('./assets/searchblack.png');
        return (
            <div>
                {this.state.hiddenPop ? <div className="mask" ></div> : ''}
                {this.state.hiddenPop ? <div className="pop-up">
                    <div className="title-bar">
                        <span className="title">
                            这是一个标题
                    </span>
                        <span className="close" onClick={this.closePop}>X</span>
                    </div>
                    <div className="search-bar">
                        <span className="search-shop">搜索门店</span>
                        <input type="text" onInput={(event)=>{this.searchShop(event)}} />
                        <span className="search-img" >
                            <img src={img} alt="" />
                        </span>
                    </div>
                    <div className="shops">
                        {
                            
                            this.state.shopList.map((item, index) =>
                                <p className="shop" key={index}>
                                    <input type="checkbox"
                                        value={item.checked}
                                        onChange={() => this.choosed(item)} />
                                    {item.shopName}
                                </p>
                            )
                        }

                    </div>
                    <div className="buts">
                        <button className='sure' onClick={this.chooseShops}>确定</button>
                        <button className="cancle" onClick={this.closePop}>取消</button>
                    </div>
                </div>
                    : ""}
            </div>
        )
    }
}
export default chooseShop