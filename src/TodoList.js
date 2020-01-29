import React, { Component, Fragment } from 'react';
import './style.css';

class TodoList extends Component {
    //constructor 在组件创建的第一个时刻自动执行
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this); //节省性能
        this.handleKeyUp = this.handleKeyUp.bind(this);
        //组件的数据都必须放在this.state里面，在组件中创建了两个数据
        this.state = {
            inputValue: '',
            list: []
        }  
    }
    handleInputChange(e){
        //e是事件对象
        console.log(e.target.value);
        // this.state.inputValue = e.target.value; react中不可以直接改
        this.setState({
            inputValue: e.target.value
        })
    }
    handleKeyUp(e) {
        if(e.keyCode === 13 && e.target.value !== ''){
            const list = [...this.state.list, this.state.inputValue];
            this.setState({
                list,  //键值一样的时候直接简写
                inputValue: ''
            })
        }
    }
    handleItemClick(index){
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list
        })
    }
    getListItems() {
        // 循环中必须要有key
        return this.state.list.map((value, index) => {
            return (<li key={index} onClick={this.handleItemClick.bind(this, index)}
             dangerouslySetInnerHTML={{__html: value}}
            >
                {/* {value} */}
                </li>)
        })
    }
    render() {
        return (
            <Fragment>
                <label htmlFor="myinput">请输入内容：</label>
                {/* 将函数的this变更成指向这个组件
                    变量一定要用{}
                */}
                <input 
                  id='myinput'
                  className="input"
                  value={this.state.inputValue}
                  onChange={this.handleInputChange}
                  onKeyUp={this.handleKeyUp}
                  />
                <ul>
                   { this.getListItems() }
                </ul>
            </Fragment>
        );
    }
}

export default TodoList;
