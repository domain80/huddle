import styled from "styled-components";

export const StyledArticleSection = styled.section`
  padding: 3rem 8%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: ${({ theme }) => theme.color.white};

  & article {
    padding: 2.5em 5%;
    display: grid;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;
    text-align: center;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    

    box-shadow: 0 0 3px ${({ theme }) => theme.color.grayishBlue};
    border-radius: 0.4rem;
  }
  & article p {
    color: ${({ theme }) => theme.color.grayishBlue};
    /* padding: 0 5%; */
    font-size: clamp(0.75rem 30vw 1.2rem);
  }

  & .cta {
    padding: 2rem 4% 3rem;
    /* border: 1px solid ${({ theme }) => theme.color.veryDarkCyan}; */
    box-shadow: 0 -0px 4px -1px ${({ theme }) => theme.color.grayishBlue};
    display: grid;
    align-items: center; 
    justify-items: center;
    text-align: center;
    max-width: 35rem;
    margin: auto; 
    position: relative;
    bottom: -7em;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.color.white};
  }

  & .cta h2 {
	  font-size: 1.2em;
	  line-height: 1.3em;
	  margin: 0.5em 0 1.3em;
  }

  & .cta button {
	  box-shadow: 0 1px 4px -0.4px ${({ theme }) => theme.color.grayishBlue};
  }


  @media screen and (min-width: 1000px){
    article { 
      text-align: left;
      /* padding-left: 8rem; */
      /* justify-content: space-between; */
      grid-template-areas: 
      "pic txt";

      div {
        grid-area: txt;
        max-width: 30rem;
        margin: 0 0 0 auto;
      }
      svg {
        grid-area: pic;
      }
    }
    article:nth-child(even) {
      /* padding-right: 8rem; */
      grid-template-areas: "txt pic";

      div {
        margin: 0 auto 0 0 ;
      }
    }
    
  }
`;
