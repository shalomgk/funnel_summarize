import { betaSDK, client } from '@devrev/typescript-sdk';
import { TimelineEntriesCreateRequestType } from '@devrev/typescript-sdk/dist/auto-generated/beta/beta-devrev-sdk';
import { AxiosResponse } from 'axios';
import axios from 'axios';

export type HTTPResponse = {
  success: boolean;
  message: string;
  data: any;
};

export const defaultResponse: HTTPResponse = {
  success: false,
  message: '',
  data: {},
};

export class SdkUtils {
  public devRevBetaSdk!: betaSDK.Api<HTTPResponse>;

  token: string;

  endpoint: string;
 
  constructor(endpoint: string, token: string) {
    this.devRevBetaSdk = client.setupBeta({
      endpoint: endpoint,
      token: token,
    });
    this.token = token;
    this.endpoint = endpoint;
  }

  async getWork(id: string): Promise<HTTPResponse> {
    try {
      // We use internal api as some of the fields are not exposed in the public api.
      const response: AxiosResponse = await axios.post(
        this.endpoint + '/internal/works.get',
        {
          'id': id,
        },
        {
          headers: {
            Authorization: this.token,
            'Content-Type': 'application/json',
          },      
        },
      );
      return { success: true, message: 'Work fetched Successfully.', data: response.data };
    } catch (error: any) {
      if (error.response) {
        const err: string = `Failed to fetch work. Err: ${JSON.stringify(error.response.data)}, Status: ${error.response.status}`;
        return { ...defaultResponse, message: err };
      } else if (error.request) {
        return {
          ...defaultResponse,
          message: error.request.data,
        };
      } else {
        return { ...defaultResponse, message: error };
      }
    }
  }

  // async getFunnelAnalytics(id: string): Promise<HTTPResponse> {
  //   try {
  //     const response: AxiosResponse = await this.devRevBetaSdk.accountsGet({ 'id': id });
  //     return { success: true, message: 'Account fetched Successfully.', data: response.data };
  //   } catch (error: any) {
  //     if (error.response) {
  //       const err: string = `Failed to fetch account. Err: ${JSON.stringify(error.response.data)}, Status: ${error.response.status}`;
  //       return { ...defaultResponse, message: err };
  //     } else if (error.request) {
  //       return {
  //         ...defaultResponse,
  //         message: error.request.data,
  //       };
  //     } else {
  //       return { ...defaultResponse, message: error };
  //     }
  //   }
  // }


  async getFunnelAnalytics(id: string = "1866", appId: number = 1821, appVersion: string = "0",  platform: number = 1, fromDate: string = "2024-06-06 18:30:00", toDate: string = "2024-06-14 09:23:03"): Promise<HTTPResponse> {
    const url = 'https://app.userexperior.com/funnelrest/api/v1/funnel/analysis/analyticalPage/fetchFunnelAnalyticsPageApi';
    const headers = {
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtdWJpbkB1c2VyZXhwZXJpb3IuY29tIiwiZXhwIjoxNzE4NjA3NzA5LCJpYXQiOjE3MTg1MjEzMDl9.oQ23ahiiht85XKwsLsBrgdbEtp_dyPghs97nuhlUNO1GVbFZf5N-G92IUGmG9otn3QmPRHHMxWo-397_06NZIA',  // Replace with your actual authorization token
        'Content-Type': 'application/json'
    };

    try {
        const response: AxiosResponse = await axios.post(url, { id }, { headers });

        return { success: true, message: 'Data fetched successfully', data: response.data };
    } catch (error: any) {
      if (error.response) {
        const err: string = `Failed to fetch account. Err: ${JSON.stringify(error.response.data)}, Status: ${error.response.status}`;
        return { ...defaultResponse, message: err };
      } else if (error.request) {
        return {
          ...defaultResponse,
          message: error.request.data,
        };
      } else {
        return { ...defaultResponse, message: error };
      }
    }
  }

  async getConversionAppVersionSkill(id: string = "1866", appId: number = 1821, appVersion: string = "0",  platform: number = 1, fromDate: string = "2024-06-06 18:30:00", toDate: string = "2024-06-14 09:23:03"): Promise<HTTPResponse> {
    try {
      const response: AxiosResponse = await this.devRevBetaSdk.accountsGet({ 'id': id });
      return { success: true, message: 'Account fetched Successfully.', data: response.data };
    } catch (error: any) {
      if (error.response) {
        const err: string = `Failed to fetch account. Err: ${JSON.stringify(error.response.data)}, Status: ${error.response.status}`;
        return { ...defaultResponse, message: err };
      } else if (error.request) {
        return {
          ...defaultResponse,
          message: error.request.data,
        };
      } else {
        return { ...defaultResponse, message: error };
      }
    }
  }

