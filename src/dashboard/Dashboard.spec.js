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
	it('changes gate display status to open or close when gate unlocked', () => {
		const { getByText } = render(<Dashboard />);

		let gateBtn = getByText('Close Gate');
		fireEvent.click(gateBtn);
		let gateDispl = getByText('Closed').innerHTML;
		gateBtn = getByText('Open Gate').innerHTML;

		expect(gateDispl).toBe('Closed');
		expect(gateBtn).toBe('Open Gate');
	});

	it('changes gate display status to unlocked or locked', () => {
		const { getByText } = render(<Dashboard />);

		let gateBtn = getByText('Close Gate');
		fireEvent.click(gateBtn);
		let lockDispl = getByText('Unlocked').innerHTML;
		let lockBtn = getByText('Lock Gate').innerHTML;

		expect(lockDispl).toBe('Unlocked');
		expect(lockBtn).toBe('Lock Gate');

		lockBtn = getByText('Lock Gate');
		fireEvent.click(lockBtn);
		lockDispl = getByText('Locked').innerHTML;
		lockBtn = getByText('Unlock Gate').innerHTML;

		expect(lockDispl).toBe('Locked');
		expect(lockBtn).toBe('Unlock Gate');
	});
});
