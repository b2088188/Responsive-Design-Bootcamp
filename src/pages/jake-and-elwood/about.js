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
				<main
					css={`
						display: grid;

						grid-template-columns:
							[space1-start] minmax(1.6em, 1fr)
							[space1-end content-start] minmax(0, 50rem)
							[content-end space2-start] minmax(1.6em, 1fr)
							[space2-end];
						padding: 4em 0;
						grid-gap: 0 1.5em;

						& > * {
							grid-column: content-start/content-end;
						}
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
					<h1
						css={`
							font-size: 4.8rem;
							justify-self: center;
							position: relative;
							&:after {
								content: "";
								position: absolute;
								height: 2.5rem;
								width: 25rem;
								background: #ffe600;
								bottom: 15px;
								left: 10px;
								z-index: -1;
							}
						`}
					>
						About us.
					</h1>
					<p
						css={`
							font-size: 1.8rem;
							margin: 0.5em 0 3em 0;
						`}
					>
						We’re two brothers from Chicago. We can help you with SEO, SEM,
						content marketing and whatever else.
					</p>
					<img
						css={`
							max-width: 100%;
							margin-bottom: 1.5em;
							box-shadow: 5px 5px 0 black, 10px 10px 0 #ffe600;
							@media screen and (min-width: 37.5em) {
								grid-column: col-start 1 / col-end 1;
							}
						`}
						src="/img/jake-and-elwood/about-me.jpg"
						alt=""
					/>
					<div
						css={`
							@media screen and (min-width: 37.5em) {
								grid-column: col-start 2 / col-end 3;
							}
						`}
					>
						<h2
							css={`
								font-size: 1.8rem;

								&:after {
									content: "";
									display: block;
									height: 3px;
									width: 5rem;
									background: #ffe600;
								}
							`}
						>
							We're really great guys
						</h2>
						<p>
							We grew up in downtown Chicago, and we used to play in a band.
							Jake loves fried chicken, and Elwood loves dry white toast.
						</p>
						<p>
							While the band didn't make it, the hard work we put in trying to
							promote it sure did. Like a lot of people, we needed a website,
							and we needed to rank. The "experts" didn't seem to know what they
							were talking about, so we figured it out on our own.
						</p>
						<h2
							css={`
								font-size: 1.8rem;
								&:after {
									content: "";
									display: block;
									height: 3px;
									width: 5rem;
									background: #ffe600;
								}
							`}
						>
							We can do all sorts of great stuff
						</h2>
						<p>
							Honestly most people in this industry seem to be full of crap. We
							don't care what you've heard, or what others have told you, we get
							results and at the end of the day, what else matters?
						</p>
						<p>
							So sure, maybe we're a bit different from what you'd expect, but
							if you want to rank, market, and build your way to the top, we're
							the brothers for you.
						</p>
					</div>
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
							© Jake&Elwood 2019
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
