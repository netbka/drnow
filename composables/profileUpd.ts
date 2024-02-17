// export default async (url: string | URL, filename: string) => {
//   const response = await fetch(url);
//   const blob = await response.blob();
//   const newFile = new File([blob], filename, { type: blob.type });
//   return newFile;
// };

export const urlToFile = async (url: string | URL, filename: string) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const newFile = new File([blob], filename, { type: blob.type });
  return newFile;
};

export const getProfile = async (fileName: string) => {
  const supabase = useSupabaseClient();
  const { data, error } = await supabase.storage.from("avatar").getPublicUrl(fileName);
  //if (error) return "https://eu.ui-avatars.com/api/?name=" + firstName + "+" + lastName + "&size=100";
  //console.log(data);
  if (error) throw nodataError;
  return data.publicUrl;
};

export const updateUserAvatar = async (fileToUpload: File, filename: string) => {
  const supabase = useSupabaseClient();
  let { error: uploadError } = await supabase.storage.from("avatar").upload(filename, fileToUpload, {
    upsert: true,
  });
  if (uploadError) throw uploadError;

  return filename;
};
