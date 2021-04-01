import styled from "styled-components/macro";

function ArticleRecent({ children }) {
	return (
		<article
			css={`
				display: flex;
				flex-direction: column;
				margin-bottom: 2em;
				@media screen and (min-width: 42.1875em) {
					flex-direction: row;
					justify-content: space-between;
				}
			`}
		>
			{children}
		</article>
	);
}

function ArticleRecentMain({ title, description }) {
	return (
		<div
			css={`
				order: 2;
				@media screen and (min-width: 31.25em) {
					margin-top: -2.5em;
				}
				@media screen and (min-width: 42.1875em) {
					flex: 0 0 68%;
				}
			`}
		>
			<h2
				css={`
					font-size: 2.4rem;
				`}
			>
				{title}
			</h2>
			<p
				css={`
					font-size: 1.8rem;
				`}
			>
				{description}
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
		</div>
	);
}
ArticleRecent.Main = ArticleRecentMain;

function ArticleRecentSecondary({ img, info }) {
	return (
		<div
			css={`
				order: 1;
				@media screen and (min-width: 42.1875em) {
					flex: 0 0 30%;
				}
			`}
		>
			<img
				css={`
					max-width: 100%;
					display: block;
					@media screen and (min-width: 42.1875em) {
						min-height: 25rem;
						object-fit: cover;
					}
				`}
				src={img}
				alt=""
			/>
			<p
				css={`
					font-size: 1.4rem;
					margin: 2em 0;
					@media screen and (min-width: 31.25em) {
						text-align: end;
					}
				`}
			>
				{info}
			</p>
		</div>
	);
}

ArticleRecent.Secondary = ArticleRecentSecondary;

export { ArticleRecent };
