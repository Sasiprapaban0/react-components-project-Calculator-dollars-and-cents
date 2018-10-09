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
                    {Dollar_100 > 0 &&
                        <tr>
                            <td>$100-dollar</td>
                            <td>{Dollar_100}</td>
                        </tr>
                    }
                    {Dollar_50 > 0 &&
                        <tr>
                            <td>$50 dollar</td>
                            <td>{Dollar_50}</td>
                        </tr>
                    }
                    {Dollar_20 > 0 &&
                        <tr>
                            <td>$20 dollar</td>
                            <td>{Dollar_20}</td>
                        </tr>
                    }
                    {Dollar_10 > 0 &&
                        <tr>
                            <td>$10 dollar</td>
                            <td>{Dollar_10}</td>
                        </tr>
                    }
                    {Dollar_5 > 0 &&
                        <tr>
                            <td>$5 dollar </td>
                            <td>{Dollar_5}</td>
                        </tr>
                    }
                    {Dollar_1 > 0 &&
                        <tr>
                            <td>$1 dollar</td>
                            <td>{Dollar_1}</td>
                        </tr>
                    }
                    {cents_25 > 0 &&
                        <tr>
                            <td>$.25 cents</td>
                            <td>{cents_25}</td>
                        </tr>
                    }
                    {cents_10 > 0 &&
                        <tr>
                            <td>$.10 cents</td>
                            <td>{cents_10}</td>
                        </tr>
                    }
                     {cents_05 > 0 &&
                    <tr>
                        <td>$.05 cents</td>
                        <td>{cents_05}</td>
                    </tr>
                     }
                      {cents_01 > 0 &&
                    <tr>
                        <td>$.01 cents</td>
                        <td>{cents_01}</td>
                    </tr>
                      }
                </tbody>
            </Table>
        </div>
    )
export default CalculatorBoxListFormComponent