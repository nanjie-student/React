import React from "react";

class Header extends React.Component{
    render(){
        const title = this.props.title;
        const data = this.props.data || [];
        return (
            <div>
            Import the first component: {title}
            <ul>
                {
                    data.map((ele,index) =>{
                        return<li key={index.toString()}>{ele} </li>
                    })
                }
            </ul>
            </div>
        )
        
    }
}

export default Header