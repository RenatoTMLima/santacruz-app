import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    font-size: 14px;
  }

  .inner-input-container {
    border: 1px solid #999;
    border-radius: 4px;
    padding: 6px 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    input {
      border: 0;
      width: 100%;
      height: 100%;
      outline: none;
    }
  }
`