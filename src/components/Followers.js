import React from 'react';
import { GitHubContext } from '../context/context';
import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Followers = () => {
  const { gitHubFollowers } = useContext(GitHubContext);
  useEffect(() => {
    AOS.init();
  }, []);
  if (gitHubFollowers.length === 0 || !gitHubFollowers) {
    return (
      <Wrapper>
        <div className='followers'>
          <h4 style={{ textAlign: 'center' }}>No followers</h4>
        </div>
      </Wrapper>
    );
  }
  return (
    <div data-aos='fade-right'>
      <Wrapper>
        <div className='followers'>
          {gitHubFollowers.map((el, i) => (
            <article key={i}>
              <img src={el.avatar_url} alt={el.login} />
              <div>
                <h4>{el.login}</h4>
                <a href={el.html_url}>{el.html_url}</a>
              </div>
            </article>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.article`
  background: var(--clr-white);
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;

  &::before {
    content: ' followers';
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  .followers {
    overflow: scroll;
    height: 260px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
    gap: 1.25rem 1rem;
    padding: 1rem 2rem;
  }
  article {
    transition: var(--transition);
    padding: 0.15rem 0.5rem;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;
    img {
      height: 100%;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
    }
    h4 {
      margin-bottom: 0;
    }
    a {
      color: var(--clr-grey-5);
    }
  }
`;
export default Followers;
