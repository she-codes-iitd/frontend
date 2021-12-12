import React from "react";
import { Spinner } from "react-bootstrap";

function Loading({ size = 15 }) {
	return (
		<div
			style={{
				display: "inline",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				height: "100%",
			}}
		>
			<Spinner
				style={{
					width: size,
					height: size,
				}}
				animation="border" variant="dark"
			/>
		</div>
	);
}

export default Loading;