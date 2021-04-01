import Head from "next/head";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import styled from "styled-components/macro";
import { ArticleRecent } from "components/styles/article";

function SimpleLife() {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>About Me</title>
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
						<img
							css={`
								max-height: 30rem;
								width: 100%;
								object-fit: cover;
								margin-bottom: 2em;
							`}
							src="/img/about-me.jpg"
							alt=""
						/>
						<h2>My name is John and living the simple life saved my life</h2>
						<p>
							I used to be a pack rat. I had so many things that I thought that
							I loved, but the truth was I couldn't even appreciate any of it
							because there was too much.
						</p>
						<p>
							Things were terrible. I had a job that I hated, a home that I
							didn't want to live in, and I couldn't hold a relationship.
						</p>
						<h3
							css={`
								color: #1792d2;
							`}
						>
							How I turned things around
						</h3>
						<p>
							I was on the verge of a breakdown when I got rid of everything. I
							literally put 90% of my possessions in the garbage, sold my place
							and moved into a smaller apartment, and I quit my job.
						</p>
						<p>
							It wasn't easy at all, but everything around me was in such a bad
							place, I didn't know what else to do. And it worked.
						</p>
						<h3
							css={`
								color: #1792d2;
							`}
						>
							Now I live the simple life
						</h3>
						<p>
							Now that I'm living a simple life, things are so much better. I'm
							less stressed, enjoy life and work more, and I have more free time
							to enjoy.
						</p>
						<p>
							With how much it turned my life around, I felt like I had no
							choice but to start sharing how I did it, and how others can
							benefit from living a simple life as well, which is why I started
							this site!
						</p>
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
