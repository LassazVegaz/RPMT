import { useApi } from "./api.hook";
import { usersHelper } from "../helpers/users.helper";
import { studentsHelper } from "../helpers/students.helper";
import { supervisorHelpers } from "../helpers/supervisors.helper";
import { panelMemberHelpers } from "../helpers/panel-member.helper";
import { USER_ROLES } from "../constants/user-roles.constants";

export const useUsers = () => {
	const { callApi } = useApi();

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
	};
};
