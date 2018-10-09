import React from 'react'
import { Table } from 'reactstrap';
const CalculatorBoxListFormComponent = ({ Dollar_100, Dollar_50, Dollar_20, Dollar_10,
                                         Dollar_5, Dollar_1, cents_01, cents_05, cents_10, cents_25 }) => (
        <div>
            <Table hover>
                <thead>
                    <tr>
                        <th>Currency</th>
                        <th>Bill</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>$100-dollar</td>
                        <td>{Dollar_100}</td>
                    </tr>
                    <tr>
                        <td>$50 dollar</td>
                        <td>{Dollar_50}</td>
                    </tr>
                    <tr>
                        <td>$20 dollar</td>
                        <td>{Dollar_20}</td>
                    </tr>
                    <tr>
                        <td>$10 dollar</td>
                        <td>{Dollar_10}</td>
                    </tr>
                    <tr>
                        <td>$5 dollar </td>
                        <td>{Dollar_5}</td>
                    </tr>
                    <tr>
                        <td>$1 dollar</td>
                        <td>{Dollar_1}</td>
                    </tr>
                    <tr>
                        <td>$.25 cents</td>
                        <td>{cents_25}</td>
                    </tr>
                    <tr>
                        <td>$.10 cents</td>
                        <td>{cents_10}</td>
                    </tr>
                    <tr>
                        <td>$.05 cents</td>
                        <td>{cents_05}</td>
                    </tr>
                    <tr>
                        <td>$.01 cents</td>
                        <td>{cents_01}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
export default CalculatorBoxListFormComponent