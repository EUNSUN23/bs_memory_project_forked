import VerseSelect from '@features/verseSelect';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import { useShallow } from 'zustand/react/shallow';
import ExamConfigModal from '@features/exam/components/examConfigModal';
import { useVerseSelectStore } from '@store/verseSelectStore';
import { useExamConfigModalStore } from '@features/exam/store/examConfigModalStore';
import { useExamConfigStore } from '@features/exam/store/examConfigStore';
import Nav from '@components/nav';

function Home() {
  const hasSelectedVerse = useVerseSelectStore(
    useShallow(state => state.hasAnyId),
  );
  const setExamConfigModalOpen = useExamConfigModalStore(
    state => state.setIsOpen,
  );
  const resetExamConfig = useExamConfigStore(state => state.reset);

  const handleDrillingLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!hasSelectedVerse()) {
      e.preventDefault();
      alert('암송 구절을 선택해주세요. 😊');
    }
  };

  const handleExamLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!hasSelectedVerse()) {
      alert('암송 구절을 선택해주세요. 😊');
      return;
    }
    resetExamConfig();
    setExamConfigModalOpen(true);
  };

  return (
    <>
      <Nav>
        <Nav.Container>
          <Nav.Link to={`/`}>
            <FaHome aria-hidden={true} className='size-[32px]' />
            <span className='sr-only'>홈으로</span>
          </Nav.Link>
          <Nav.Link to={`/drilling`} onClick={handleDrillingLinkClick}>
            암송하기
          </Nav.Link>
          <Nav.Link to={`/exam`} onClick={handleExamLinkClick}>
            시험보기
          </Nav.Link>
        </Nav.Container>
      </Nav>
      <div className='mx-2 my-14 flex flex-col items-center justify-center'>
        <h1 className='flex items-center text-5xl font-semibold mobile:text-3xl'>
          NAVI 성경 암송
        </h1>
        <VerseSelect />
      </div>
      <ExamConfigModal />
    </>
  );
}

export default Home;
