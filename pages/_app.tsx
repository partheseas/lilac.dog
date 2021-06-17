import type { AppProps } from "next/app";

import "./_app.css";

export default function App(props: AppProps) {
	// The type Next provides for pageProps is just any, which is lame
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const { Component, pageProps } = props;
	return <Component {...pageProps} />;
}
