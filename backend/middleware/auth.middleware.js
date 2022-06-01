import { usersService } from "../services/users.service";

export const auth =
	(roles = []) =>
	async (req, res, next) => {
		try {
			const token =
				req.headers["x-access-token"] || req.headers["authorization"];
			if (!token)
				return res
					.status(401)
					.send({ auth: false, message: "No token provided." });

			const user = await usersService.verifyToken(token);
			if (!user)
				return res.status(403).send({
					auth: false,
					message: "Failed to authenticate token.",
				});

			if (roles.length && !roles.includes(user.role)) {
				return res.status(403).send({
					auth: false,
					message: "Forbidden",
				});
			}

			req.user = user;
			next();
		} catch (err) {
			res.status(500).send({
				auth: false,
				message: "Failed to authenticate token.",
			});
		}
	};
