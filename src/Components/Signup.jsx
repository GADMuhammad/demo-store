import styled from "styled-components";

const Signup = () => {
  return (
    <StyledWrapper>
      <section className="card-switch animate-up">
        {/*  */}
        <label className="switch">
          <input type="checkbox" className="toggle" />
          <span className="slider" />
          <span className="card-side" />

          {/* double */}
          <div className="flip-card__inner">
            <div className="flip-card__front">
              <div className="title">Log in</div>
              <form className="flip-card__form" action>
                <input
                  className="flip-card__input"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                <input
                  className="flip-card__input"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <button className="flip-card__btn">Let`s go!</button>
              </form>
            </div>

            <div className="flip-card__back">
              <div className="title">Sign up</div>
              <form className="flip-card__form" action>
                <input
                  className="flip-card__input"
                  placeholder="Name"
                  type="name"
                />
                <input
                  className="flip-card__input"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                <input
                  className="flip-card__input"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <button className="flip-card__btn">Confirm!</button>
              </form>
            </div>
          </div>
        </label>
        {/*  */}
      </section>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  input.toggle {
    display: none;
  }

  .slider {
    box-sizing: border-box;
    border-radius: 5px;
    border: 2px solid var(--color-two);
    box-shadow: 4px 4px var(--color-two);
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background-color: var(--bg-colorcolor); */
    transition: 0.3s ease-in transform;
  }

  .card-side::before,
  .card-side::after {
    position: absolute;
    top: 0;
    width: 100px;
    color: var(--font-color);
    font-weight: 600;
    font-size: 20px;
    font-family: var(---poppins-font-family);
  }

  .card-side::before {
    content: "Log in";
    left: -70px;
    text-decoration: underline;
  }

  .card-side::after {
    content: "Sign up";
    left: 70px;
    text-decoration: none;
  }

  /* switch card */
  .switch {
    transform: translateY(-200px);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 50px;
    height: 20px;
    margin: 40vh auto;
  }

  .slider:before {
    box-sizing: border-box;
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    border: 2px solid var(--color-two);
    border-radius: 5px;
    left: -2px;
    bottom: 2px;
    background-color: var(--bg-color);
    box-shadow: 0 3px 0 var(--color-two);
    transition: 0.3s;
  }

  .toggle:checked + .slider {
    background-color: var(--color-five);

    &:before {
      transform: translateX(30px);
    }
  }

  .toggle:checked ~ .card-side:before {
    text-decoration: none;
  }

  .toggle:checked ~ .card-side:after {
    text-decoration: underline;
  }

  /* card */
  .flip-card__inner {
    width: 300px;
    height: 350px;
    position: relative;
    background-color: transparent;
    perspective: 1000px;
    /* width: 100%;
      height: 100%; */
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    margin-top: 35px;
  }

  .toggle:checked ~ .flip-card__inner {
    transform: rotateY(180deg);
  }

  .toggle:checked ~ .flip-card__front {
    box-shadow: none;
  }

  .flip-card__front,
  .flip-card__back {
    padding: 20px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background: lightgrey;
    gap: 20px;
    border-radius: 5px;
    border: 2px solid var(--color-two);
    box-shadow: 4px 4px var(--color-two);
  }

  .flip-card__back {
    width: 100%;
    transform: rotateY(180deg);
  }

  .flip-card__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .title {
    margin: 20px 0 20px 0;
    font-size: 25px;
    font-weight: 900;
    text-align: center;
    color: var(--color-two);
  }

  .flip-card__input {
    width: 250px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--color-two);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--color-two);
    font-size: 15px;
    font-weight: 600;
    color: var(--font-color);
    padding: 5px 10px;
    outline: none;
  }

  .flip-card__input::placeholder {
    color: var(--font-color-sub);
    opacity: 0.8;
  }

  .flip-card__input:focus {
    border: 2px solid var(--input-focus);
  }

  .flip-card__btn:active,
  .button-confirm:active {
    box-shadow: 0px 0px var(--color-two);
    transform: translate(3px, 3px);
  }

  .flip-card__btn {
    margin: 20px 0 20px 0;
    width: 120px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid var(--color-two);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--color-two);
    font-size: 17px;
    font-weight: 600;
    color: var(--font-color-sub);
    cursor: pointer;
  }
`;

export default Signup;
