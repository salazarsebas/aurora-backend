import express from "express";
import authRoutes from "./modules/auth.routes";
import accountRoutes from "./modules/account.routes";
import walletRoutes from "./modules/wallet.routes";
import questionRoutes from "./modules/question.routes";
import chatRoutes from "./modules/chat.routes";

const apiRoutes = express.Router();

apiRoutes.use("/auth", authRoutes);
apiRoutes.use("/account", accountRoutes);
apiRoutes.use("/wallet", walletRoutes);
apiRoutes.use("/questions", questionRoutes);
apiRoutes.use("/chat", chatRoutes);

export default apiRoutes;
