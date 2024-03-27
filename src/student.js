import React from "react"

class Student extends React.Component{
        render(){
            const {name, marks} = this.props;
            return(
                <>
                <h1>Hello, {name}</h1>
                <p>you have secured {marks}%</p>
                <hr/>
                </>
            )
        };
}

export default Student;