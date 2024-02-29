import React from "react";

class MyComponent extends React.Component{

    //子类继承父类
    constructor(props){
        super(props);
        //state: inner component data
        this.state = {
            flag: true,
            names: ['apple','banana','candle']

        }
    }
    clickHandle(){
        //change flag's value
        this.setState({
            flag: !this.state.flag
        })
    }
    render(){
        //It's too troublesome to write like this every time 'this.state.something'.
        // return(
        //     <div>
        //         MyComponent: {this.state.flag ? 'true': 'false'}
        //         <ul>
        //             {
        //                 this.state.names.map((ele,index) =>{
        //                     return <li key= {index.toString()}>
        //                         {ele}
        //                     </li>
        //                 })
        //             }
        //         </ul>
        //     </div>
        // )
        //create a method: destructuring assignment,compare two difference
        const {flag,names} = this.state;
        return(
            <div>
                {/** question what's mean bind? */}
                <button onClick={this.clickHandle.bind(this)}>change flag</button>
                MyComponent: {flag ? 'true': 'false'}
                <ul>
                    {
                        names.map((ele,index) =>{
                            return <li key= {index.toString()}>
                                {ele}
                            </li>
                        })
                    }
                </ul>
            </div>
        )

        
    }
}

export default MyComponent;