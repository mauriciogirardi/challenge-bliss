import { ButtonPagination } from "./styles";

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  isCurrent = false,
  number,
  onPageChange,
}: PaginationItemProps) {
  if (isCurrent) {
    return <ButtonPagination disabled>{number}</ButtonPagination>;
  }

  return (
    <ButtonPagination onClick={() => onPageChange(number)}>
      {number}
    </ButtonPagination>
  );
}
