export interface User {
    id: string;
    name: string;
    surname: string | null;
    names: string;
    email: string;
    image: string;
    email_verified_at: string | null;
    login_google: boolean;
    birthday: string | null;
    country_id: string;
    created_at: string;
    updated_at: string;
}