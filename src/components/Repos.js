import React, { useContext } from 'react';
import styled from 'styled-components';
import { GitHubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

const Repos = () => {
  const { gitHubRepos } = useContext(GitHubContext);

  /// everthing is clear till map( we will only take the language which does not have the null value).

  /*In the reduce method acc means the value returned from the reduce function and cur means elemnt passed into the function example HTML.
  
  Initially its value(acc) is undefined. so in the first iteration its value after acc[cur] = (acc[cur] || 0) + 1; will become 1.so after the 1st iteration   acc will become HTML:1 (cause we are returning acc from the reduce function and whatever is returnded from the reduce function becomes the acc) 

  In the second iteration our acc is HTML:1 and if we agian get HTML as cur our acc[cur] = (acc[cur] || 0) + 1; becomes two and acc will be returned from the reeuce function with value HTML:2

  IN THE third iteration 

  acc={HTML:2}
  cur=javascript(example)

  so acc[cur] which means HTML:2[javascript] becomes undefined and our acc will once again become 1 and our function will return {HTML:2,javascript:1} as acc
  
  
  
  */
  // how many dupliated number in array
  // let num = ['1', '2', '3', '3', '3', '2', '9'];
  // console.log(num);

  // const newNum = num.reduce((a, c) => {
  //   a[c] = (a[c] || 0) + 1;
  //   return a;
  // }, {});
  // console.log(newNum);

  const languages = gitHubRepos
    .filter((el) => el.language !== null)
    .map((el) => el.language)
    .reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});

  let mostUsedLanguage = [];
  // passing the value as label and valuee so that it can be read by our chart
  Object.keys(languages).forEach((el) => {
    mostUsedLanguage.push({ label: el, value: languages[el] });
    return mostUsedLanguage;
  });
  // showing only top 4 used programming language
  mostUsedLanguage = Object.values(mostUsedLanguage)
    .sort((a, b) => b - a)
    .slice(0, 4);
  // star language(means most popular)(alternative approach)
  const starLanguage = gitHubRepos.reduce((acc, cur) => {
    const { language, stargazers_count } = cur;
    // if the language os null we dont take anything into account
    if (!language) return acc;
    // if acc[cur.language] is undefined which happens during the first initialization and when the value of cur changes from the githubrepos. we will return value as 1 and than the same labell and stars
    if (!acc[language]) {
      acc[language] = {
        label: language,
        value: 1,
        stars: stargazers_count,
      };
      // if not differeent then we add value +1 and stars= starts +stars(
    } else {
      acc[language] = {
        ...acc[language],
        value: acc[language].value + 1,
        stars: acc[language].stars + stargazers_count,
      };
    }
    return acc;
  }, {});

  let starLanguageChart = [];
  // passing the value as label and value so that it can be read by our chart. and here we are passing the value of star in our chart values
  Object.keys(starLanguage).forEach((el) => {
    starLanguageChart.push({ label: el, value: starLanguage[el].value });
    return starLanguageChart;
  });
  console.log(starLanguageChart);
  // again sorting only top 4 and slicing
  starLanguageChart = Object.values(starLanguageChart)
    .sort((a, b) => b - a)
    .slice(0, 4);
  return (
    <section className='section'>
      <Wrapper className='section-center'>
        {' '}
        <ExampleChart data={mostUsedLanguage} />
        <Pie3D data={mostUsedLanguage} />
        <Doughnut2D data={starLanguageChart} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
  // making chart responsive. remember these classes can found inside the chart inspect element to find the classname
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
