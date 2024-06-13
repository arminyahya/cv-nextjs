import React from 'react';
import useTranslation from '../_translation/useTranslation';

export default function HeaderTypography({ text }: { text: string }) {
	return (<div className={"header"}>
		{text}
	</div>
	
	)
}