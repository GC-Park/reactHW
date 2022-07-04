import { useState } from 'react'
import { FormContainer, DivContainer } from './Signup.style'
import { toast } from 'react-toastify'
import { apiInstance } from '../apis/setting'

const Signup = (props) => {
    const [values, setValues] = useState({
        id: '',
        pw: '',
        pwcheck: '',
        email: '',
        address: '',
        name: '',
        phone: '',
    })

    const signup = async (e) => {
        e.preventDefault()

        for (let i = 1; i < 3; i++) {
            var pw = e.target[i].value
            var num = pw.search(/[0-9]/g)
            var eng = pw.search(/[a-z]/gi)
            var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi)

            if (pw.length < 8 || pw.length > 20) {
                toast.error('8자리 ~ 20자리 이내로 입력해주세요.')
                return false
            } else if (pw.search(/\s/) != -1) {
                toast.error('비밀번호는 공백 없이 입력해주세요.')
                return false
            } else if (num < 0 || eng < 0 || spe < 0) {
                toast.error('영문,숫자, 특수문자를 혼합하여 입력해주세요.')
                return false
            }
        }

        if (e.target[1].value != e.target[2].value) {
            toast.error('비밀번호가 서로 다릅니다.')
            return false
        }
        var reg =
            /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

        if (!reg.test(e.target[3].value)) {
            alert('이메일 형식에 맞게 입력해주세요')
        }

        toast.success("signup : you're done!!")
        await apiInstance.post('/register', {
            id: e.target[0].value,
            pw: e.target[1].value,
            pwcheck: e.target[2].value,
            email: e.target[3].value,
            name: e.target[4].value,
            phone: e.target[5].value,
            address: e.target[6].value,
            country: e.target[7].value,
        })
    }

    const handlerChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    return (
        <>
            <DivContainer>
                <FormContainer onSubmit={signup}>
                    <p>REGISTER</p>
                    <label>
                        <span>id : </span>
                        <input
                            name='id'
                            type='text'
                            value={values.id} // abc
                            onChange={handlerChange}
                            placeholder='ID'
                        />
                    </label>
                    <label>
                        <span>pw : </span>
                        <input
                            name='pw'
                            type='password'
                            value={values.pw}
                            onChange={handlerChange}
                            placeholder='PW'
                        />
                    </label>
                    <label>
                        <span>pwcheck : </span>
                        <input
                            name='pwcheck'
                            type='password'
                            value={values.pwcheck}
                            onChange={handlerChange}
                            placeholder='PWcheck'
                        />
                    </label>
                    <label>
                        <span>email : </span>
                        <input
                            name='email'
                            type='email'
                            value={values.email} // abc
                            onChange={handlerChange}
                            placeholder='Email'
                        />
                    </label>
                    <label>
                        <span>name : </span>
                        <input
                            name='name'
                            type='text'
                            value={values.name}
                            onChange={handlerChange}
                            placeholder='Name'
                        />
                    </label>
                    <label>
                        <span>phone : </span>
                        <input
                            name='phone'
                            type='tel'
                            value={values.phone}
                            onChange={handlerChange}
                            placeholder='Phone'
                        />
                    </label>
                    <label>
                        <span>address : </span>
                        <input
                            name='address'
                            type='text'
                            value={values.address}
                            onChange={handlerChange}
                            placeholder='Address'
                        />
                    </label>
                    <label>
                        <span>국가 : </span>
                        <select id='countrys' name='country'>
                            <option>=====국가=====</option>
                            <option value='01'>대한민국</option>
                            <option value='02'>미국</option>
                            <option value='03'>일본</option>
                            <option value='04'>스페인</option>
                            <option value='06'>중국</option>
                            <option value='07'>캐나다</option>
                            <option value='08'>아르헨티나</option>
                            <option value='09'>브라질</option>
                            <option value='10'>가나</option>
                            <option value='11'>헝가리</option>
                        </select>
                    </label>
                    <input type='submit' />
                </FormContainer>
            </DivContainer>
        </>
    )
}

export default Signup
