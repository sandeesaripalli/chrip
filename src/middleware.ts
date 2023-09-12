import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware();
console.log("Auth middleware is available")
export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};