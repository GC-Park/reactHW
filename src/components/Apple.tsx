import { useState } from 'react'

const Apple = (props) => {
  // 매개변수
  const {color, fruit} = props
  
  // 변수
  // let count =0
const [count, setCount] = useState(0)
// [변수, 함수(변화를 알리고, 다음 값을 지정하는 함수)]
// useState(초기값)
  
  // 이벤트 핸들러
  const handleClick = (e) => {
    e.preventDefault()
    setCount(count+1)
  }
  return (
    <>
      <p>abc</p>
      <p>{count}</p>
      <button onClick={handleClick}>test</button>
    </>
  )
}

export default Apple