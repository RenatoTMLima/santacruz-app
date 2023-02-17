import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #eee;
`

export const SideBar = styled.aside`
  width: 100%;
  height: 100%;
  max-width: 300px;
  background-color: #fff;
  box-shadow: 4px 0 15px 0px rgba(161,159,161,1);
  display: flex;
  flex-direction: column;
`

export const Content = styled.main`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const LogoContainer = styled.div`
  display: flex;
  gap: 8px;
  border-bottom: 1px solid #ddd;
  padding: 20px;
  align-items: center;

  img {
    height: 50px;
  }

  h1 {
    font-family: 'Kaushan Script', cursive;
    font-size: 34px;
    white-space: nowrap;
  }
`

export const SideBarContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 20px 0;
  
  main {
    display: flex;
    flex-direction: column;
    gap: 4px;

  }
  
  footer {
    display: flex;
    flex-direction: column;
    border-top: 1px solid #ddd;
    padding-top: 16px;
  }

  a {
    text-decoration: none;
    padding: 10px 16px;
    color: #000;
    border-radius: 10px;
    display: flex;
    gap: 6px;
    align-items: center;
    font-size: 1.25rem;

    img {
      height: 30px;
    }
  }

  a:hover {
    background-color: #eee;
  }

  a.selected {
    font-weight: 700;
    background-color: #ddd
  }
`