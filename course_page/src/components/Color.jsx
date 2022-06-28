import styled from 'styled-components'

const ColorWrap = styled.div`
    width: 200px;
    height: 200px;
    margin: 100px auto 0 auto;
    background: red;
    color: white;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`


export default function Color({ color, width, height, background, onClick }) {

    return (
        <ColorWrap className='color-wrap' style={{ color, width, height, background }}>
            Color
            <button onClick={onClick}>Click</button>
        </ColorWrap>
    )
}