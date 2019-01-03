import React, { Component } from 'react';
let axios=require('axios')
class Artists extends Component{
    constructor(props){
        super(props)
        this.state={
            songs:[]
        }
    }
    componentDidMount(){
        axios({
            mothed:'get',
            url:'http://101.236.45.250:4000/artists?id=6452'
        }).then(res=>{
            this.setState({
                songs: res.data.hotSongs
            })
        })
    }
    render(){
        return(
            <div>
                {this.state.songs.map((item,index)=>{
                    return (<div className="demo" key={index}>
                        <div className="num">{index+1}</div>
                        <div className="text">{item.name}</div>
                        <div className="menu">···</div>
                    </div>)
                })}
           
            </div>
        )
    }
}

export default Artists