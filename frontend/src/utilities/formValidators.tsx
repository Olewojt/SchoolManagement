// Poniżej znajdują się przykładowe funkcje pomocnicze do walidacji formularzy

// Funkcja do sprawdzania poprawności adresu email
export const validateEmail = (email: string): boolean => {
    // Prosta walidacja adresu email za pomocą wyrażenia regularnego
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Funkcja do sprawdzania długości tekstu
export const validateTextLength = (text: string, minLength: number, maxLength: number): boolean => {
    return text.length >= minLength && text.length <= maxLength;
};

// Funkcja do sprawdzania poprawności hasła
export const validatePassword = (password: string): boolean => {
    // Przykładowa walidacja hasła (minimalna długość 8 znaków)
    return password.length >= 8;
};

// Oczywiście kod jest przykładem, żeby zainspirować się w pozniejszej fazie. Można także zróbic np. komponent
// do funckji pomocnczych takich jak manipulacja danymi (dataHelpers)