import { createContext, useContext, PropsWithChildren } from 'react';

import { useLocalStorage } from '~/common/useLocalStorage';
import {
  EAS_TUTORIAL_INITIAL_CHAPTERS,
  Chapter,
} from '~/ui/components/ProgressTracker/TutorialData';

type ChapterContextType = {
  chapters: Chapter[];
  setChapters: (chapters: Chapter[]) => void;
};

// Provide initial values matching the type
const defaultValues: ChapterContextType = {
  chapters: [],
  setChapters: () => {},
};

const TutorialChapterCompletionContext = createContext<ChapterContextType>(defaultValues);

export const TutorialChapterCompletionProvider = ({ children }: PropsWithChildren) => {
  const [chapters, setChapters] = useLocalStorage<Chapter[]>({
    name: 'EAS_TUTORIAL',
    defaultValue: EAS_TUTORIAL_INITIAL_CHAPTERS,
  });

  return (
    <TutorialChapterCompletionContext.Provider value={{ chapters, setChapters }}>
      {children}
    </TutorialChapterCompletionContext.Provider>
  );
};

export const useTutorialChapterCompletion = () => useContext(TutorialChapterCompletionContext);
