import CommonCombobox from '@components/commonCombobox';
import { useCardSortMethodStore } from '@store/cardSortMethodStore';
import { useQuery } from '@tanstack/react-query';
import { getCardSortMethod } from '@apis/cardSortMethod';
import Loader from '@components/Loader';
import { CommonComboboxItem } from '@components/commonCombobox/type';
import { useShallow } from 'zustand/react/shallow';

function CardSortMethodSelect() {
  const selectedItem = useCardSortMethodStore(
    useShallow(({ cardSortMethod: { name, code } }) => ({
      name,
      value: code,
      id: code,
    })),
  );
  const setCardSortMethod = useCardSortMethodStore(
    state => state.setCardSortMethod,
  );

  const { data, isPending, isError } = useQuery({
    queryKey: ['cardSortMethod'],
    queryFn: getCardSortMethod,
  });

  if (isPending) return <Loader />;
  if (isError) return <div>데이터를 조회하지 못했습니다.</div>;

  const items = data.map(({ name, code }) => ({ name, value: code, id: code }));

  return (
    <CommonCombobox
      label={'정렬방식'}
      items={items}
      selectedItem={selectedItem}
      onChangeCombobox={(item: CommonComboboxItem) => {
        setCardSortMethod({ name: item.name, code: item.value });
      }}
    />
  );
}

export default CardSortMethodSelect;
