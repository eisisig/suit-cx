'use strict';

import bemClassNames from 'bem-classnames';

const suitCx = ( settings, params = {}, className = {} ) => {

	const classes = bemClassNames(settings, params, className);
	const parentName = settings.name;

	return ( ...decendants ) => decendants.length && parentName ? decendants.map(( child ) => `${parentName}-${child}`).join(' ') : classes;
};

export default suitCx;
