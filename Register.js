import React, { Component } from 'react'
import TextField  from '@mui/material/TextField'
import Button  from '@mui/material/Button'
import './Style.css'
import ReactDOM from 'react-dom/client'
import Submit from './Submit'

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            usn:"",
            email:"",
            fee:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleOnChangeName = (event) => {
        this.setState(() => ({
            name: event.target.value
        }))
    }
    handleOnChangeUSN = (event) => {
        this.setState(() => ({
            usn: event.target.value
        }))
    }
    handleOnChangeEmail = (event) => {
        this.setState(() => ({
            email: event.target.value
        }))
    }
    handleOnChangeFee = (event) => {
        this.setState(() => ({
            fee: event.target.value
        }))
    }
    handleSubmit = (e) => {
        var regx = new RegExp("[0-9]{1}RV[0-9]{2}[A-Z]{2}[0-9]{3}")
        if(this.state.name===""){
            alert("Required name")
        }
        else if(this.state.usn===""){
            alert("Required usn")
        }
        else if(regx.test(this.state.usn)===false){
            alert("enter valid usn")
        }
        else if(this.state.email===""){
            alert("Required email")
        }
        else if(this.state.fee===""){
            alert("Required fee")
        }
        else{
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(
                <React.StrictMode>
                    <Submit usn={this.state.usn} name={this.state.name} email={this.state.email} fee={this.state.fee} />
                </React.StrictMode>
            );
        }
    }
  render() {
    return (
        <>
        <div className='div'>
        <form className='form'>
            <h1>Student Registration Form</h1>
            <TextField id="standard-basic" label="Name" onChange={this.handleOnChangeName} variant="standard" />
            <TextField id="standard-basic" label="USN" onChange={this.handleOnChangeUSN} variant="standard" />
            <TextField id="standard-basic" label="Email" onChange={this.handleOnChangeEmail} variant="standard" />
            <TextField type="number" id="standard-basic" label="Fee Paid" onChange={this.handleOnChangeFee} variant="standard" />
            <Button variant="contained" onClick={this.handleSubmit}>Submit</Button>
        </form>
      </div>
        </>
      
    )
  }
}
