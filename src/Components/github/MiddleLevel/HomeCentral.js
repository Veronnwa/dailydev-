import React from 'react';
import styled from 'styled-components';
import HomeMiddle from './HomeMiddle';
import Img1 from '../githubImage/commit.png';
import Img2 from '../githubImage/branch.png';
import Img3 from '../githubImage/syntax.png';

const HomeCentral = () => {n
    return (
        <Container>
            <HomeMiddle src={Img1} 
            textHead="Attribute commits with collaborators easily"
            textBody="Quickly add co-authors to your commit.
             Great for pairing and excellent for sending a 
             little love/credit to that special 
             someone who helped fix that gnarly bug of yours. 
             See the attribution on the history page,
             undo an accidental attribution, and see the co-authors on github.com"
            />
          <HomeMiddle src={Img2}
          textHead="Checkout branches with pull requests 
          and view CI statuses"
          textBody="See all open pull requests for your repositories and check 
          them out as if they were a local branch, even if they're 
          from upstream branches or forks.
          See which pull requests pass commit status checks, too!"
          />
          <HomeMiddle src={Img3}
          textHead="Syntax highlighted diffs"
          textBody="The new GitHub Desktop supports syntax highlighting
          when viewing diffs
           for a variety of different languages."
           />
       </Container>
    );
};
 export default HomeCentral;