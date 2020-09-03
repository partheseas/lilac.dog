import Head from "next/head";
import React from "react";

const Lilac = () => {
	return (
		<>
			<Head>
				<title>puppy</title>
				<meta property="og:title" content="puppy" key="title" />
			</Head>
			<div className="profile">
				<div>
					<img src="bone.svg" />
					<h1>it/its</h1>
				</div>
			</div>
			<p className="footer">
				&copy; 2020 <img src="paw.svg" style={{ height: 28 }} />{" "}
				<a href="https://mckay.la">McKayla</a>
			</p>
		</>
	);
};

export default Lilac;
