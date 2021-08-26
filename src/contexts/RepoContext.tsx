import React, { useState, createContext, useEffect } from 'react';

import { api } from '../services/api';

const regex = new RegExp('([a-z])\\/+');

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
  topics: string[];
  colorTag: string;
}

interface IRepoContext {
  repos: IGithubRepository[];
  addRepos: (_repo: string, _handleError: CallableFunction) => Promise<void>;
  handleRemoveRepo: (_fullName: string) => void;
  repoIssues: string;
  handleRepoIssues: (_issue: string) => void;
}

export const RepoContext = createContext<IRepoContext>({} as IRepoContext);

const RepoProvider: React.FC = ({ children }) => {
  const [repos, setRepos] = useState<IGithubRepository[]>(() => {
    const storageRepos = localStorage.getItem('@GitCollection:repositories');
    if (storageRepos) {
      return JSON.parse(storageRepos);
    }
    return [];
  });

  const [repoIssues, setRepoIssues] = useState('');

  const handleTopics = (array: string[]): string => {
    if (array.includes('angular')) return '#DE3B38 ';
    if (array.includes('react')) return '#61DAFA ';
    if (array.includes('vue')) return '#41B883 ';

    return '#04d361';
  };

  function handleRepoIssues(issue: string) {
    setRepoIssues(issue);
  }

  const addRepos = async (
    newRepo: string,
    handleError: CallableFunction,
  ): Promise<void> => {
    if (!newRepo) {
      handleError('Informe o username/repositório');
      return;
    }

    if (!regex.test(newRepo)) {
      handleError('Informe o username/repositório 2');
      return;
    }

    const hasNewRepo = repos.find(repo => repo.full_name === newRepo);
    if (hasNewRepo) {
      handleError('Repositorio já está nos favoritos.');
      return;
    }

    try {
      const response = await api.get<IGithubRepository>(`repos/${newRepo}`, {
        headers: {
          accept: 'application/vnd.github.mercy-preview+json',
        },
      });

      const repository = response.data;

      setRepos(prevState => [
        ...prevState,
        { ...repository, colorTag: handleTopics(repository.topics) },
      ]);
    } catch (error) {
      console.log(error);
      handleError('Repositorio não encontrado no Github');
    }
  };

  const handleRemoveRepo = (fullName: string) => {
    const filtered = repos.filter(repo => repo.full_name !== fullName);

    setRepos(filtered);
  };

  useEffect(() => {
    localStorage.setItem('@GitCollection:repositories', JSON.stringify(repos));
  }, [repos]);

  return (
    <RepoContext.Provider
      value={{
        repos,
        repoIssues,
        handleRepoIssues,
        addRepos,
        handleRemoveRepo,
      }}
    >
      <>{children}</>
    </RepoContext.Provider>
  );
};

export default RepoProvider;
