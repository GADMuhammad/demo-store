import styled from "styled-components";

const buttonLabel = "View all Products";

const Button = () => {
  return (
    <StyledWrapper>
      <button alt={buttonLabel}>
        {buttonLabel.split("").map((char, index) => (
          <i key={`${char}${index}`}>{char === " " ? "\u00A0" : char}</i>
        ))}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: fit-content;
    position: relative;
    padding: 0 20px;
    font-size: 18px;
    text-transform: lowercase;
    border: 0;
    background-color: #db4444;
    box-shadow: #b43a3a 0px 7px 0px 0px;
    border-radius: 12px;
    overflow: hidden;
    transition: 31ms cubic-bezier(0.5, 0.7, 0.4, 1);
    margin: 8px auto;
  }

  button:before {
    content: attr(alt);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    inset: 0;
    font-size: 15px;
    font-weight: bold;
    color: white;
    letter-spacing: 3px;
    opacity: 1;
  }

  button:active {
    box-shadow: none;
    transform: translateY(7px);
    transition: 35ms cubic-bezier(0.5, 0.7, 0.4, 1);
  }

  button:hover:before {
    transition: all 0s;
    transform: translateY(100%);
    opacity: 0;
  }

  button i {
    color: white;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 4px;
    font-style: normal;
    transition: all 2s ease;
    transform: translateY(-20px);
    opacity: 0;
  }

  button:hover i {
    transition: all 0.2s ease;
    transform: translateY(0px);
    opacity: 1;
  }

  ${[...Array(buttonLabel.length)].map(
    (_, index) => `
    button:hover i:nth-child(${index + 1}) {
      transition-delay: calc(0.045s * ${index + 1});
    }
  `,
  )}
`;

export default Button;
