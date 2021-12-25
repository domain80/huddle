import React from "react";
import { StyledArticleSection } from "./Article.styled";
import IllustrationGrowTogether from "../../svgs/IllustrationGrowTogether";
import IllustrationFlowingConversations from "../../svgs/IllustrationFlowingConversations";
import IllustrationsYourUsers from "../../svgs/IllustrationsYourUsers";
import { StyledButton } from "../Button/Button.styled";

function Article() {
  return (
    <StyledArticleSection>
      <article>
        <IllustrationGrowTogether />
        <div>
          <h3>Grow Together</h3>
          <p>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </div>
      </article>
      <article>
        <IllustrationFlowingConversations />
        <div>
          <h3>Flowing Conversations</h3>
          <p>
            You wouldn't paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </p>
        </div>
      </article>
      <article>
        <IllustrationsYourUsers />
        <div>
          <h3>Your Users</h3>
          <p>
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </div>
      </article>

      <div className="cta">
        <h2>Ready To Build Your Community?</h2>
        <StyledButton>Get Started For Free</StyledButton>
      </div>
    </StyledArticleSection>
  );
}

export default Article;
