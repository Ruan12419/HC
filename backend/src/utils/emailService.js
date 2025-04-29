const nodemailer = require("nodemailer");
require('dotenv').config();
const fs = require("fs");
const path = require("path");


// Configuração do transporte para envio de e-mails
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Email do remetente a partir do .env
        pass: process.env.EMAIL_PASS  // Senha do aplicativo a partir do .env
    }
});

// Função para enviar o e-mail de confirmação
const enviarEmailConfirmacao = (email, token) => {
    return new Promise((resolve, reject) => {
        // URL de confirmação com o token gerado
        const urlConfirmacao = `http://localhost:3000/auth/confirmar-email/${token}`;

        // Ler o template HTML
        fs.readFile(path.join(__dirname, '../emails/emailTemplate.html'), 'utf-8', (err, data) => {
            if (err) {
                return reject('Erro ao ler o template HTML');
            }

            // Substituir as variáveis no template
            const htmlContent = data
                .replace('{{urlConfirmacao}}', urlConfirmacao)
                .replace('{{currentYear}}', new Date().getFullYear());

            // Opções do e-mail
            const mailOptions = {
                from: process.env.EMAIL_USER, // Email do remetente
                to: email,                  // Email do destinatário
                subject: 'Confirmação de Cadastro',
                html: htmlContent            // Conteúdo HTML do e-mail
            };

            // Enviar o e-mail
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return reject('Erro ao enviar o e-mail');
                }
                resolve('E-mail enviado com sucesso');
            });
        });
    });
};

module.exports = { enviarEmailConfirmacao };