/**
 * api.ts
 *
 * API client for No Spoilers!
 */

import axios from 'axios';

const BASE_URL="https://no-spoilers.ngrok.io/api/v1"

interface Room {
  title: string;
  type: string;
  length: number;
  progress: number;
  code: string;
  friends: Member[];
}

interface Member {
  name: string;
  progress: number;
}

export class API {
  // axios instance
  instance: any;

  constructor(token: string) {
    this.instance = axios.create({
      baseURL: BASE_URL,
      headers: {'Authorization': `Bearer ${token}`}
    });
  }

  async getRooms(): Promise<Room[] | undefined>  {
    try {
      const response = await axios.get('/rooms');
      if (response.status == 200) {
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
