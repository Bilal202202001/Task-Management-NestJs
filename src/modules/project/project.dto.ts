import { Types } from 'mongoose';
export class CreateProjectDto {
    projectName: string;
    projectDescription: string;
    projectManager: string | Types.ObjectId; 
    members: (string | Types.ObjectId)[];   
    status?: 'Scheduled' | 'In Progress' | 'Completed';
}
  
  export class UpdateProjectDto {
    projectName?: string;
    projectDescription?: string;
    projectManager?: string;
    members?: string[];
    status?: 'Scheduled' | 'In Progress' | 'Completed';
  }