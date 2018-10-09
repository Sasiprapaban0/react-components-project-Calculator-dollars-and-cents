import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { CalculatorBoxList } from '../containers'

const Jokes = () => (
    <div className='container'>
        <Switch>
            <Route exact path='/calculator/:currency' component={CalculatorBoxList} />
        </Switch>
    </div>
)

export default Jokes
