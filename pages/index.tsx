import Head from "next/head";

const Lilac = () => {
	return (
		<>
			<Head>
				<title>puppy</title>
				<meta property="og:title" content="puppy" key="title" />
			</Head>
			<div className="profile">
				<div>
					<img src="/bone.svg" />
				</div>
			</div>
			<p className="footer">
				&copy; 2021 <img src="/paw.svg" style={{ height: 28 }} />{" "}
				<a href="https://mckay.la">McKayla</a>
			</p>
		</>
	);
};

export default Lilac;
