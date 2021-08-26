import React, { useState } from 'react';
import { useContext } from 'react';
import { FiChevronRight, FiXCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import { RepoContext } from '../../contexts/RepoContext';
import {
  Form,
  Title,
  Repos,
  Error,
  Tag,
  ButtonDelete,
  RepoWrapper,
} from './styles';

const Dashboard: React.FC = () => {
  const { repos, addRepos, handleRemoveRepo, handleRepoIssues } = useContext(
    RepoContext,
  );
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewRepo(event.target.value);
  }

  function handleAddRepo(event: React.FormEvent): void {
    event.preventDefault();
    addRepos(newRepo, setInputError);
    setNewRepo('');
  }

  return (
    <>
      <img src={logo} alt="GitCollection" />
      <Title>Catálogo de repositórios do Github</Title>

      <Form hasError={Boolean(inputError)} onSubmit={handleAddRepo}>
        <input
          type="text"
          placeholder="username/repository_name"
          value={newRepo}
          onChange={handleInputChange}
          onFocus={() => setInputError('')}
        />
        <button>Buscar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}
      <Repos>
        {repos?.map(repository => (
          <RepoWrapper key={repository.full_name}>
            <Link
              to={`/repos/${repository.full_name}`}
              onClick={() => handleRepoIssues(repository.full_name)}
            >
              <Tag colorTag={repository.colorTag} />
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>

              <FiChevronRight size={20} />
            </Link>
            <ButtonDelete
              onClick={() => handleRemoveRepo(repository.full_name)}
            >
              <FiXCircle />
            </ButtonDelete>
          </RepoWrapper>
        ))}
      </Repos>
    </>
  );
};

export default Dashboard;
