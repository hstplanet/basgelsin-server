import { useValitade } from "./Valitade";



export const useFile = () => {

  const app = useAppConfig()
  const { generateUID } = useValitade()

  async function uploadFile(file: any) {
    const formData = new FormData();
    formData.append('uid', generateUID(10));
    formData.append('file', file);

    const { data, pending, error, refresh } = await useAsyncData(
      'create',
      () => $fetch(app.baseURL + "File/file", {
        method: "POST",
        body: formData
      })
    )

    return { data }
  }

  return {
    uploadFile
  }
}