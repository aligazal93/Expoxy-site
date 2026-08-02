export interface ProjectListItem {
    content: string;
}

export interface ProjectVideo {
    url: string;
    video_id: string;
}

export interface ProjectImage {
    url: string;
}

export interface ProjectDetails {
    id: number;
    name: string;
    subtitle: string;
    content: string;
    image: string;
    image_before: string;
    image_after: string;
    steps: ProjectListItem[];
    goals: ProjectListItem[];
    challenges: ProjectListItem[];
    videos: ProjectVideo[];
    images: ProjectImage[];
}


export interface ProjectDetailsResponse {
    project: ProjectDetails;
}