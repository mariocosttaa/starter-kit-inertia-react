import User from "./model/user";
import { PageProps } from '@inertiajs/core';

export default interface AuthPageProps extends PageProps {
    auth: {
        user: User;
    };
}