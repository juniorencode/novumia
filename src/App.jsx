import { useState } from 'react'
import { InputText, InputNumber } from './index.js'
import './App.css'

const App = () => {
  const [name, setName] = useState('')

  return (
    <div className="formi">
      <h1>InputText</h1>
      <InputText placeholder="This is a test..!!" />
      <InputText
        label="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <InputText label="LastName" caption="This is a random information" />
      <InputText label="Address" error="This is a error message" />
      <InputText
        label="Hobbies"
        caption="This is a random information"
        error="This is a error message"
      />
      <InputText label="Observations" disabled />
      <h1>InputNumber</h1>
      <InputNumber placeholder="This is a test..!!" />
      <InputNumber
        name="phone"
        label="Phone"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <InputNumber
        name="card"
        label="Credit Card"
        caption="This is a random information"
      />
      <InputNumber name="tel" label="Tel." error="This is a error message" />
      <InputNumber
        name="postal"
        label="Postal Code"
        caption="This is a random information"
        error="This is a error message"
      />
      <InputNumber name="code" label="Code" disabled />
    </div>
  )
}

export default App
