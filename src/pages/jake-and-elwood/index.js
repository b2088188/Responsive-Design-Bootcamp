import { useState } from "react";
import Head from "next/head";
import styled from "styled-components/macro";

function JakeAndElwood() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	return (
		<>
			<Head>
				<title>Jake and Elwood</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css"
				/>
			</Head>
			<div
				css={`
					font-family: "Montserrat", sans-serif;
					font-size: 1.6rem;
					color: #404040;
					line-height: 1.6;

					h1,
					h2,
					strong {
						font-weight: 700;
					}
				`}
			>
				<header
					css={`
						display: grid;
						grid-template-columns:
							[space1-start] minmax(1.6rem, 1fr)
							[space1-end content-start] minmax(0, 50rem)
							[content-end space2-start] minmax(1.6rem, 1fr)
							[space2-end];
						background: #000;
						@media screen and (min-width: 37.5em) {
							background: transparent;
							position: absolute;
							width: 100%;
						}
					`}
				>
					<div
						css={`
							grid-column: content-start / content-end;
							display: flex;
						`}
					>
						<a
							href="/"
							css={`
								background: #ffe600;
								padding-top: 2em;
							`}
						>
							<img src="/img/jake-and-elwood/logo.png" alt="" />
						</a>
						<button
							onClick={() => setIsNavOpen((prev) => !prev)}
							aria-label="Close Navigation"
							css={`
								border: none;
								background: none;
								color: #fff;
								font-weight: 700;
								font-size: 3.2rem;
								padding: 0.5em;
								margin-left: auto;
								&:hover {
									cursor: pointer;
								}
								@media screen and (min-width: 37.5em) {
									display: none;
								}
							`}
						>
							&#9776;
						</button>
						<nav
							css={`
								position: fixed;
								background: #000;
								width: 100%;
								top: 0;
								left: 100%;
								bottom: 0;
								right: 0;
								transition: transform 0.25s, opacity 0.4s;
								${isNavOpen
									? `
									transform:translateX(-100%) scale(1); opacity:1;
									`
									: `transform:translateX(0) scale(0); opacity:0; `}
								@media screen and (min-width:37.5em) {
									position: initial;
									opacity: 1;
									transform: translateX(0) scale(1);
									background: transparent;
								}
							`}
						>
							<button
								onClick={() => setIsNavOpen((prev) => !prev)}
								aria-label="Close Navigation"
								css={`
									border: none;
									background: none;
									color: #ffe600;
									font-weight: 700;
									font-size: 3.2rem;
									padding: 0.5em;
									position: absolute;
									&:hover {
										cursor: pointer;
									}
									@media screen and (min-width: 37.5em) {
										display: none;
									}
								`}
							>
								&times;
							</button>
							<ul
								css={`
									display: flex;
									flex-direction: column;
									height: 100%;
									justify-content: space-around;
									align-items: center;
									border: solid 2px magenta;
									@media screen and (min-width: 37.5em) {
										flex-direction: row;
										justify-content: flex-start;
										border: none;
									}
								`}
							>
								<li
									css={`
										margin-left: 2em;
									`}
								>
									<a
										href="/"
										css={`
											color: #fff;
											font-size: 4.8rem;
											font-weight: 700;
											&:hover,
											&:focus {
												color: #ffe600;
											}
											@media screen and (min-width: 37.5em) {
												font-size: 1.6rem;
											}
										`}
									>
										home
									</a>
								</li>
								<li
									css={`
										margin-left: 2em;
									`}
								>
									<a
										href="/"
										css={`
											color: #fff;
											font-size: 4.8rem;
											font-weight: 700;
											&:hover,
											&:focus {
												color: #ffe600;
											}
											@media screen and (min-width: 37.5em) {
												font-size: 1.6rem;
											}
										`}
									>
										about us
									</a>
								</li>
								<li
									css={`
										margin-left: 2em;
									`}
								>
									<a
										href="/"
										css={`
											color: #fff;
											font-size: 4.8rem;
											font-weight: 700;
											&:hover,
											&:focus {
												color: #ffe600;
											}
											@media screen and (min-width: 37.5em) {
												font-size: 1.6rem;
											}
										`}
									>
										contact
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</header>
				<main>
					<section
						css={`
							display: grid;
							grid-template-columns:
								[space1-start] minmax(1.6rem, 1fr)
								[space1-end content-start] minmax(0, 50rem)
								[content-end space2-start] minmax(1.6rem, 1fr)
								[space2-end];
							grid-gap: 1.5em 0;
							background: linear-gradient(
									rgba(30, 30, 30, 0.5),
									rgba(30, 30, 30, 0.5)
								),
								url(/img/jake-and-elwood/hero-bg.jpg) no-repeat bottom / cover;
							color: #fff;
							padding: 8em 0 4em 0;
							& > * {
								grid-column: space1-end / content-end;
							}
							@media screen and (min-width: 25em) {
								& > * {
									margin-right: 20%;
								}
							}
							@media screen and (min-width: 37.5em) {
								padding: 10em 0 6em 0;
								grid-template-columns:
									[space1-start] minmax(1.6rem, 1fr)
									[space1-end content-start] repeat(
										3,
										[col-start] minmax(15rem, 32rem) [col-end]
									)
									[content-end space2-start] minmax(1.6rem, 1fr)
									[space2-end];
								& > * {
									grid-column: col-start 1 / col-end 2;
								}
							}
						`}
					>
						<h1
							css={`
								font-size: 2.4rem;
								line-height: 1.4;
							`}
						>
							The only marketing agency on
							<span
								css={`
									color: #ffe600;
								`}
							>
								a mission from God
							</span>
							, fully dedicated to increase your web traffic.
						</h1>
						<p>
							We???re two brothers from Chicago that are trying to pay back our
							debt. We can help you with
							<strong>SEO, SEM content marketing</strong> and whatever else.
						</p>
						<a
							href="/"
							css={`
								padding: 0.5em 1.75em;
								font-weight: 700;
								background: #ffe600;
								color: #333;
								justify-self: start;
								&:hover {
									cursor: pointer;
									background: #ffb400;
								}
							`}
						>
							contact us
						</a>
					</section>
					<section
						css={`
							display: grid;
							grid-template-columns:
								[space1-start] minmax(1.6rem, 1fr)
								[space1-end content-start] minmax(0, 50rem)
								[content-end space2-start] minmax(1.6rem, 1fr)
								[space2-end];
							grid-gap: 1.5em 0;
							padding: 4em 0;
							@media screen and (min-width: 37.5em) {
								grid-template-columns:
									[space1-start] minmax(1.6rem, 1fr)
									[space1-end content-start] repeat(
										3,
										[col-start] minmax(15rem, 32rem) [col-end]
									)
									[content-end space2-start] minmax(1.6rem, 1fr)
									[space2-end];
								grid-gap: 0 2em;
							}
						`}
					>
						<div
							css={`
								grid-column: space1-end / content-end;
								text-align: center;
								@media screen and (min-width: 37.5em) {
									grid-column: col-start 1 / col-end 1;
								}
							`}
						>
							<h2
								css={`
									font-size: 1.8rem;
									color: #333;
									&:after {
										content: "";
										display: block;
										height: 3px;
										width: 5rem;
										background: #ffe600;
										margin: 0 auto;
									}
								`}
							>
								About Us
							</h2>
							<p>
								We grew up in downtown Chicago, and we used to play in a band.
								Jake loves fried chicken, and Elwood loves dry white toast.
							</p>
						</div>
						<div
							css={`
								grid-column: space1-end / content-end;
								text-align: center;
								@media screen and (min-width: 37.5em) {
									grid-column: col-start 2 / col-end 2;
								}
							`}
						>
							<h2
								css={`
									font-size: 1.8rem;
									color: #333;
									&:after {
										content: "";
										display: block;
										height: 3px;
										width: 5rem;
										background: #ffe600;
										margin: 0 auto;
									}
								`}
							>
								Our skills
							</h2>
							<p>
								Elwood is an expert in SEO, SEM, and driving from the police.
								Jake is our social media specialist, and he has an amazing
								voice.
							</p>
						</div>
						<div
							css={`
								grid-column: space1-end / content-end;
								text-align: center;
								@media screen and (min-width: 37.5em) {
									grid-column: col-start 3 / col-end 3;
								}
							`}
						>
							<h2
								css={`
									font-size: 1.8rem;
									color: #333;
									&:after {
										content: "";
										display: block;
										height: 3px;
										width: 5rem;
										background: #ffe600;
										margin: 0 auto;
									}
								`}
							>
								Get in touch
							</h2>
							<p>
								Send us an email with some info about what help you need and
								we???ll drive over to your place in our Bluesmobile the following
								day to discuss the deal.
							</p>
						</div>
					</section>
				</main>
				<footer
					css={`
						display: grid;
						grid-template-columns:
							[space1-start] minmax(1.6rem, 1fr)
							[space1-end content-start] minmax(0, 50rem)
							[content-end space2-start] minmax(1.6rem, 1fr)
							[space2-end];
						grid-gap: 1.5em 0;
						background: #ebebeb;
						padding: 4em 0;
						text-align: center;
						@media screen and (min-width: 37.5em) {
							grid-template-columns:
								[space1-start] minmax(1.6rem, 1fr)
								[space1-end content-start] repeat(
									3,
									[col-start] minmax(15rem, 32rem) [col-end]
								)
								[content-end space2-start] minmax(1.6rem, 1fr)
								[space2-end];
						}
					`}
				>
					<div
						css={`
							grid-column: space1-end / content-end;
							order: 2;
							@media screen and (min-width: 37.5em) {
								order: 0;
								grid-column: col-start 1 / col-end 2;
								text-align: start;
							}
						`}
					>
						<img
							css={`
								opacity: 0.3;
							`}
							src="/img/jake-and-elwood/logo.png"
							alt=""
						/>
						<p
							css={`
								opacity: 0.3;
							`}
						>
							Two brothers from Chicago that are just trying to pay back their
							debt by helping others with their SEO, SEM, and Content Marketing
							needs.
						</p>
						<p
							css={`
								opacity: 0.3;
								font-size: 1.2rem;
								margin-top: 4em;
							`}
						>
							?? Jake&Elwood 2019
						</p>
					</div>
					<ul
						css={`
							grid-column: space1-end / content-end;
							order: 1;
							display: flex;
							justify-content: center;
							@media screen and (min-width: 37.5em) {
								order: 0;
								grid-column: col-start 3 / col-end 3;
								justify-content: flex-end;
							}
						`}
					>
						<li>
							<a
								href="/"
								css={`
									color: #333;
									font-size: 2.8rem;
									margin: 0 0.5em;
									&:hover {
										color: #777;
									}
								`}
							>
								<i className="fab fa-facebook-square"></i>
							</a>
						</li>
						<li>
							<a
								href="/"
								css={`
									color: #333;
									font-size: 2.8rem;
									margin: 0 0.5em;
									&:hover {
										color: #777;
									}
								`}
							>
								<i className="fab fa-twitter"></i>
							</a>
						</li>
						<li>
							<a
								href="/"
								css={`
									color: #333;
									font-size: 2.8rem;
									margin: 0 0.5em;
									&:hover {
										color: #777;
									}
								`}
							>
								<i className="fab fa-instagram"></i>
							</a>
						</li>
					</ul>
				</footer>
			</div>
		</>
	);
}

export default JakeAndElwood;
