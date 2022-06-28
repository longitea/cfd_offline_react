import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`
    padding: 10px 20px;
    font-size: 18px;
    margin-right: 20px;
`
export default function Demo() {
    const [count, setCount] = useState(1)


    return (
        <div style={{ margin: 100 }}>
            <ButtonA count={count} setCount={setCount}>demo</ButtonA>
            <ButtonB count={count} setCount={setCount} />
        </div>
    )
}



export const ButtonA = ({ count, setCount, children }) => {
    return <ButtonStyle onClick={() => setCount(count + 1)}>{children}: {count}</ButtonStyle>
}



export const ButtonB = ({ count, setCount }) => {
    return <ButtonStyle onClick={() => setCount(count + 1)}>B: {count}</ButtonStyle>
}