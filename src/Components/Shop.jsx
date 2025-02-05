import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledWrapper = styled.div`
  a {
    display: flex;
    align-items: center;
    border: none;
    background: none;
    cursor: pointer;
  }

  a span {
    letter-spacing: 4px;
    font-size: 14px;
    padding-right: 15px;
    text-transform: uppercase;
    color: #fff;
    transition: letter-spacing 0.3s ease-in-out;
  }

  a span:hover,
  a:has(svg:hover) span {
    letter-spacing: 5px;
  }

  a svg {
    transform: translateX(-8px);
    transition: transform 0.3s ease;
    fill: #fff;
  }

  a:hover svg {
    transform: translateX(0);
  }

  a:active svg {
    transform: scale(0.9);
  }

  span {
    position: relative;
    color: #fff;
  }

  span:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  a:hover span:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export default function Shop() {
  return (
    <StyledWrapper>
      <Link to="/products">
        <span>Shop now</span>
        <svg
          id="arrow-horizontal"
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={10}
          viewBox="0 0 46 16"
        >
          <path
            id="Path_10"
            data-name="Path 10"
            d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
            transform="translate(30)"
          />
        </svg>
      </Link>
    </StyledWrapper>
  );
}
