import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://92fe21442b761ce4ac394bf66e0724b1@o4510894199013376.ingest.us.sentry.io/4510894199144448",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
      isNameRequired: true,
      isEmailRequired: true,
    }),
  ],
});