import React, { Component } from 'react';


class Summary extends Component {

    calculatePropertiesValue(data = []) {    
        return data.reduce((sum, asset) => {
            return sum + asset.PropertyValue
        }, 0);
    }
    
    calculateMortgageBalance(data = []) {
        return data.reduce((sum, asset) => {
            return sum + asset.MortgageBalance
        }, 0);
    }

    render(){
        return (
            <div className="summary">
                <div className="wrapper"><span className="summarySpan">Properties Count</span>
                    <div className="totalAmount">{this.props.data.length}</div>
                </div>
                <div className="wrapper"> <span className="summarySpan">Properties Value</span>
                    <div className="totalAmount">£{this.calculatePropertiesValue(this.props.data)}</div>
                </div>
                <div className="wrapper"><span className="summarySpan">Mortgage Balance</span>
                    <div className="totalAmount">£{this.calculateMortgageBalance(this.props.data)}</div>
                </div>
            </div>
        );
    }
   
}

export default Summary;