import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import { IssuesContext } from '../../contexts/IssuesContext';
import { RepoContext } from '../../contexts/RepoContext';
import Pagination from '../Pagination';
import { Header, Issues, RepoInfo } from './styles';

interface IRepositoryParams {
  repository: string;
}

interface IGithubRepository {
  full_name: string;
  description: string;
  forks_count: number;
  open_issues_count: number;
  stargazers_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Repo: React.FC = () => {
  const { repos } = useContext(RepoContext);
  const { issuesPagination } = useContext(IssuesContext);
  const [repository, setRepository] = useState({} as IGithubRepository);
  const { params } = useRouteMatch<IRepositoryParams>();

  useEffect(() => {
    const repoCurrent = repos.find(
      repo => repo.full_name === params.repository,
    );

    if (repoCurrent) {
      setRepository(repoCurrent);
    }
  }, [repos, params]);

  return (
    <>
      <Header>
        <img src={logo} alt="GitCollection" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>
      <RepoInfo>
        <header>
          <img src={repository?.owner?.avatar_url} alt="Developper" />
          <div>
            <strong>{repository?.full_name}</strong>
            <p>{repository?.description}</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>{repository?.stargazers_count}</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>{repository?.forks_count}</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>{repository?.open_issues_count}</strong>
            <span>Issus abertas</span>
          </li>
        </ul>
      </RepoInfo>
      <Issues>
        {issuesPagination.map(issue => (
          <a href={issue.html_url} key={issue.id}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight />
          </a>
        ))}
      </Issues>
      <Pagination />
    </>
  );
};

export default Repo;
