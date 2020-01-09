import React from 'react'
class Todo extends React.Component{
    render(){
        return <p>{this.props.task}</p>
    }
}
export default Todo