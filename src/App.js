import React from 'react'
import DisplayMyName from './DisplayMyName'
import DisplayName from './DisplayName'

const App = () => (
    <div>
        <h1>Hello world</h1>
        <DisplayMyName />
        <DisplayName
            name="dawid"
        />
    </div>
)

export default App