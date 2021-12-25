import styled from "styled-components";

export const StyledArticleSection = styled.section`
  padding: 3rem 8%;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  & article {
    padding: 2.5em 5%;
    display: grid;
    justify-items: space-between;
    align-items: center;
    gap: 3rem;
    text-align: center;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    box-shadow: 0 0 3px ${({ theme }) => theme.color.grayishBlue};
    border-radius: 0.4rem;
  }
  & article p {
    color: ${({ theme }) => theme.color.grayishBlue};
    /* padding: 0 5%; */
    line-height: 1.5em;
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
    max-width: 28rem;
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
`;
