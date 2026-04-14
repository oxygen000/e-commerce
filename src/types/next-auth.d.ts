import "next-auth";

declare module "next-auth" {
  interface User {
    realTokenFromBackend?: string;
  }

  interface Session {
    user: {
      id?: string | null;
      name?: string | null;
      email?: string | null;
      realTokenFromBackend?: string;
      token?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    realTokenFromBackend?: string;
  }
}
