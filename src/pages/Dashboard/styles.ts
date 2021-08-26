import { shade } from 'polished';
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 36px;
  color: #3a3a3a;
  line-height: 56px;
  margin-top: 36px;
`;

export const Form = styled.form<{ hasError: boolean }>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;

    border: 2px solid ${props => (props.hasError ? '#c53030' : '#fff')};
    border-radius: 4px 0px 0px 4px;
    color: #3a3a3a;
    border-right: 0;

    outline: none;

    transition: all 0.2s ease;

    &:focus {
      border-color: ${props => (props.hasError ? '#c53030' : '#04d361')};
      border-right: 0;
    }

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 160px;

    background: #04d361;
    border-radius: 0px 4px 4px 0px;
    border: 0;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;

    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repos = styled.section`
  margin-top: 48px;
  max-width: 700px;
  min-height: 200px;
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Tag = styled.span<{ colorTag: string }>`
  position: absolute;
  left: 0;
  width: 4px;
  height: 70%;
  border-radius: 4px;
  background: ${props => props.colorTag};
`;

export const ButtonDelete = styled.button`
  position: absolute;
  right: -22px;
  top: -22px;

  background: none;

  cursor: pointer;

  border: 0;

  padding: 12px;

  font-size: 1.5rem;
  font-weight: bold;
  color: #a8a8b3;
  transition: all 0.2s ease;

  &:hover {
    font-size: 1.6rem;
  }
`;

export const RepoWrapper = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.09));
  transition: transform 0.2s ease-in;

  & + div {
    margin-top: 16px;
  }

  &:hover {
    transform: translateX(8px);
  }

  a {
    background: #fff;
    border-radius: 4px;
    width: 100%;
    padding: 24px;

    display: flex;
    align-items: center;

    position: relative;

    img {
      width: 64px;
      height: 64px;

      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    > svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
