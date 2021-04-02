import Head from "next/head";
import styled from "styled-components/macro";

function JakeAndElwood() {
	return (
		<>
			<Head>
				<title>Jake and Elwood</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap"
				/>
			</Head>
			<div
				css={`
					font-family: "Montserrat", sans-serif;
					font-size: 1.6rem;
					color: #404040;
				`}
			>
				{/*<header>
											<div>
												<a href="/">
													<img src="/img/jake-and-elwood/logo.png" alt="" />
												</a>
												<nav>
													<ul>
														<li>
															<a href="/">home</a>
														</li>
														<li>
															<a href="/">about us</a>
														</li>
														<li>
															<a href="/">contact</a>
														</li>
													</ul>
												</nav>
											</div>
										</header>*/}
				<main>
					<section>
						<h1>
							The only marketing agency on a mission from God, fully dedicated
							to increase your web traffic.
						</h1>
						<p>
							We’re two brothers from Chicago that are trying to pay back our
							debt. We can help you with SEO, SEM content marketing and whatever
							else.
						</p>
						<a href="/">contact us</a>
					</section>
					<section>
						<div>
							<h2>About Us</h2>
							<p>
								We grew up in downtown Chicago, and we used to play in a band.
								Jake loves fried chicken, and Elwood loves dry white toast.
							</p>
						</div>
						<div>
							<h2>Our skills</h2>
							<p>
								Elwood is an expert in SEO, SEM, and driving from the police.
								Jake is our social media specialist, and he has an amazing
								voice.
							</p>
						</div>
						<div>
							<h2>Get in touch</h2>
							<p>
								Send us an email with some info about what help you need and
								we’ll drive over to your place in our Bluesmobile the following
								day to discuss the deal.
							</p>
						</div>
					</section>
				</main>
				<footer>
					<div>
						<img src="/img/jake-and-elwood/logo.png" alt="" />
						<p>
							Two brothers from Chicago that are just trying to pay back their
							debt by helping others with their SEO, SEM, and Content Marketing
							needs.
						</p>
						<p>© Jake&Elwood 2019</p>
					</div>
					<ul>
						<li>
							<a href="/"></a>
						</li>
						<li>
							<a href="/"></a>
						</li>
						<li>
							<a href="/"></a>
						</li>
					</ul>
				</footer>
			</div>
		</>
	);
}

export default JakeAndElwood;
