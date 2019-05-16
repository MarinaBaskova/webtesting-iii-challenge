import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import Controls from './Controls';

describe('<Controls/>', () => {
	it('it renders successfully', () => {
		render(<Controls />);
	});

	it('should disable closed button if the gate is closed', () => {
		const spytoggleLocked = jest.fn();
		const { getByText } = render(<Controls toggleLocked={spytoggleLocked} closed={true} locked={true} />);
		const lockBtn = getByText('Unlock Gate').innerHTML;
		expect(lockBtn).toBe('Unlock Gate');
		expect(getByText('Unlock Gate')).not.toBeDisabled();
	});
	it('should disable locked button if the gate is open', () => {
		const spyToggleClosed = jest.fn();
		const { getByText } = render(<Controls toggleClosed={spyToggleClosed} closed={false} />);
		const lockBtn = getByText('Lock Gate');
		expect(lockBtn).toBeDisabled();
		expect(spyToggleClosed).not.toHaveBeenCalled();
	});
});
