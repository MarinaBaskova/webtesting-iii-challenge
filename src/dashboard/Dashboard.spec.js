import React from 'react';

import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Dashboard from './Dashboard';

describe('<Dashboard/>', () => {
	it('it renders successfully', () => {
		render(<Dashboard />);
	});
	it('it renders with default state/values', () => {
		const { getByText } = render(<Dashboard />);

		let lockDispl = getByText('Unlocked').innerHTML;
		let gateDispl = getByText('Open').innerHTML;
		let lockBtn = getByText('Lock Gate').innerHTML;
		let gateBtn = getByText('Close Gate').innerHTML;

		expect(lockDispl).toBe('Unlocked');
		expect(gateDispl).toBe('Open');
		expect(lockBtn).toBe('Lock Gate');
		expect(gateBtn).toBe('Close Gate');
	});
});
