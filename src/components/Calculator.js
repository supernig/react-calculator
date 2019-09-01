import React from 'react'
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calculations: "",
            counter: 0,
            symbol: "+",
            result: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.reset = this.reset.bind(this)
    }

    handleChange(event) {
        let prev = this.state.calculations
        if (this.state.calculations.length < 1) {
            this.setState({calculations: prev + "(" + event.target.value})
        }
        else {
            if(event.target.value === "+") {
                this.setState(
                {
                        counter: this.state.counter + 1,
                        symbol: "=",
                    }
                )
                if (this.state.counter > 2) {
                    this.setState({calculations: prev + ")" + event.target.value})
                }
                else{
                    this.setState({calculations: prev + ")" + event.target.value})
                }
            }
            else if (event.target.value === "=") {
                let temp = ""
                let temp1 = ""
                let temp2 = ""
                for (let i in this.state.calculations) {
                    if (!isNaN(this.state.calculations[i])) {
                        temp += this.state.calculations[i]
                    }
                    else {
                        if(this.state.calculations[i] === "/") {
                            temp1 = (+temp1) + (+temp)
                            temp = ""
                        }
                        else if (this.state.calculations[i] === ")") {
                            temp2 = (+temp2) + (+temp)
                            temp = ""
                        }
                    }
                }
                let finalResult =  eval(((temp1  / temp2 ) * 60 ) + 40)
                this.setState(
                    {
                        result: "(" + temp1 + "/" + temp2 + ")" + " x 60 + 40" + " = "
                            + finalResult.toFixed(2)
                    }
                )
            }
            else{
                if(this.state.calculations[this.state.calculations.length-1] === "+"){
                    this.setState(
                        {
                            calculations: prev + "(" + event.target.value,
                            symbol: "+",
                            }
                        )
                }
                else{
                    this.setState({calculations: prev + event.target.value})
                }
            }
        }
    }

    reset(){
        this.setState(
            {
                calculations: "",
                counter: 0,
                result: 0
            }
        )
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <div className="bd-highlight pb- pt-1">
                            <input id="result" value={this.state.calculations} className="form-control form-control-lg result" disabled="disabled"/>

                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div className="bd-highlight pb-2 pt-1">
                            <input id="solution" value={this.state.result} className="form-control form-control-lg result" disabled="disabled"/>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center bd-highlight ">
                        <div className="number-button bd-highlight">
                            <button type="button" className="btn btn-lg btn-secondary" value="1"
                                    onClick={this.handleChange}>1
                            </button>
                        </div>
                        <div className="number-button bd-highlight">
                            <button type="button" className="btn btn-lg btn-secondary" value="2"
                                    onClick={this.handleChange}>2
                            </button>
                        </div>
                        <div className="number-button bd-highlight">
                            <button type="button" className="btn btn-lg btn-secondary" value="3"
                                    onClick={this.handleChange}>3
                            </button>
                        </div>
                    </div>
                    <div className="d-flex  justify-content-center bd-highlight">
                        <div className="number-button bd-highlight">
                            <button type="button" className="btn btn-lg btn-secondary" value="4"
                                    onClick={this.handleChange}>4
                            </button>
                        </div>
                        <div className="number-button bd-highlight">
                            <button type="button" className="btn btn-lg btn-secondary" value="5"
                                    onClick={this.handleChange}>5
                            </button>
                        </div>
                        <div className="number-button bd-highlight">
                            <button type="button" className="btn btn-lg btn-secondary" value="6"
                                    onClick={this.handleChange}>6
                            </button>
                        </div>
                    </div>
                    <div className="d-flex  justify-content-center bd-highlight">
                        <div className="number-button bd-highlight">
                            <button type="button" className="btn btn-lg btn-secondary" value="7"
                                    onClick={this.handleChange}>7
                            </button>
                        </div>
                        <div className="number-button bd-highlight">
                            <button type="button" className="btn btn-lg btn-secondary" value="8"
                                    onClick={this.handleChange}>8
                            </button>
                        </div>
                        <div className="number-button bd-highlight">
                            <button type="button" className="btn btn-lg btn-secondary" value="9"
                                    onClick={this.handleChange}>9
                            </button>
                        </div>
                    </div>
                    <div className="d-flex  justify-content-center bd-highlight">
                        <div className="number-button bd-highlight">
                            <button type="button" className="btn btn-lg btn-secondary" value="0"
                                    onClick={this.handleChange}>0
                            </button>
                        </div>
                        <div className="number-button bd-highlight">
                            <button type="button" className="btn btn-ls btn-secondary" value="/"
                                    onClick={this.handleChange}>/
                            </button>
                        </div>
                        <div className="number-button bd-highlight">
                            <button type="button" id="plus" className="btn btn-la btn-secondary" value={this.state.symbol}
                                    onClick={this.handleChange}>{this.state.symbol}
                            </button>
                        </div>
                    </div>
                    <div className="d-flex  justify-content-center bd-highlight">

                        <div className="number-button bd-highlight">
                            <button type="button" className="btn btn-lr btn-secondary"
                                    onClick={this.reset}>C</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Calculator