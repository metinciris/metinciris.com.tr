import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 250px;
  background-color: #f4f4f4;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100vh;
`;

export const SidebarItem = styled.div`
  padding: 15px;
  margin: 10px 0;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const SidebarTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
`;