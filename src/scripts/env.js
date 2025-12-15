/**
 * Application configuration
 * Contains app-wide settings and preferences
 */
const env = {
  ENVIRONMENT: 'development',
  PLATFORM_ENVIRONMENT: 'development',
  AUTH_ENABLED: true,
  SOCIAL_LOGIN_ENABLED: false,
  PHONE_AUTH_ENABLED: false,
  FEEDBACK_ENABLED: true,
  FEEDBACK_API_KEY: 'eyJidXNpbmVzc0lkZWFJZCI6ImE2NTRlZmMwLTA3Y2QtNDhhOS05MDA5LWYyNTdiYWQyOWJmOSIsImNyZWF0ZWRBdCI6MTc2NTc4NDczNDE5MywiY3JlYXRlZEJ5IjoiY29kZWdlbmVzaXMifQ==',
  ASSISTANT_ENABLED: true,
  TIRAM_AI_TAG_ENABLED: true,
  CLARITY_ENABLED: false,
  app: {
    name: 'WP Abhishek Chained 1',
    logo: 'assets/imgs/logo.png',
    logoWithText: 'assets/imgs/logo-with-text.png',
    themePreset: 'default',
    navigation: 'sidenav', // Can be 'topnav' or 'sidenav'
    businessIdeaId: 'a654efc0-07cd-48a9-9009-f257bad29bf9',
    personaRole: 'Team Member',
    appType: 'business',
  },
  // this key wil be used to setup the firebase config
  FIREBASE_CONFIG: {
    FIREBASE_API_KEY: "AIzaSyCAVtxCZIktJsPPK-7byRBLn_LltSuhM38",
    FIREBASE_AUTH_DOMAIN: "new-fb-1.firebaseapp.com",
    FIREBASE_PROJECT_ID: "new-fb-1",
    FIREBASE_STORAGE_BUCKET:  "new-fb-1.firebasestorage.app",
    FIREBASE_MESSAGING_SENDER_ID: "709142706104",
    FIREBASE_APP_ID: "1:709142706104:web:b936c0df5f97dc55bc814d",
    MEASUREMENT_ID: "G-WK4CXFTEXQ",
    FIRESTORE_DB_NAME: '',
  },
  BASE_URL: 'https://qvm-api-wp-abhishek-cha-a654.azurewebsites.net/team_member',
  REFINER: {
    ENABLED: false,
    POSITION: 'bottom-right', // Can be 'top-left', 'top-right', 'bottom-left', 'bottom-right'
    HIGHLIGHT_COLOR: '#f04a01',
  },
};

export { env };
