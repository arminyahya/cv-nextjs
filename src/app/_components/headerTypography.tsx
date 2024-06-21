import React from 'react';

export default function HeaderTypography({ text }: { text: string }) {
	return (<div className={"header"}>
		{text}
	</div>)
}