import mysql from 'mysql2/promise'; // Usar la promesa de mysql2
import { configDb } from '../config/envs.js';

// Creamos la conexión a la base de datos
const connection = await mysql.createConnection(configDb);

// Definimos el modelo Team
const Team = {};

// Método para obtener todos los equipos
Team.getAllTeams = async () => {
    try {
        const [results] = await connection.query('SELECT * FROM teams');
        return results;
    } catch (error) {
        console.error(error);
        throw error; // Re-lanzar el error para que lo maneje la capa superior
    }
};

// Método para crear un nuevo equipo
Team.createTeam = async (newTeam) => {
    try {
        const { creator_id, name, logo_url } = newTeam;
        const [results] = await connection.query(
            'INSERT INTO teams (creator_id, name, logo_url) VALUES (?, ?, ?)',
            [creator_id, name, logo_url],
        );
        return results.insertId; // Devolver el ID del equipo creado
    } catch (error) {
        console.error(error);
        throw error; // Re-lanzar el error para que lo maneje la capa superior
    }
};

// Método para obtener un equipo por su ID
Team.getTeamById = async (teamId) => {
    try {
        const [results] = await connection.query(
            'SELECT * FROM teams WHERE id = ?',
            [teamId],
        );
        return results[0] || null; // Devolver el equipo o null si no se encuentra
    } catch (error) {
        console.error(error);
        throw error; // Re-lanzar el error para que lo maneje la capa superior
    }
};

// Método para actualizar un equipo por su ID
Team.updateTeamById = async (teamId, updatedTeam) => {
    try {
        const [results] = await connection.query(
            'UPDATE teams SET ? WHERE id = ?',
            [updatedTeam, teamId],
        );
        return results.affectedRows > 0; // Indicar si la actualización se realizó con éxito
    } catch (error) {
        console.error(error);
        throw error; // Re-lanzar el error para que lo maneje la capa superior
    }
};

// Método para eliminar un equipo por su ID
Team.deleteTeamById = async (teamId) => {
    try {
        const [results] = await connection.query(
            'DELETE FROM teams WHERE id = ?',
            [teamId],
        );
        return results.affectedRows > 0; // Indicar si la eliminación se realizó con éxito
    } catch (error) {
        console.error(error);
        throw error; // Re-lanzar el error para que lo maneje la capa superior
    }
};

export default Team;
