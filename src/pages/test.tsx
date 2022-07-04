import react from 'react'
import axios from 'axios'
import { apiInstance } from '../apis/setting'

const test = () => {
  const [message, setMessage] = react.useState('')
  // Get Method
    react.useEffect(() => {
        const apiRequest = async () => {
            const response = await apiInstance.get('/basket/cherry')
            setMessage(response.data.body.message)
        }
        apiRequest()
    }, [])

    const handleSubmit = async (e) => {
      e.preventDefault()
      await apiInstance.post('/signup')
    }
    return (
        <>
            <p>test</p>
            <p>{message}</p>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" />
              <input type="submit" />
            </form>
        </>
    )
}

export default test