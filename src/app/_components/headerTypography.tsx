import React from 'react';

export default function HeaderTypography({ text }: { text: string }) {
	return (<div className={"font-bold mb-4"}>
		{text}
	</div>)
}