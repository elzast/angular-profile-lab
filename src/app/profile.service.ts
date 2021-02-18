import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userProfile: UserProfile = {
    name: 'Eli',
    contact: 'ezsto92@gmail.com',
    bio: 'Some stuff about a bio',
  };

  constructor() {}

  getUserProfile = (): UserProfile => {
    return this.userProfile;
  };
  setUserProfile = (userData: UserProfile) => {
    this.userProfile.name = userData.name;
    this.userProfile.contact = userData.contact;
    this.userProfile.bio = userData.bio;
  };
}
