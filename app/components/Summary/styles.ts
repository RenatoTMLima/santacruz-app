import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid #ccc;
  box-shadow: 9px 10px 8px -3px rgba(161,159,161,0.53);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Table = styled.table`
  margin-top: 10px;
  border-bottom: 1px solid #ddd;
  border-collapse: collapse;
  width: 100%;
  
  th, td {
    border-bottom: 1px solid #ddd;
    text-align: center;
  }

  td:first-of-type {
    text-align: left;
  }
`