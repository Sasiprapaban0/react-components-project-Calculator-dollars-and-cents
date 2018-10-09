import React from 'react'
import { CalculatorBox } from '../containers'
import { Calculator } from './'
import { Route, Switch } from 'react-router-dom'
import '../App.css'
const Content = () => (
    <div  >
        <CalculatorBox />
        <div  >
            <Switch>
                <Route path='/calculator' component={Calculator} />
            </Switch>
        </div>
    </div>

)
export default Content