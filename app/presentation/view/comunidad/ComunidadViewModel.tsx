import { useEffect, useState } from "react";
import { UserProfileInterface } from "../../../domain/entities/UserProfile";
import { GetAllUserProfilesUseCase } from "../../../domain/useCases/userProfile/GetAllUsersUseCase";

export const useComunidadViewModel = () => {
    const [users, setUsers] = useState<UserProfileInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const loadUsers = async () => {
        try {
            const result = await GetAllUserProfilesUseCase();
            setUsers(result);
        } catch (err) {
            setError("Error al cargar los perfiles de usuario");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadUsers();
    }, []);

    return {
        users,
        loading,
        error,
        reloadUsers: loadUsers
    };
};
