export interface UserTS {
   id: number;
   name: string;
   profilePic: string;
}

export interface ActivitiesTS {
   id: number;
   name: string;
   img: string;
   des: string;
   min: string;
}

export interface OnlineFriendsTS {
   id: number;
   name: string;
   img: string;
   online: boolean;
}

export interface SuggestionTS {
   id: number;
   name: string;
   img: string;
}