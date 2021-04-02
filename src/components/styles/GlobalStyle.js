import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	html{
		font-size:62.5%;
	}
	html,body{
		height:100%;
	}

	body{
		box-sizing:border-box;
		//font-family:'Ubuntu', sans-serif;
		font-weight:300;
		font-size:1.8rem;
		line-height:1.6;
	}

	*,
	*:before,
	*:after{
		margin:0;
		padding:0;
		list-style:none;
		box-sizing:inherit;
	}

	a{
		text-decoration:none;
	}

	h1,h2,h3{
		//	font-family: "Lora", serif;
			//font-weight:400;
		//	color:#143774;
	}
`;

export default GlobalStyle;
