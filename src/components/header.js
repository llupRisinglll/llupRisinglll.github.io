import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Header = ({ siteTitle }) => (
	<header
		style={{
			margin: `0 auto`,
			padding: `var(--space-2) var(--size-gutter)`,
			display: `flex`,
			alignItems: `center`,
			justifyContent: `space-between`,
		}}
	>

		<div style={{position: "relative"}}>
			<Link
				to="/"
				style={{
					fontSize: `var(--font-sm)`,
					textDecoration: `none`,
				}}
			>
				Sarmati
			</Link>
		</div>
		<div>
		<Link
			to="/"
			style={{
				fontSize: `var(--font-sm)`,
				textDecoration: `none`,
			}}
		>
			{/* {siteTitle} */}
			Crafting Calculator
		</Link>
		</div>

		<StaticImage
			src="../images/pkd.png"
			loading="eager"
			width={64}
			quality={95}
			formats={["auto", "webp", "avif"]}
			alt=""
			// style={{ marginBottom: `var(--space-3)` }}
		/>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
