import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

import { api } from '../services/api';
import { RepoContext } from './RepoContext';

interface IGithubIssue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

interface IIssuesContext {
  issues: IGithubIssue[];
  issuesPagination: IGithubIssue[];
  currentPage: number;
  pagesBtn: number;
  handleCurrentPage: (_page: number) => void;
}

const ITENS_PERPAGE = 5;

export const IssuesContext = createContext({} as IIssuesContext);

const IssuesProvider: React.FC = ({ children }) => {
  const { repoIssues } = useContext(RepoContext);
  const [issues, setIssues] = useState<IGithubIssue[]>([]);
  const [issuesPagination, setIssuesPagination] = useState<IGithubIssue[]>([]);

  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(issues.length / ITENS_PERPAGE);

  const startIndex = currentPage * ITENS_PERPAGE;
  const endIndex = startIndex + ITENS_PERPAGE;

  function handleCurrentPage(page: number) {
    setCurrentPage(page);
  }

  useEffect(() => {
    if (repoIssues) {
      api
        .get(`repos/${repoIssues}/issues`)
        .then(response => setIssues(response.data));
    }
  }, [repoIssues]);

  useEffect(() => {
    const currentItens = issues.slice(startIndex, endIndex);

    setIssuesPagination(currentItens);
  }, [issues, startIndex, endIndex]);

  return (
    <IssuesContext.Provider
      value={{
        issues,
        pagesBtn: pages,
        currentPage,
        handleCurrentPage,
        issuesPagination,
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
};

export default IssuesProvider;
