import { Tables } from './database.types.ts';

export type SeriesCode = Tables<'series'>['series_code'];

export type BibleVersion = Tables<'bible_version'>;
export type BibleVersionName = BibleVersion['name'];

export type CardSortMethod = Tables<'card_sort_method'>;

export type CardHideOption = Tables<'card_hide_option'>;

export type ApiResult<T extends (args?: any) => Promise<any>> = Awaited<
  ReturnType<T>
>;

export type ArrayElement<T> = T extends (infer U)[] ? U : never;
