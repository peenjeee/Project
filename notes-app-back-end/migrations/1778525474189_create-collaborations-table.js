/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
    pgm.createTable('collaborations', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true,
        },
        note_id: {
            type: 'VARCHAR(50)',
            notNull: true,
        },
        user_id: {
            type: 'VARCHAR(50)',
            notNull: true,
        },
    });
    pgm.addConstraint('collaborations', 'unique_collaboration', 'UNIQUE(note_id, user_id)');
    pgm.addConstraint('collaborations', 'fk_collaborations.note_id_notes.id', 'FOREIGN KEY(note_id) REFERENCES notes(id) ON DELETE CASCADE');
    pgm.addConstraint('collaborations', 'fk_collaborations.user_id_users.id', 'FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE');
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
    pgm.dropTable('collaborations');
};
