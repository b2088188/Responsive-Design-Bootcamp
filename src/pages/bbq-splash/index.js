import Head from "next/head";
import styled from "styled-components/macro";

function BBQSplash() {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>BBQ Splash</title>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,900&display=swap"
				/>
			</Head>
			<div
				css={`
					font-family: "Source Sans Pro", sans-serif;
					font-size: 1.6rem;
					color: #404040;
					text-align: center;
					@media screen and (min-width: 31.25em) {
						font-size: 1.8rem;
						display: flex;
					}
				`}
			>
				<div
					css={`
						background-color: #404040;
						padding: 0 0.5em 2em 0.5em;
						background: linear-gradient(
								rgba(10, 10, 10, 0.7),
								rgba(10, 10, 10, 0.7)
							),
							url(/img/ribs.jpg) no-repeat center / cover;
						@media screen and (min-width: 31.25em) {
							flex: 0 0 60%;
							min-height: 100vh;
						}
					`}
				>
					<div
						css={`
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							align-items: center;
							height: 100%;
							max-width: 40rem;
							margin: 0 auto;
						`}
					>
						<h1
							css={`
								font-weight: 300;
								font-size: 3.6rem;
								order: 2;
								color: #fff;
								@media screen and (min-width: 31.25em) {
									font-size: 5.6rem;
								}
							`}
						>
							Learn how to make
							<strong
								css={`
									font-weight: 900;
								`}
							>
								the best BBQ ribs
							</strong>
							in town
						</h1>
						<p
							css={`
								color: #f18119;
								font-weight: 900;
								font-size: 1.6rem;
								text-transform: uppercase;
								order: 3;
								@media screen and (min-width: 31.25em) {
									font-size: 2.8rem;
								}
							`}
						>
							Join us for this live webinar
						</p>
						<p
							css={`
								order: 1;
								font-size: 1rem;
								color: #f18119;
								font-weight: 900;
								text-transform: uppercase;
								border-top: solid 5px #f18119;
								border-image: linear-gradient(90deg, #ff713b, #ffa51d) 1;
								padding-top: 2px;
							`}
						>
							Mouthwateringly delicious
						</p>
					</div>
				</div>
				<div
					css={`
						padding: 2em 1em;
						@media screen and (min-width: 31.25em) {
							flex: 0 0 40%;
							min-height: 100vh;
							display: flex;
							flex-direction: column;
							justify-content: center;
						}
					`}
				>
					<div
						css={`
							max-width: 40rem;
							margin: auto;
						`}
					>
						<h2
							css={`
								@media screen and (min-width: 31.25em) {
									font-size: 2.8rem;
								}
							`}
						>
							Become a BBQ master!
						</h2>
						<p
							css={`
								font-weight: 900;
								color: #f18119;
								margin-top: 0;
								text-transform: uppercase;
							`}
						>
							Register Today
						</p>
						<p>
							BBQ isn't just standing in front of your grill with it on full
							blast and hoping for the best. It's an art! One way to speed up
							the process is to learn from the best. You can do just that by
							signing up for this free webinar!
						</p>
						<form
							css={`
								width: 80%;
								max-width: 30rem;
								& > *:not(:last-child) {
									margin-bottom: 0.75em;
								}
							`}
						>
							<input
								css={`
									width: 100%;
									font-family: inherit;
									text-align: inherit;
									padding: 0.25em;
									font-size: inherit;
									border: solid 1px #404040;
									border-radius: 5px;
									transform: scale(1);
									transition: transform 0.25s;
									&:focus {
										transform: scale(1.1);
										cursor: pointer;
									}
								`}
								type="text"
								required
								placeholder="first name"
							/>
							<input
								css={`
									width: 100%;
									font-family: inherit;
									text-align: inherit;
									padding: 0.25em;
									font-size: inherit;
									border: solid 1px #404040;
									border-radius: 5px;
									transform: scale(1);
									transition: transform 0.25s;
									&:focus {
										transform: scale(1.1);
										cursor: pointer;
									}
								`}
								type="email"
								required
								placeholder="email"
							/>
							<button
								css={`
									text-transform: uppercase;
									font-weight: 700;
									letter-spacing: 1px;
									padding: 0.5em 1.5em;
									width: 100%;
									border-radius: 5px;
									border: none;
									color: #fff;
									background: linear-gradient(135deg, #ffa51d, #ff713b);
									transform: scale(1);
									transition: transform 0.25s;
									&:hover,
									&:focus {
										transform: scale(1.1);
										cursor: pointer;
									}
								`}
							>
								Register
							</button>
						</form>
						<p
							css={`
								font-size: 1rem;
								letter-spacing: 1.1px;
							`}
						>
							We'll never share your information without your permission
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default BBQSplash;
