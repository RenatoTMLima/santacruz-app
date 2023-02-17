import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 16px;
  border: 1px solid #ccc;
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