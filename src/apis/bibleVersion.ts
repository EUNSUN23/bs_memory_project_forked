import supabase from '@apis/supabase';

export const getBibleVersions = async () => {
  const { data, error } = await supabase.from('bible_version').select();

  if (error) throw error;

  return data;
};
