import supabase from '@apis/supabase';
import SupabaseResponseError from '@apis/utils/SupabaseResponseError';

export const getBibleVersions = async () => {
  const { data, error } = await supabase.from('bible_version').select();

  if (error) throw new SupabaseResponseError(error);

  return data;
};
