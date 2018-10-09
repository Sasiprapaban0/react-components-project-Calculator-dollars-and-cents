import React, { Component } from 'react'
import { CalculatorBoxForm } from '../components'
import { withRouter } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class CalculatorBoxContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: "",
            modal: false
        };
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    onSearch = (keyword) => {
        const { history } = this.props
        const currency = keyword.currency
        if (currency === 0 || currency === "" || !parseFloat(currency) ) {
            this.toggle()
            history.push('/')
        }
        else {
            history.push(`/calculator/${currency}`)
        }
    }

    render() {

        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Warning message</ModalHeader>
                    <ModalBody>
                        Please input currency for the calculator.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <CalculatorBoxForm
                    {...this.state}
                    onSubmit={this.onSearch} />
            </div>
        )
    }
}
export default withRouter(CalculatorBoxContainer)