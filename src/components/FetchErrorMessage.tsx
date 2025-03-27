import ErrorMessage from '@components/errorMessage';
import { CgRedo } from '@react-icons/all-files/cg/CgRedo';
import { ErrorMessageProps } from '@components/errorMessage/type';
import cn from '@utils/cn';

interface FetchErrorMessageProps extends ErrorMessageProps {
  onClickRetryButton: () => void;
  iconClass?: string;
}

function FetchErrorMessage({
  onClickRetryButton,
  size,
  theme,
  weight,
  iconClass,
  ...props
}: FetchErrorMessageProps) {
  const handleClickButton = () => onClickRetryButton();
  return (
    <ErrorMessage
      size={size}
      theme={theme}
      weight={weight}
      className={props.className}
    >
      <div className='flex w-full items-center space-x-3'>
        <button title='재시도' onClick={handleClickButton}>
          <span className='sr-only'>재시도</span>
          <CgRedo aria-hidden={true} className={cn('size-7', iconClass)} />
        </button>
        <span>데이터 조회에 실패했습니다.</span>
      </div>
    </ErrorMessage>
  );
}

export default FetchErrorMessage;
