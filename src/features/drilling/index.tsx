import CardDisplay from 'src/features/drilling/components/verseDisplay';
import { ComposedBoundary } from '@/lib/error/ComposedBoundary';
import ErrorMessage from '@/lib/error/ErrorMessage';
import Loader from '@/shared/ui/Loader';
import { CommonCombobox } from '@/shared/ui/commonCombobox';
import { Field } from '@headlessui/react';
import CardHideOptionSelect from '@features/drilling/components/cardHideOptionSelect';
import BibleVersionSelect from '@features/bibleVersionSelect';
import COMBOBOX_LABEL_TEXTS from '@/constants/comboboxLabelTexts';

function Drilling() {
  return (
    <div className='flex w-full max-w-[800px] grow flex-col items-center justify-center space-y-4'>
      <div className='flex h-[100px] w-full items-center justify-around mobile:w-full mobile:space-x-3'>
        <BibleVersionSelect />
        <Field className='flex min-w-[30%] flex-col items-start'>
          <CommonCombobox.Label>
            {COMBOBOX_LABEL_TEXTS.CARD_HIDE_OPTION}
          </CommonCombobox.Label>
          <ComposedBoundary
            fallbackRender={({ error, resetErrorBoundary }) => (
              <ErrorMessage
                error={error}
                resetErrorBoundary={resetErrorBoundary}
              />
            )}
            suspenseFallback={<Loader />}
          >
            <CardHideOptionSelect />
          </ComposedBoundary>
        </Field>
      </div>
      <ComposedBoundary
        fallbackRender={({ resetErrorBoundary, error }) => (
          <ErrorMessage
            className='my-8 h-[400px] rounded-3xl bg-neutral-100 px-9 py-6 align-middle mobile:h-[200px]'
            resetErrorBoundary={resetErrorBoundary}
            error={error}
          />
        )}
        suspenseFallback={<Loader size='lg' className='my-[120px]' />}
      >
        <CardDisplay />
      </ComposedBoundary>
    </div>
  );
}

export default Drilling;
