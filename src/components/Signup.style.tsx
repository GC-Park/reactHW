import styled from 'styled-components'

export const FormContainer = styled.form`
    width: 300px;
    margin: 10px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
    >input {
      margin-top: 10px;
    }
    > p {
      font-size: 30px;
      text-align: center;
      margin:0 0 13px 0;
    }
    > label {
      display:flex;
      margin:10px;
      > span {
        width: 120px;
        margin-right: 8px;

      }
      > input {
        flex: 1;
      }
    }
`

export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`