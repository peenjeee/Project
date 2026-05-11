
import { InvariantError, NotFoundError } from '../../../exceptions/index.js';
import response from '../../../utils/response.js';
import NoteRepositories from '../repositories/note-repositories.js';
import AuthorizationError from '../../../exceptions/authorization-error.js';

const noteRepositories = new NoteRepositories();

export const createNote = async (req, res, next) => {
    const { title, body, tags } = req.validated;
    const { id: owner } = req.user;
    const note = await noteRepositories.createNote({
        title,
        body,
        tags,
        owner
    });
    if (!note) {
        return next(new InvariantError('Catatan gagal ditambahkan'));
    }

    return response(res, 201, 'Catatan berhasil ditambahkan', note);
};

export const getNotes = async (req, res) => {
    const { id: owner } = req.user;
    const notes = await noteRepositories.getNotes(owner);
    return response(res, 200, 'Catatan sukses ditampilkan', notes);
};

export const getNoteById = async (req, res, next) => {
    const { id } = req.params;
    const { id: owner } = req.user;

    const isOwner = await noteRepositories.verifyNoteAccess(id, owner);

    if (!isOwner) {
        return next(new AuthorizationError('Anda tidak berhak mengakses resource ini'));
    }

    const note = await noteRepositories.getNoteById(id);

    if (!note) {
        return next(new NotFoundError('Catatan tidak ditemukan'));
    }

    return response(res, 200, 'Catatan sukses ditampilkan', note);
};

export const editNoteById = async (req, res, next) => {
    const { id } = req.params;
    const {
        title,
        body,
        tags
    } = req.validated;

    const { id: owner } = req.user;

    const isOwner = await noteRepositories.verifyNoteAccess(id, owner);

    if (!isOwner) {
        return next(new AuthorizationError('Anda tidak berhak mengakses resource ini'));
    }

    const note = await noteRepositories.editNote({
        id,
        title,
        body,
        tags
    });

    if (!note) {
        return next(new NotFoundError('Catatan tidak ditemukan'));
    }

    return response(res, 200, 'Catatan berhasil diperbarui', note);
};

export const deleteNoteById = async (req, res, next) => {
    const { id } = req.params;
    const { id: owner } = req.user;
    const isOwner = await noteRepositories.verifyNoteOwner(id, owner);
    if (!isOwner) {
        return next(new AuthorizationError('Anda tidak berhak mengakses resource ini'));
    }
    const deletedNote = await noteRepositories.deleteNote(id);
    if (!deletedNote) {
        return next(new NotFoundError('Catatan tidak ditemukan'));
    }
    return response(res, 200, 'Catatan berhasil dihapus', deletedNote);
};