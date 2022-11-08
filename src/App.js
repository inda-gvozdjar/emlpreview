import React, { Component } from 'react'
import {simpleParser} from 'mailparser'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      fileName: '',
      fileContent: ''
    }
  }
  handleFileChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    
    reader.onload = () => {
      
      this.setState({fileName: file.name, fileContent: reader.result})
      console.log(reader.result, "oooooo")
      console.log(reader, "eeeeee")
      console.log(file, "filee")
    }
    reader.onerror = () => {
      console.log(reader.error, "file error")
    }}
  
  render() {
    
    return(
      <div>
        <h1>file reader</h1>
        <input type = "file" onChange={this.handleFileChange}></input>
        <br/>
        <p>{this.state.fileName}</p>
        <p>content in html  {this.state.fileContent}</p>
        <div dangerouslySetInnerHTML={{ __html: this.state.fileContent }} />
      </div>
    )
}}
export default App