import { useState } from "react"
import "./App.css"

function App() {
    const initialState = {
        issueType: "",
        subject: "",
        message: "",
    }

    const [formState, setFormState] = useState(initialState)

    const handleSubmit = (event) => {
        // prevent form/page from refreshing:
        event.preventDefault()
        // here is our functionality...
        // ...do something with the form data:
        console.log(formState)
        // clear the form AFTER we're done using it:
        setFormState(initialState)
    }

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.id]: event.target.value })
    }

    return (
        <form onSubmit={handleSubmit}>
        
        <label htmlFor='issueType'>Type of Issue:</label>
        <select id='issueType'
          onChange={handleChange}
        value={formState.issueType}>
                <option value='default'> Select Issue </option>
                <option value='outage'>Service Outage</option>
                <option value='billing'>Billing</option>
                <option value='cancel'>Cancel Service</option>
        </select>
        
        <label htmlFor='subject'>Subject:</label>
        <input type='text'
          id='subject'
          onChange={handleChange}
          value={formState.subject} />
        
        <label htmlFor='message'>Message</label>
        <textarea id='message' cols='30' rows='10'
          onChange={handleChange}
          value={formState.message}></textarea>
            <button type='submit'>Send</button>
        </form>
    )
}

export default App
