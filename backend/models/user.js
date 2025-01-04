const userSchema = {
    id: 'INT AUTO_INCREMENT PRIMARY KEY',
    name: 'VARCHAR(255) NOT NULL',
    email: 'VARCHAR(255) UNIQUE NOT NULL',
    password: 'VARCHAR(255) NOT NULL',
    created_at: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',
    updated_at: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
};

module.exports = userSchema;
