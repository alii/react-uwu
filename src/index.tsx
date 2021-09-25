import React from 'react';
import {uwu} from './uwu';

/**
 * UWU UR TEXT
 * @param props Single string child
 * @returns the child unmodified i promise x
 */
export function UWU(props: {children: string}) {
	return <>{uwu(props.children)}</>;
}

export {uwu as generate} from './uwu';
