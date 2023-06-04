import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { redirect } from "next/dist/server/api-utils";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    pages: {
        signIn: "/"
    },
    callbacks: {
        // async signIn() {
        //     return true
        // },
        async redirect({ baseUrl }) {
            // console.log(baseUrl)
            return "/dashboard";
        }
    }

})

export { handler as GET, handler as POST }