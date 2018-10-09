import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CalculatorBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: ''

        };
    }
    static propTypes = {
        currency: PropTypes.string.isRequired,
        onSubmit: PropTypes.func.isRequired
    }

    onSubmit = event => {
        event.preventDefault()
        this.props.onSubmit(this.state)
    }

    onFieldChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        const { currency } = this.state
        return (
            <div className='container' >
                <div className="row">
                    <div className="col-xs-6 col-md-2"></div>
                    <div className="col-xs-6 col-md-8">
                        <form className="form-inline ">
                            <div className="form-group mx-sm-3 mb-2">
                                <label htmlFor='searchFirstName' className="mx-sm-3 mb-2">Currency: </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='currency'
                                    name='currency'
                                    value={currency}
                                    onChange={this.onFieldChange}
                                    placeholder='Enter currency' />{' '}
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary mb-1"
                                onClick={this.onSubmit}> Calculator   </button>
                        </form>
                        <div className="col-xs-6 col-md-2"></div>
                    </div>
                  
                </div>
                <hr />
            </div>
        )
    }
}
export default CalculatorBoxForm