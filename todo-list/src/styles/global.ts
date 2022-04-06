import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --color-primary: #0bc56b;
  --shadow-dark: 0 5rem 6rem rgba(0, 0, 0, 0.4);
  --line: 1px solid var(--color-grey-light-2);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
$bp-largest: 75em; // 1200px
$bp-large: 68.75em; // 1100px
$bp-medium: 56.25em; //900px
$bp-small: 37.5em; //600px
$bp-smallest: 31.25em; // 500px

* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  @media only screen and (max-width: $bp-large) {
    font-size: 50%;
  }
}

body {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  line-height: 1.6;
  background-color:  #3B60E4;
  background-size: cover;
  
  }

.container {
    align-items: center;
    max-width: 80rem;
    margin: 10em auto;
    background-color: #EDD3C4;
    box-shadow: var(--shadow-dark);
    min-height:  30rem;
    border-radius: 0.5em;
    
  

`;
