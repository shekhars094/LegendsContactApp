import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<Navbar color="dark" light>
			<NavbarBrand tag={Link} to="/" className="text-white">
				Contact App
			</NavbarBrand>
			<NavbarText className="text-white float-right">
				Legends Contact
			</NavbarText>
		</Navbar>
	);
};

export default Header;
