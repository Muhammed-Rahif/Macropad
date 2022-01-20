import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { openFile } from '../renderer/helpers/files';

describe('helper => files tests', () => {
  it('should have "window" elem in document body', async () => {
    let isClicked = false;

    render(
      <input
        type="file"
        onClick={() => {
          isClicked = true;
        }}
        data-testid="file-input"
      />
    );
    openFile(screen.getByTestId('file-input'));

    expect(isClicked).toBeTruthy();
  });
});
