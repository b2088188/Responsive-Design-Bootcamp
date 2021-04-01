import Head from "next/head";
import styled from "styled-components/macro";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import { ArticleRecent } from "components/styles/article";

function SimpleLife() {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Simple Life</title>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Lora|Ubuntu:300,400,700&display=swap"
				/>
			</Head>
			<div>
				<Header />
				<div
					css={`
						display: flex;
						max-width: 100rem;
						margin: auto;
						flex-direction: column;
						@media screen and (min-width: 42.1875em) {
							flex-direction: row;
							justify-content: space-between;
						}
					`}
				>
					<main
						css={`
							@media screen and (min-width: 42.1875em) {
								flex: 0 0 70%;
							}
						`}
					>
						<article
							css={`
								border-bottom: solid 1px #707070;
								padding-bottom: 1em;
								margin-bottom: 2em;
								@media screen and (min-width: 42.1875em) {
									display: flex;
									flex-direction: column;
								}
							`}
						>
							<h2
								css={`
									font-size: 2.4rem;
								`}
							>
								Finding simplicity in life Life
							</h2>
							<img
								css={`
									max-width: 100%;
									display: block;
									@media screen and (min-width: 42.1875em) {
										order: -2;
									}
								`}
								src="/img/life.jpg"
								alt=""
							/>
							<p
								css={`
									font-size: 1.4rem;
									margin: 2em 0;
									@media screen and (min-width: 42.1875em) {
										order: -1;
									}
								`}
							>
								July 23, 2019 | 3 comments
							</p>
							<p
								css={`
									font-size: 1.8rem;
								`}
							>
								<strong
									css={`
										font-weight: 700;
									`}
								>
									Life can get complicated really quickly
								</strong>
								, but it doesn't have to be! There are many ways to simplify
								your life,
								<a
									href="/"
									css={`
										font-size: 1.8rem;
										color: #1792d2;
										text-decoration: underline;

										&:hover,
										&:focus {
											color: #143774;
										}
									`}
								>
									a few of which we've explored in the past.
								</a>
								This week we're taking a bit of a approach though, in how you
								can find simplicity in the life you already living.
							</p>
							<a
								href="/"
								css={`
									font-size: 1.4rem;
									color: #1792d2;
									font-weight: 700;
									text-transform: uppercase;
									letter-spacing: 2.8px;
									&:hover,
									&:focus {
										color: #143774;
										text-decoration: underline;
									}
								`}
							>
								continue reading
							</a>
						</article>

						<ArticleRecent>
							<ArticleRecent.Main
								title="Keeping cooking simple"
								description="Food is a very important part of everyone's life. If you want
									to be healthy, you have to eat healthy. One of the easiest
									ways to do that is to keep your cooking nice and simple."
							/>
							<ArticleRecent.Secondary
								img="/img/food.jpg"
								info="July 19, 2019 | 3 comments"
							/>
						</ArticleRecent>
						<ArticleRecent>
							<ArticleRecent.Main
								title="Simplicity and work"
								description="Work is often a major source of stress. People get frustrated,
									it ruins their relationship with others and it leads to
									burnout. By keeping your work life as simple as possible, it
									will help balance everything out."
							/>
							<ArticleRecent.Secondary
								img="/img/work.jpg"
								info="July 12, 2019 | 3 comments"
							/>
						</ArticleRecent>
						<ArticleRecent>
							<ArticleRecent.Main
								title="Simple decorations"
								description="A home isn't a home until you've decorated a little. People
									either don't decorate, or they go overboard and it doesn't
									have the impact they were hoping for. Staying simple will help
									draw the eye where you want it to and make things pop like
									never before."
							/>
							<ArticleRecent.Secondary
								img="/img/deco.jpg"
								info="July 3, 2019 | 3 comments"
							/>
						</ArticleRecent>
					</main>
					<aside
						css={`
							@media screen and (min-width: 42.1875em) {
								flex: 0 0 25%;
								min-width: 20rem;
								margin-left: 1em;
							}
						`}
					>
						<div
							css={`
								border: 20px solid #efefef;
								margin-bottom: 2em;
								padding: 1em;
							`}
						>
							<h2
								css={`
									color: #143774;
									font-size: 1.8rem;
									letter-spacing: 3.6px;
									text-transform: uppercase;
									font-weight: bold;
									line-height: 1.4;
								`}
							>
								About Me
							</h2>
							<img
								css={`
									max-width: 100%;
									display: block;
								`}
								src="/img/about-me.jpg"
								alt=""
							/>
							<p
								css={`
									color: #143774;
									font-size: 1.4rem;
								`}
							>
								I find life better, and I'm happier, when things are nice and
								simple.
							</p>
						</div>
						<div
							css={`
								border: 20px solid #efefef;
								margin-bottom: 2em;
								padding: 1em;
								& > *:not(:last-child) {
									margin-bottom: 1em;
								}
							`}
						>
							<h2
								css={`
									color: #143774;
									font-size: 1.8rem;
									letter-spacing: 3.6px;
									text-transform: uppercase;
									font-weight: bold;
									line-height: 1.4;
								`}
							>
								Recent Posts
							</h2>
							<div
								css={`
									display: flex;
									flex-direction: column;
									border-bottom: solid 1px #707070;
								`}
							>
								<h3
									css={`
										font-size: 1.8rem;
										order: 2;
										line-height: 1.4;
									`}
								>
									Keeping cooking simple
								</h3>
								<img
									css={`
										max-width: 100%;
										display: block;
										order: 1;
									`}
									src="/img/food.jpg"
									alt=""
								/>
							</div>
							<div
								css={`
									display: flex;
									flex-direction: column;
									border-bottom: solid 1px #707070;
								`}
							>
								<h3
									css={`
										font-size: 1.8rem;
										order: 2;
										line-height: 1.4;
									`}
								>
									Simplicity and work
								</h3>
								<img
									css={`
										max-width: 100%;
										display: block;
										order: 1;
									`}
									src="/img/work.jpg"
									alt=""
								/>
							</div>
							<div
								css={`
									display: flex;
									flex-direction: column;
								`}
							>
								<h3
									css={`
										font-size: 1.8rem;
										order: 2;
										line-height: 1.4;
									`}
								>
									Simple decorations
								</h3>
								<img
									css={`
										max-width: 100%;
										display: block;
										order: 1;
									`}
									src="/img/deco.jpg"
									alt=""
								/>
							</div>
						</div>
					</aside>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default SimpleLife;
