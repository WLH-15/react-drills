import React from 'react'

class Login extends React.Component {
    constructor(){
        super()
        this.state={
            userName: '',
            userInput: '',
            passWord: '',
            passInput: ''
        }
    }
    changeUserName(val){
        this.setState({userName: val})
    }
    changePassWord(val){
        this.setState({passWord: val})
    }
    pageAlert = () => {
             alert(`Username: ${this.state.userName} Password: ${this.state.passWord}`)
    }
    render(){
        console.log(this.state.userName)
        console.log(this.state.passWord)
        return(

            <div>
                <input placeholder='Username' 
                onChange={(e)=> this.changeUserName(e.target.value)} />
                <input placeholder='Password' 
                onChange={(e)=> this.changePassWord(e.target.value)} />
                <button onClick={this.pageAlert} >Login</button>
            </div>
        )
    }
}
export default Login