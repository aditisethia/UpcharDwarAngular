
export class User_Table_response {

  id!: number;
  name!: string;
  email!: string;
  status!: string;
  userRole!: UserRole[]; // Assuming you have a UserRole class defined

}

export class UserRole {
  roleId: any;
  roleName:any;
}
