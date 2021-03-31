import styled from "styled-components/macro";

function Header() {
	return (
		<header
			css={`
				display: flex;
				flex-direction: column;
				background: #f8f8f8;
				padding: 2em 0;
				@media screen and (max-width: 42.1875em) {
					text-align: center;
				}
			`}
		>
			<div
				css={`
					max-width: 96rem;
					width: 90%;
					margin: auto;
					display: flex;
					justify-content: space-between;
					align-items: center;
					@media screen and (max-width: 42.1875em) {
						flex-direction: column;
					}
				`}
			>
				<div>
					<h1
						css={`
							color: #143774;
							font-size: 3.375rem;
							font-family: "Lora", serif;
							font-weight: 400;
						`}
					>
						Living the simple life
					</h1>
					<p
						css={`
							color: #1792d2;
							font-size: 1rem;
							font-weight: 700;
						`}
					>
						A Blog Exploring Minimalism Fife
					</p>
				</div>
				<nav>
					<ul
						css={`
							display: flex;
							justify-content: center;
							@media screen and (max-width: 42.1875em) {
								flex-direction: column;
							}
						`}
					>
						<li
							css={`
								margin-left: 1em;
								@media screen and (max-width: 42.1875em) {
									margin: 0.5em 0;
								}
							`}
						>
							<a
								css={`
									color: #707070;
									font-weight: 700;
									&:hover,
									&:focus {
										color: #1792d2;
									}
								`}
								href="/"
							>
								Home
							</a>
						</li>
						<li
							css={`
								margin-left: 1em;
								@media screen and (max-width: 42.1875em) {
									margin: 0.5em 0;
								}
							`}
						>
							<a
								css={`
									color: #707070;
									font-weight: 700;
									&:hover,
									&:focus {
										color: #1792d2;
									}
								`}
								href="/"
							>
								About Me
							</a>
						</li>
						<li
							css={`
								margin-left: 1em;
								@media screen and (max-width: 42.1875em) {
									margin: 0.5em 0;
								}
							`}
						>
							<a
								css={`
									color: #707070;
									font-weight: 700;
									&:hover,
									&:focus {
										color: #1792d2;
									}
								`}
								href="/"
							>
								Recent Posts
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
