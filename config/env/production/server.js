module.exports = ({ env }) => ({
  proxy: true,
  url: env("RENDER_FRONT_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
