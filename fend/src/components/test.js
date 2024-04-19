import React , {render} from "react";



class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        };
    }
    incrementCount = () => {
        // this.setState(() => {
        //     return {
        //         ...this.state,count:this.state.count+1
        //     }
        // });
        this.setState({
            ...this.state,count:this.state.count + 1
        });
    }
    render(){
        const  { count } = this.state;
        return (
            <>
                {/* <h1 onClick={() => this.incrementCount()}>TEST {count}</h1> */}
                <h1 onClick={this.incrementCount}>TEST {count}</h1>
            </>
        )
    }
    
}




export default Test;