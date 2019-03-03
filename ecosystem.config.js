module.exports = {
  apps : [{
    name: 'React-js',
    script: 'npm start',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'run start',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    log_date_format: 'YYYY-MM-DD',
    error_file: './src/logs/err.log',
    out_file: './src/logs/out.log',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
