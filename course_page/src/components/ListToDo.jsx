import React, { useState } from 'react'
import styled from 'styled-components'

const List = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
`

const Item = styled.div`
    border: 1px solid #ccc;
    padding: 10px;
    display: flex;
    &.success {
        background: green;
        color: white;
    }
`

const Button = styled.button`
    margin-left: auto;
`

const InputWrap = styled.div`
    display: flex;
    height: 40px;
    margin-bottom: 20px;
    input{
        flex: 1;
        padding: 0 20px;
    }
    button{

    }
`
export default function ListToDo({ listToDo, onAdd, onSuccess }) {
    const [value, setValue] = useState('')

    const _onAdd = () => {
        onAdd(value.trim())
        setValue('')
    }
    return (
        <div>
            <InputWrap>
                <input value={value} onChange={ev => setValue(ev.target.value)} placeholder='Cong viec...'/>
                <button onClick={_onAdd} disabled={!value.trim()}>Thêm</button>
            </InputWrap>
            <List>
                {
                    listToDo.map(e => (
                        <Item key={e.id} className={e.success ? 'success' : ''}>
                            {e.content}
                            {
                                !e.success ? <Button onClick={() => onSuccess(e.id)}>Done</Button> : null
                            }
                        </Item>
                    ))
                }
            </List>
        </div>
    )
}
