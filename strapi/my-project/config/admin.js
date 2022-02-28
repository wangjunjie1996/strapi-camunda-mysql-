module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fcc60ecd3049dbb2ea902daa3984565d'),
  },
});
