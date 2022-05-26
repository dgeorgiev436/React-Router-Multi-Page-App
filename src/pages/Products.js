import {Link} from "react-router-dom"

const Products = () => {
	
	return (
		<section>
			<h1>The Products page</h1>
			<ul>
				<li>
					<Link to="/products/book">Book</Link>
				</li>
				<li>
					<Link to="/products/carpet">Carpet</Link>
				</li>
				<li>
					<Link to="/products/course">Online Course</Link>
				</li>
			</ul>
		</section>
	)
}

export default Products;