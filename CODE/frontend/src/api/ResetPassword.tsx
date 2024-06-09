import axiosClient from "@/axios-client.tsx";

export async function sendVerificationEmail(email: string): Promise<void> {
    try {
        await axiosClient.post(`/forgotPassword/verifyMail/${email}`);
        console.log('Email weryfikacyjny został pomyślnie wysłany.');
    } catch (error) {
        console.error('Błąd podczas wysyłania emaila weryfikacyjnego:', error);
        throw error;
    }
}

export async function verifyOTP(email: string, otp: number): Promise<void> {
    try {
        await axiosClient.post(`/forgotPassword/verifyOtp/${otp}/${email}`);
        console.log('Email weryfikacyjny został pomyślnie wysłany.');
    } catch (error) {
        console.error('Błąd podczas wysyłania emaila weryfikacyjnego:', error);
        throw error;
    }
}

export async function changePassword(email: string, password: string, repeatPassword: string): Promise<string> {
    try {
        if (password !== repeatPassword) {
            throw new Error("Passwords do not match");
        }

        const response = await axiosClient.post(`/forgotPassword/changePassword/${email}`, {
            password: password,
            repeatPassword: repeatPassword
        });

        return response.data;
    } catch (error) {
        console.error('Error changing password:', error);
        throw error;
    }
}
