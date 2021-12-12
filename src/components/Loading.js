import React from "react";
import { Spinner } from "react-bootstrap";

function Loading({ size = 200 }) {
	return (
		<div
			style={{
				display: "flex",
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
				animation="border" variant="light"
			/>
		</div>
	);
}

export default Loading;