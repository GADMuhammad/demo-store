import styled from "styled-components";

const Loading = () => {
  return (
    <StyledWrapper>
      <div className="loading-bar">Loading</div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loading-bar {
    position: relative;
    width: 110px;
    height: 110px;
    background-color: transparent;
    text-align: center;
    line-height: 111px;
    font-size: 15px;
    color: #db4444;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-shadow: 0 0 20px #db4444;
    margin: 0 auto;
  }

  .loading-bar:before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-top: 5px solid #db4444;
    border-right: 5px solid #db4444;
    border-radius: 50%;
    animation: animate 2s linear infinite;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate {
    0% {
      transform: rotate(45deg);
    }

    100% {
      transform: rotate(405deg);
    }
  }
`;

export default Loading;
