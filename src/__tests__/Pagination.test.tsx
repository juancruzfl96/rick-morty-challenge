import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from '@/components/atoms/Pagination';

test('pagination triggers onPageChange', () => {
  const onPageChange = jest.fn();
  render(<Pagination currentPage={2} totalPages={5} onPageChange={onPageChange} />);
  
  fireEvent.click(screen.getByText('Anterior'));
  expect(onPageChange).toHaveBeenCalledWith(1);

  fireEvent.click(screen.getByText('Siguiente'));
  expect(onPageChange).toHaveBeenCalledWith(3);
});