  async getFunnelEffortsSkill(id: string = "1866", appId: number = 1821, appVersion: string = "0",  platform: number = 1, fromDate: string = "2024-06-06 18:30:00", toDate: string = "2024-06-14 09:23:03"): Promise<HTTPResponse> {
    const url = 'https://app.userexperior.com/funnelrest/api/v1/funnel/analysis/analyticalPage/fetchFunnelEfforTaken';
    const headers = {
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtdWJpbkB1c2VyZXhwZXJpb3IuY29tIiwiZXhwIjoxNzE4NjA3NzA5LCJpYXQiOjE3MTg1MjEzMDl9.oQ23ahiiht85XKwsLsBrgdbEtp_dyPghs97nuhlUNO1GVbFZf5N-G92IUGmG9otn3QmPRHHMxWo-397_06NZIA',  // Replace with your actual authorization token
        'Content-Type': 'application/json'
    };

    try {
        const response: AxiosResponse = await axios.post(url, { id }, { headers });

        return { success: true, message: 'Data fetched successfully', data: response.data };
    } catch (error: any) {
      if (error.response) {
        const err: string = `Failed to fetch account. Err: ${JSON.stringify(error.response.data)}, Status: ${error.response.status}`;
        return { ...defaultResponse, message: err };
      } else if (error.request) {
        return {
          ...defaultResponse,
          message: error.request.data,
        };
      } else {
        return { ...defaultResponse, message: error };
      }
    }
  }
  

  async sendComment(id: string, body: string): Promise<HTTPResponse> {
    try {
      const response: AxiosResponse = await this.devRevBetaSdk.timelineEntriesCreate(
        {
          object: id,
          type: TimelineEntriesCreateRequestType.TimelineComment,
          body: body,
        },
      );
      return { success: true, message: 'Account fetched Successfully.', data: response.data };
    } catch (error: any) {
      if (error.response) {
        const err: string = `Failed to fetch account. Err: ${JSON.stringify(error.response.data)}, Status: ${error.response.status}`;
        return { ...defaultResponse, message: err };
      } else if (error.request) {
        return {
          ...defaultResponse,
          message: error.request.data,
        };
      } else {
        return { ...defaultResponse, message: error };
      }
    }
  }

  async getFunnelOverviewPartOne(id: string = "1866", appId: number = 1821, appVersion: string = "0",  platform: number = 1, fromDate: string = "2024-06-06 18:30:00", toDate: string = "2024-06-14 09:23:03", processId: string = "1"): Promise<HTTPResponse> {
    const url = 'https://app.userexperior.com/funnelrest/api/v1/funnel/analysis/analyticalPage/fetchFunnelEfforTaken';
    const headers = {
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtdWJpbkB1c2VyZXhwZXJpb3IuY29tIiwiZXhwIjoxNzE4NjA3NzA5LCJpYXQiOjE3MTg1MjEzMDl9.oQ23ahiiht85XKwsLsBrgdbEtp_dyPghs97nuhlUNO1GVbFZf5N-G92IUGmG9otn3QmPRHHMxWo-397_06NZIA',  // Replace with your actual authorization token
        'Content-Type': 'application/json'
    };

    try {
        const response: AxiosResponse = await axios.post(url, { id }, { headers });

        return { success: true, message: 'Data fetched successfully', data: response.data };
    } catch (error: any) {
      if (error.response) {
        const err: string = `Failed to fetch account. Err: ${JSON.stringify(error.response.data)}, Status: ${error.response.status}`;
        return { ...defaultResponse, message: err };
      } else if (error.request) {
        return {
          ...defaultResponse,
          message: error.request.data,
        };
      } else {
        return { ...defaultResponse, message: error };
      }
    }
  }

  async getFunnelOverviewPartTwo(id: string = "1866", appId: number = 1821, appVersion: string = "0",  platform: number = 1, fromDate: string = "2024-06-06 18:30:00", toDate: string = "2024-06-14 09:23:03", processId: string = "2"): Promise<HTTPResponse> {
    const url = 'https://app.userexperior.com/funnelrest/api/v1/funnel/analysis/analyticalPage/fetchFunnelEfforTaken';
    const headers = {
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtdWJpbkB1c2VyZXhwZXJpb3IuY29tIiwiZXhwIjoxNzE4NjA3NzA5LCJpYXQiOjE3MTg1MjEzMDl9.oQ23ahiiht85XKwsLsBrgdbEtp_dyPghs97nuhlUNO1GVbFZf5N-G92IUGmG9otn3QmPRHHMxWo-397_06NZIA',  // Replace with your actual authorization token
        'Content-Type': 'application/json'
    };

    try {
        const response: AxiosResponse = await axios.post(url, { id }, { headers });

        return { success: true, message: 'Data fetched successfully', data: response.data };
    } catch (error: any) {
      if (error.response) {
        const err: string = `Failed to fetch account. Err: ${JSON.stringify(error.response.data)}, Status: ${error.response.status}`;
        return { ...defaultResponse, message: err };
      } else if (error.request) {
        return {
          ...defaultResponse,
          message: error.request.data,
        };
      } else {
        return { ...defaultResponse, message: error };
      }
    }
  }

