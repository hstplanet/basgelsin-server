export const useValitade = () => {


  function validateEmail(email: string) {
    const errorValue = ref<string>("")
    // E-posta adresi için regex deseni
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // E-posta adresini kontrol et
    if (pattern.test(email)) {
      errorValue.value = ""
      return { errorValue };
    } else {
      errorValue.value = "Email adresiniz doğru formatta değil"
      return { errorValue };
    }
  }

  function generateUID(length: number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let uid = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      uid += characters.charAt(randomIndex);
    }

    return uid;
  }

  return {
    generateUID,
    validateEmail
  }
}