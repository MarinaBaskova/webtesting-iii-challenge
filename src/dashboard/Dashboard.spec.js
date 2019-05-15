import React from 'react';

import { render, fireEvent } from 'react-testing-library';
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
	it('gate button changes gate display status to open or close when gate unlocked', () => {
		const { getByText, fireEvent } = render(<Dashboard />);

		let gateBtn = getByText('Close Gate').innerHTML;
		fireEvent(gateBtn);
		let gateDispl = getByText('Closed').innerHTML;
		gateBtn = getByText('Open Gate').innerHTML;

		expect(gateDispl).toBe('Closed');
		expect(gateBtn).toBe('Open Gate');
	});
});
