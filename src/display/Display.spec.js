import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Display from './Display';

describe('<Display/>', () => {
	it('it renders successfully', () => {
		render(<Display />);
	});

	it('lock display defaults to unlocked', () => {
		const { getByText } = render(<Display />);

		const lockDispl = getByText('Unlocked').innerHTML;
		expect(lockDispl).toBe('Unlocked');
	});
	it('gate display defaults to open', () => {
		const { getByText } = render(<Display />);

		let gateDispl = getByText('Open').innerHTML;
		expect(gateDispl).toBe('Open');
	});

	it('displays gate to closed if the closed prop is true', () => {
		const { getByText } = render(<Display closed={true} />);
		const gateDispl = getByText('Closed').innerHTML;
		expect(gateDispl).toBe('Closed');
	});
	it('displays gate to open if the closed prop is false', () => {
		const { getByText } = render(<Display closed={false} />);
		const gateDispl = getByText('Open').innerHTML;
		expect(gateDispl).toBe('Open');
	});

	it('displays locked if the locked prop is true  ', () => {
		const { getByText } = render(<Display locked={true} />);
		const lockDispl = getByText('Locked').innerHTML;
		expect(lockDispl).toBe('Locked');
	});
	it('displays unlocked if the locked prop is false  ', () => {
		const { getByText } = render(<Display locked={false} />);
		const lockDispl = getByText('Unlocked').innerHTML;
		expect(lockDispl).toBe('Unlocked');
	});

	it('gate display has class red if the closed prop is true', () => {
		const { getByText } = render(<Display closed={true} />);
		const gateDispl = getByText('Closed').classList.contains('red-led');
		expect(gateDispl).toBe(true);
	});
	it('gate display has class green if the closed prop is false', () => {
		const { getByText } = render(<Display closed={false} />);
		const gateDispl = getByText('Open').classList.contains('green-led');
		expect(gateDispl).toBe(true);
	});

	it('lock display has class red if the closed prop is true', () => {
		const { getByText } = render(<Display locked={true} />);
		const lockDispl = getByText('Locked').classList.contains('red-led');
		expect(lockDispl).toBe(true);
	});
	it('lock display has class green if the closed prop is false', () => {
		const { getByText } = render(<Display locked={false} />);
		const lockDispl = getByText('Unlocked').classList.contains('green-led');
		expect(lockDispl).toBe(true);
	});
});
