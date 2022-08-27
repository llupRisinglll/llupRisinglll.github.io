import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
	<Layout>
		<Seo title="Home" />
		<div className={styles.textCenter}>

			<div style={{marginBottom: 20, fontStyle: "italic"}}>More features coming soon!</div>

			<div className={styles.craft_option}>
				<div>
					<div className={styles.label}>Rare</div>
				</div>
				<div className={styles.active}>
					<div className={styles.label}>Epic</div>
				</div>
				<div>
					<div className={styles.label}>Legendary</div>
				</div>
			</div>
			<div>
				<div style={{height: 85}}>
					<div className={styles.material_nav}>
						<div className={styles.active}>
							<StaticImage
								src="../images/materials/scale_e.png"
								loading="eager"
								quality={95}
								formats={["auto", "webp", "avif"]}
								alt=""
							/>
							<StaticImage
								src="../images/materials/claw_e.png"
								loading="eager"
								quality={95}
								formats={["auto", "webp", "avif"]}
								alt=""
							/>

							<span>Weapon/Secondary Weapon</span>
						</div>

						<div>
							<StaticImage
								src="../images/materials/leather_e.png"
								loading="eager"
								quality={95}
								formats={["auto", "webp", "avif"]}
								alt=""
							/>
							<span>Armor</span>
						</div>
						<div>
							<StaticImage
								src="../images/materials/horn_e.png"
								loading="eager"
								quality={95}
								formats={["auto", "webp", "avif"]}
								alt=""
							/>
							
							<StaticImage
								src="../images/materials/eye_e.png"
								loading="eager"
								quality={95}
								formats={["auto", "webp", "avif"]}
								alt=""
							/>
							<span>Accesories</span>
						</div>

					</div>
				</div>

				<ul className={styles.list} style={{listStyleType: "none"}}>
					<li>
						<div>
							<span>Select craft quantity</span> <input type="number" placeholder="1" defaultValue={1} />	
						</div>	
						<div>
							<h5 style={{margin: 0, marginTop: 20}}>Currency Owned:</h5>
							<span style={{fontStyle: "italic", fontSize: 11}}>Check your inventory and enter your available darksteel and copper</span>
						</div>

						<div>
							
							<StaticImage
								src="../images/currency/darksteel.png"
								loading="eager"
								quality={95}
								formats={["auto", "webp", "avif"]}
								alt=""
							/>

							<input type="number" placeholder="1" defaultValue={0} />
						</div>

						<div>
							
							<StaticImage
								src="../images/currency/copper.png"
								loading="eager"
								quality={95}
								formats={["auto", "webp", "avif"]}
								alt=""
							/>
							<input type="number" placeholder="1" defaultValue={0} />
						</div>

						<div>
							<h5 style={{margin: 0, marginTop: 20}}>Materials Owned:</h5>
							<span style={{fontStyle: "italic", fontSize: 11}}>Check your inventory and enter the quantity of material you have</span>
						</div>

						<div>
							
							<StaticImage
								src="../images/materials/glitter.png"
								loading="eager"
								quality={95}
								formats={["auto", "webp", "avif"]}
								alt=""
							/>

							<input type="number" placeholder="1" defaultValue={0}  style={{width: 100}}   min={0} />

							<StaticImage
								src="../images/materials/glitter.png"
								loading="eager"
								quality={95}
								formats={["auto", "webp", "avif"]}
								alt=""
							/>

							<input type="number" placeholder="1" defaultValue={0}  style={{width: 100}}  min={0}/>

							<span>500,000</span>

						</div>
					</li>

					<li style={{borderLeft: "1px solid #242E45"}}>
						<h3 style={{marginTop: 0}}>Resources you need</h3>
						<div>
							<StaticImage
								src="../images/currency/darksteel.png"
								loading="eager"
								quality={95}
								formats={["auto", "webp", "avif"]}
								alt=""
							/>
							123213213
						</div>

						<div>
							<StaticImage
								src="../images/currency/copper.png"
								loading="eager"
								quality={95}
								formats={["auto", "webp", "avif"]}
								alt=""
							/>

							123123123
						</div>

						<div>
							<StaticImage
								src="../images/materials/glitter.png"
								loading="eager"
								quality={95}
								formats={["auto", "webp", "avif"]}
								alt=""
							/>
							123123123
						</div>
						
						<h3>Materials you need</h3>
					</li>

				</ul>
			</div>
		</div>
	</Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
