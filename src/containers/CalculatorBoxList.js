import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CalculatorBoxListForm } from '../components'
import { numericString } from 'airbnb-prop-types'

class CalculatorBoxList extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                currency: numericString().isRequired
            }).isRequired
        }).isRequired,
        history: PropTypes.shape({
            goBack: PropTypes.func.isRequired
        }).isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            currency: 0.0,
            cents_25: '',
            cents_10: '',
            cents_05: '',
            cents_01: '',
            Dollar_1: '',
            Dollar_5: '',
            Dollar_10: '',
            Dollar_20: '',
            Dollar_50: '',
            Dollar_100: ''
        };
    }
    componentDidMount() {
        this.calculator()
    }
    componentDidUpdate(prevProps) {
        const { match } = this.props
        const { match: prevMatch } = prevProps
        if (match.params.currency !== prevMatch.params.currency) {
            this.calculator()
        }
    }
    calculator() {
        const { currency } = this.props.match.params
        let total = 0;
        total = currency
        let integer = Math.floor(total)
        let decimal = (total - integer).toFixed(2)

        const dollar = this.getDollarCalculator(integer)
        const censt = this.getCentCalculator(decimal)

        this.setState({
            Dollar_100: dollar.dollar_100,
            Dollar_50: dollar.dollar_50,
            Dollar_20: dollar.dollar_20,
            Dollar_10: dollar.dollar_10,
            Dollar_5: dollar.dollar_5,
            Dollar_1: dollar.dollar_1,
            cents_25: censt.cents_25,
            cents_10: censt.cents_10,
            cents_05: censt.cents_05,
            cents_01: censt.cents_01
        })
    }

    getDollarCalculator(integerCurrency) {
        let dollar = 0;
        let dollar_100 = 0;
        let dollar_50 = 0;
        let dollar_20 = 0;
        let dollar_10 = 0;
        let dollar_5 = 0;
        let dollar_1 = 0;

        dollar = integerCurrency
        if (dollar >= 100) {
            dollar_100 = this.getDataDollarCalculator(100, dollar).bill
            dollar = this.getDataDollarCalculator(100, dollar).withdraw

        }
        if (dollar >= 50 && dollar < 100) {

            dollar_50 = this.getDataDollarCalculator(50, dollar).bill
            dollar = this.getDataDollarCalculator(50, dollar).withdraw

        }
        if (dollar >= 20 && dollar < 50) {
            dollar_20 = this.getDataDollarCalculator(20, dollar).bill
            dollar = this.getDataDollarCalculator(20, dollar).withdraw

        }
        if (dollar >= 10 && dollar < 20) {
            dollar_10 = this.getDataDollarCalculator(10, dollar).bill
            dollar = this.getDataDollarCalculator(10, dollar).withdraw

        }
        if (dollar >= 5 && dollar < 10) {
            dollar_5 = this.getDataDollarCalculator(5, dollar).bill
            dollar = this.getDataDollarCalculator(5, dollar).withdraw

        }
        if (dollar >= 1 && dollar < 5) {
            dollar_1 = this.getDataDollarCalculator(1, dollar).bill
            dollar = this.getDataDollarCalculator(1, dollar).withdraw

        }
        return {
            dollar_100,
            dollar_50,
            dollar_20,
            dollar_10,
            dollar_5,
            dollar_1
        }
    }
    getDataDollarCalculator(dollarBill, dollar) {
        let bill = Math.floor(dollar / dollarBill)
        let withdraw = dollar - (bill * dollarBill)
        return {
            bill,
            withdraw
        }
    }
    getCentCalculator(decimalCurrency) {
        let cents = 0;
        let cents_25 = 0;
        let cents_10 = 0;
        let cents_05 = 0;
        let cents_01 = 0;
        cents = decimalCurrency
        if (cents >= 0.25 && cents < 1) {
            cents_25 = this.getDataCentCalculator(0.25, cents).bill
            cents = this.getDataCentCalculator(0.25, cents).withdraw
        }
        if (cents >= 0.10 && cents < 0.25) {
            cents_10 = this.getDataCentCalculator(0.10, cents).bill
            cents = this.getDataCentCalculator(0.10, cents).withdraw.toFixed(2)
        }
        if (cents >= 0.05 && cents < 0.10) {
            cents_05 = this.getDataCentCalculator(0.05, cents).bill
            cents = this.getDataCentCalculator(0.05, cents).withdraw
        }
        if (cents >= 0.01 && cents < 0.05) {
            cents_01 = this.getDataCentCalculator(0.01, cents).bill
            cents = this.getDataCentCalculator(0.01, cents).withdraw
        }
        return {
            cents_25,
            cents_10,
            cents_05,
            cents_01
        }
    }
    getDataCentCalculator(centBill, cent) {
        let bill = Math.floor(cent / centBill)
        let withdraw = cent - (bill * centBill)
        return {
            bill,
            withdraw
        }
    }

    render() {
        return (
            <div>
                <CalculatorBoxListForm   {...this.state} />
            </div>
        )
    }
}

export default CalculatorBoxList