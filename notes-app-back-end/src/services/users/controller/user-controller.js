import UserRepositories from '../repositories/user-repositories.js';
import response from '../../../utils/response.js';
import InvariantError from '../../../exceptions/invariant-error.js';
import NotFoundError from '../../../exceptions/not-found-error.js';

const userRepositories = new UserRepositories();

export const createUser = async (req, res, next) => {
    const { username, password, fullname } = req.validated;

    const isUsernameExist = await userRepositories.verifyNewUsername(username);
    if (isUsernameExist) {
        return next(new InvariantError('Gagal menambahkan user. Username sudah digunakan.'));
    }

    const user = await userRepositories.createUser({
        username,
        password,
        fullname,
    });

    if (!user) {
        return next(new InvariantError('User gagal ditambahkan'));
    }

    return response(res, 201, 'User berhasil ditambahkan', user);
};

export const getUserById = async (req, res, next) => {
    const { id } = req.params;
    const user = await userRepositories.getUserById(id);

    if (!user) {
        return next(new NotFoundError('User tidak ditemukan'));
    }

    return response(res, 200, 'User berhasil ditampilkan', user);
};

export const getUsersByUsername = async (req, res, next) => {
    const username = req.query.username;
    const user = await userRepositories.getUsersByUsername(username);
    if (!user) {
        return next(new NotFoundError('User tidak ditemukan'));
    }
    return response(res, 200, 'User berhasil ditampilkan', { users: user });
};
