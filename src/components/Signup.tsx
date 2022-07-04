import { useState } from 'react'
import { FormContainer} from './Signup.style'
import { toast } from 'react-toastify';

const Signup = (props) => {
  const [values, setValues] = useState({
    id:'',
    pw:'',
    pwcheck:'',
    email:'',
    address:'',
    name:'',
    phone:'',
  })

  const signup = (e) => {
    e.preventDefault()

    for(let i=1; i<3; i++){
        var pw = e.target[i].value;
        var num = pw.search(/[0-9]/g);
        var eng = pw.search(/[a-z]/ig);
        var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
        
        if(pw.length < 8 || pw.length > 20){
            toast.error("8자리 ~ 20자리 이내로 입력해주세요.");
            return false;
        }else if(pw.search(/\s/) != -1){
            toast.error("비밀번호는 공백 없이 입력해주세요.");
            return false;
        }else if(num < 0 || eng < 0 || spe < 0 ){
            toast.error("영문,숫자, 특수문자를 혼합하여 입력해주세요.");
            return false;
        }
    }
    
    if(e.target[1].value != e.target[2].value){
        toast.error("비밀번호가 서로 다릅니다.");
        return false;
    }
    var reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if(!reg.test(e.target[3].value)){
        alert("이메일 형식에 맞게 입력해주세요");
    }

    toast.success("signup : you're done!!");
  }

  const handlerChange = (e) => {
    const {name, value} = e.target
    setValues({...values, [name]: value }) 
  }

  const hadlerPassword = (e) => {
    const {name, value} = e.target
    
  }

  return (
    <>
    
      <FormContainer onSubmit={signup}>
        <p>REGISTER</p>
          <label>
              <input
                  name='id'
                  type='text'
                  value={values.id} // abc
                  onChange={handlerChange}
                  placeholder='testID'
              />
          </label>
          <label>
              <input
                  name='pw'
                  type='password'
                  value={values.pw}
                  onChange={handlerChange}
                  placeholder='testPW'
              />
          </label>
          <label>
              <input
                  name='pwcheck'
                  type='password'
                  value={values.pwcheck}
                  onChange={handlerChange}
                  placeholder='testPWCHE'
              />
          </label>
          <label>
              <input
                  name='email'
                  type='email'
                  value={values.email} // abc
                  onChange={handlerChange}
                  placeholder='testEmail'
              />
          </label>
          <label>
              <input
                  name='name'
                  type='text'
                  value={values.name}
                  onChange={handlerChange}
                  placeholder='testName'
              />
          </label>
          <label>
              <input
                  name='phone'
                  type='number'
                  value={values.phone}
                  onChange={handlerChange}
                  placeholder='testPhone'
              />
          </label>
          <label>
              <input
                  name='address'
                  type='text'
                  value={values.address}
                  onChange={handlerChange}
                  placeholder='testAddress'
              />
          </label>
          <label>
          <select id="countrys" name="country">
		        <option>=====국가=====</option>
		        <option value="01">대한민국</option>
		        <option value="02">미국</option>
		        <option value="03">일본</option>
		        <option value="04">스페인</option>
		        <option value="06">중국</option>
		        <option value="07">캐나다</option>
		        <option value="04">아르헨티나</option>
		        <option value="04">브라질</option>
		        <option value="04">가나</option>
		        <option value="04">헝가리</option>
	    </select>
          </label>
          <input type='submit' />
      </FormContainer>
    </>
    
)
}

export default Signup