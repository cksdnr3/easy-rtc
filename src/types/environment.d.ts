declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      SESSION_SECRET_KEY?: string;
      PORT?: string;
    }
  }
}

export {};
