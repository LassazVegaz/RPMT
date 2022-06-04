import { useApi } from "./api.hook";
import { usersHelper } from "../helpers/users.helper";
import { studentsHelper } from "../helpers/students.helper";
import { supervisorHelpers } from "../helpers/supervisors.helper";
import { panelMemberHelpers } from "../helpers/panel-member.helper";
import { USER_ROLES } from "../constants/user-roles.constants";
import { authHelper } from "../helpers/auth.helper";
import { authActions } from "../redux/slices/auth.slice";
import { useDispatch } from "react-redux";

export const useUsers = () => {
	const { callApi } = useApi();
	const dispatch = useDispatch();

	const createAccount = async (user) => {
		try {
			await callApi(async () => {
				if (
					user.role === USER_ROLES.CO_SUPERVISOR ||
					user.role === USER_ROLES.SUPERVISOR
				)
					await supervisorHelpers.createSupervisor(user);
				else if (user.role === USER_ROLES.STUDENT)
					await studentsHelper.createStudent(user);
				else if (user.role === USER_ROLES.PANEL_MEMBER)
					await panelMemberHelpers.createPanelMember(user);
			});
			return true;
		} catch (error) {
			return false;
		}
	};

	const updateUser = async (id, user) => {
		try {
			await callApi(
				async () => {
					if (
						user.role === USER_ROLES.CO_SUPERVISOR ||
						user.role === USER_ROLES.SUPERVISOR
					)
						await supervisorHelpers.updateSupervisor(id, user);
					else if (user.role === USER_ROLES.PANEL_MEMBER)
						await panelMemberHelpers.updatePanelMember(user);

					const _user = await authHelper.getLoggedInUser();
					dispatch(authActions.setLoggedUser(_user));
				},
				{
					successMessage: "User updated successfully",
				}
			);
			return true;
		} catch (error) {
			return false;
		}
	};

	const isEmailAvailable = async (email) => {
		try {
			return await callApi(
				async () => await usersHelper.isEmailAvailable(email),
				{
					showSuccessMessage: false,
				}
			);
		} catch (error) {
			return false;
		}
	};

	return {
		isEmailAvailable,
		createAccount,
		updateUser,
	};
};
