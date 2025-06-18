import * as Sentry from "@sentry/react-router";

Sentry.init({
  dsn: "https://d50e035a109330617a1a1ef6c3597415@o4507891251347456.ingest.de.sentry.io/4507891254755408",
  
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
