import { Location } from "../entity/Location";



export class SearchLabRequest {
  labName: string | null = null;
  location: Location =new Location;
    email: null | undefined;
    id: null | undefined;
    password: null | undefined;
    isApproved!: null;
    phone: null | undefined;
    documentType: null | undefined;
    imageName: null | undefined;
    biography: null | undefined;
    isDeleted: null | undefined;
    labDocument: null | undefined;
    labTests: null | undefined;
    userId: null | undefined;

  
}
