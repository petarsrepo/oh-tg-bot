module.exports = {
  apps : [{
    script: 'bot.py',
    watch: '.',
    interpreter: 'python',
    env: {
      PYTHONIOENCODING: 'utf-8',
      TG_TOKEN: '/INSERT BOT TOKEN HERE/',
    },
  }],
};