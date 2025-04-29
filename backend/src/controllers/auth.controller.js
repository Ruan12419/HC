const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Função de cadastro (signup)
exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Verificar se o email já está registrado
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'Email já cadastrado' });
        }

        // Hashing da senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Criar o novo usuário
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        // Salvar o usuário no banco de dados
        await newUser.save();

        // Gerar um token de autenticação (opcional, se você desejar logar o usuário após o cadastro)
        const token = jwt.sign({ id: newUser._id }, 'secretkey', { expiresIn: '1h' });

        // Retornar sucesso
        res.status(201).json({ message: 'Cadastro realizado com sucesso', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao cadastrar o usuário' });
    }
};

// Função de login (exemplo básico)
exports.login = async (req, res) => {
    // Lógica de login...
};
