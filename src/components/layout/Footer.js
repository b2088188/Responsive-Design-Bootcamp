import styled from "styled-components/macro";

function Footer() {
	return (
		<footer
			css={`
				background: #143774;
				color: rgba(255, 255, 255, 0.5);
				text-align: center;
				padding: 3em 0;
			`}
		>
			<p>
				<strong>Living the Simple Life</strong>
			</p>
			<p>Copyright 2019</p>
		</footer>
	);
}

export default Footer;
