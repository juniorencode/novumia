import { useState } from 'react'
import { InputText } from './index.js'
import './App.css'

const App = () => {
  const [name, setName] = useState('')

  return (
    <div className="formi">
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
    </div>
  )
}

export default App
