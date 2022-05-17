import { commentsResolvers } from "./comments.js";
import { likesResolver } from "./likes.js";
import { postResolvers } from "./posts.js";
import { usersResolvers } from "./users.js";



export const resolvers = {
    Query: {
        ...postResolvers.Query,
        ...usersResolvers.Query
    },

    Mutation: {
        ...usersResolvers.Mutation,
        ...postResolvers.Mutation,
        ...commentsResolvers.Mutation,
        ...likesResolver.Mutation,
    },

    Subscription: {
        ...postResolvers.Subscription
    }

}