  async getFunnelOverviewPartThree(id: string = "1866", appId: number = 1821, appVersion: string = "0",  platform: number = 1, fromDate: string = "2024-06-06 18:30:00", toDate: string = "2024-06-14 09:23:03", processId: string = "3"): Promise<HTTPResponse> {
    const url = 'https://app.userexperior.com/funnelrest/api/v1/funnel/analysis/analyticalPage/fetchFunnelEfforTaken';
    const headers = {
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtdWJpbkB1c2VyZXhwZXJpb3IuY29tIiwiZXhwIjoxNzE4NjA3NzA5LCJpYXQiOjE3MTg1MjEzMDl9.oQ23ahiiht85XKwsLsBrgdbEtp_dyPghs97nuhlUNO1GVbFZf5N-G92IUGmG9otn3QmPRHHMxWo-397_06NZIA',  // Replace with your actual authorization token
        'Content-Type': 'application/json'
    };

    try {
        const response: AxiosResponse = await axios.post(url, { id }, { headers });

        return { success: true, message: 'Data fetched successfully', data: response.data };
    } catch (error: any) {
      if (error.response) {
        const err: string = `Failed to fetch account. Err: ${JSON.stringify(error.response.data)}, Status: ${error.response.status}`;
        return { ...defaultResponse, message: err };
      } else if (error.request) {
        return {
          ...defaultResponse,
          message: error.request.data,
        };
      } else {
        return { ...defaultResponse, message: error };
      }
    }
  }

  async getFunnelDropoutSkill(id: string = "1866", appId: number = 1821, appVersion: string = "0",  platform: number = 1, fromDate: string = "2024-06-06 18:30:00", toDate: string = "2024-06-14 09:23:03"): Promise<HTTPResponse> {
    const url = 'https://app.userexperior.com/funnelrest/api/v1/funnel/analysis/getDataViewPageApi';
    const headers = {
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtdWJpbkB1c2VyZXhwZXJpb3IuY29tIiwiZXhwIjoxNzE4NjA3NzA5LCJpYXQiOjE3MTg1MjEzMDl9.oQ23ahiiht85XKwsLsBrgdbEtp_dyPghs97nuhlUNO1GVbFZf5N-G92IUGmG9otn3QmPRHHMxWo-397_06NZIA',  // Replace with your actual authorization token
        'Content-Type': 'application/json'
    };

    try {
        const response: AxiosResponse = await axios.post(url, { id }, { headers });

        return { success: true, message: 'Data fetched successfully', data: response.data };
    } catch (error: any) {
      if (error.response) {
        const err: string = `Failed to fetch account. Err: ${JSON.stringify(error.response.data)}, Status: ${error.response.status}`;
        return { ...defaultResponse, message: err };
      } else if (error.request) {
        return {
          ...defaultResponse,
          message: error.request.data,
        };
      } else {
        return { ...defaultResponse, message: error };
      }
    }
  }

  async getFunnelDataSkill(id: string = "1866", appId: number = 1821, appVersion: string = "0",  platform: number = 1, fromDate: string = "2024-06-06 18:30:00", toDate: string = "2024-06-14 09:23:03"): Promise<HTTPResponse> {
    const url = 'https://app.userexperior.com/funnelrest/api/v1/funnel/graph';
    const headers = {
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtdWJpbkB1c2VyZXhwZXJpb3IuY29tIiwiZXhwIjoxNzE4NjA3NzA5LCJpYXQiOjE3MTg1MjEzMDl9.oQ23ahiiht85XKwsLsBrgdbEtp_dyPghs97nuhlUNO1GVbFZf5N-G92IUGmG9otn3QmPRHHMxWo-397_06NZIA',  // Replace with your actual authorization token
        'Content-Type': 'application/json'
    };

    try {
        const response: AxiosResponse = await axios.post(url, { id }, { headers });

        return { success: true, message: 'Data fetched successfully', data: response.data };
    } catch (error: any) {
      if (error.response) {
        const err: string = `Failed to fetch account. Err: ${JSON.stringify(error.response.data)}, Status: ${error.response.status}`;
        return { ...defaultResponse, message: err };
      } else if (error.request) {
        return {
          ...defaultResponse,
          message: error.request.data,
        };
      } else {
        return { ...defaultResponse, message: error };
      }
    }
  }

  
}

