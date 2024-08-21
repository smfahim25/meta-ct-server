const db = require('../config/db.config');

class Settings {
  // Get all settings
  static async getAllSettings() {
    const [rows] = await db.query('SELECT * FROM settings WHERE id = 1');
    return rows[0];
  }

  // Update settings
  static async updateSettings(settingsData) {
    const [result] = await db.query('UPDATE settings SET ? WHERE id = 1', [settingsData]);
    return result.affectedRows;
  }
}

module.exports = Settings;
