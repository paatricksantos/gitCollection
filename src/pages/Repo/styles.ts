import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;

    transition: color 0.2s;

    &:hover {
      color: #666666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepoInfo = styled.section`
  margin-top: 36px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;

      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
      }
    }
  }
  ul {
    list-style: none;
    margin-top: 24px;
    display: flex;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 32px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #737380;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 36px;

  a {
    background: #fff;
    border-radius: 4px;

    width: 100%;
    padding: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.09));

    transition: transform 0.2s;

    &:hover {
      transform: translateX(8px);
    }

    & + a {
      margin-top: 16px;
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
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
