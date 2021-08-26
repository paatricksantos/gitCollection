import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin-top: 16px;
  display: flex;
  gap: 4px;
  align-items: center;

  button {
    background: none;
    border: 1px solid #737380;

    color: #737380;

    padding: 4px 8px;
    font-size: 1.2rem;

    &.active {
      border: 2px solid #04d361;
      color: #04d361;
    }
  }
`;
