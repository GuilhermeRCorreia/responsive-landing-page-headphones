const { WebhookClient } = require('discord.js');

// URL do webhook (copie o URL do webhook criado no Discord)
const webhookURL = 'https://discordapp.com/api/webhooks/1236394618799784057/1Ibtl3kWmIBLwYYtcAn_Cfd1yXJPeqZlL4GveJqbkgSHUcbuuog0yyyU_qPq6XfsyiAX';

// Crie um cliente de webhook com o URL fornecido
const webhookClient = new WebhookClient({ url: webhookURL });

// Crie uma função para enviar a mensagem
async function enviarMensagem() {
    try {
        // Envie a mensagem para o canal do Discord
        await webhookClient.send('Esta é uma mensagem de teste enviada para o Discord!');
        console.log('Mensagem enviada com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar mensagem para o Discord:', error);
    }
}

// Chame a função para enviar a mensagem
enviarMensagem();
