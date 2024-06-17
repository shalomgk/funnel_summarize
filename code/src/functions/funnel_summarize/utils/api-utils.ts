import { betaSDK, client } from "@devrev/typescript-sdk";
import { TimelineEntriesCreateRequestType } from "@devrev/typescript-sdk/dist/auto-generated/beta/beta-devrev-sdk";
import axios, { AxiosResponse } from "axios";

export type HTTPResponse = {
  success: boolean;
  message: string;
  data: any;
};

export const defaultResponse: HTTPResponse = {
  success: false,
  message: "",
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
        this.endpoint + "/internal/works.get",
        {
          id: id,
        },
        {
          headers: {
            Authorization: this.token,
            "Content-Type": "application/json",
          },
        }
      );
      return {
        success: true,
        message: "Work fetched Successfully.",
        data: response.data,
      };
    } catch (error: any) {
      if (error.response) {
        const err: string = `Failed to fetch work. Err: ${JSON.stringify(
          error.response.data
        )}, Status: ${error.response.status}`;
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

  async createWorkIssue(
    title: string,
    description: string,
    owner: string ="don:identity:dvrv-us-1:devo/11Cf6ETGdh:devu/2"
  ): Promise<HTTPResponse> {
    try {
      // We use internal api as some of the fields are not exposed in the public api.
      const response: AxiosResponse = await axios.post(
        this.endpoint + "/internal/works.create",
        {
          type: "issue",
          applies_to_part: "don:core:dvrv-us-1:devo/11Cf6ETGdh:product/2",
          owned_by: [owner],
          title: title,
          body: description,
        },
        {
          headers: {
            Authorization: this.token,
            "Content-Type": "application/json",
          },
        }
      );
      return {
        success: true,
        message: "Work added Successfully.",
        data: response.data,
      };
    } catch (error: any) {
      if (error.response) {
        const err: string = `Failed to fetch work. Err: ${JSON.stringify(
          error.response.data
        )}, Status: ${error.response.status}`;
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

  async getAccount(id: string): Promise<HTTPResponse> {
    try {
      const response: AxiosResponse = await this.devRevBetaSdk.accountsGet({
        id: id,
      });
      return {
        success: true,
        message: "Account fetched Successfully.",
        data: response.data,
      };
    } catch (error: any) {
      if (error.response) {
        const err: string = `Failed to fetch account. Err: ${JSON.stringify(
          error.response.data
        )}, Status: ${error.response.status}`;
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
      const response: AxiosResponse =
        await this.devRevBetaSdk.timelineEntriesCreate({
          object: id,
          type: TimelineEntriesCreateRequestType.TimelineComment,
          body: body,
        });
      return {
        success: true,
        message: "Account fetched Successfully.",
        data: response.data,
      };
    } catch (error: any) {
      if (error.response) {
        const err: string = `Failed to fetch account. Err: ${JSON.stringify(
          error.response.data
        )}, Status: ${error.response.status}`;
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

  async getFunnelAnalytics(funnelId: string = "1866", appId : number = 1821, appVersion: string = "0",
    platform : number = 1, fromDate : string = "2024-06-06 18:30:00", toDate : string = "2024-06-14 09:23:03"
  ): Promise<any> {
    try {
      
      // const url = 'https://app.userexperior.com/funnelrest/api/v1/funnel/analysis/analyticalPage/fetchFunnelAnalyticsPageApi';
      // const headers = {
      //   'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtdWJpbkB1c2VyZXhwZXJpb3IuY29tIiwiZXhwIjoxNzE4Njk2NzQxLCJpYXQiOjE3MTg2MTAzNDF9.8whq3eLBUSfTyY--m2wYV3XysFGlgYxOMm0hEQG2q4thHycnsuHgu856RtFsac_20o2uT44CeHfRNq_xxVa4aQ',  // Replace with your actual authorization token
      //     'Content-Type': 'application/json'
      // };
      // const body = {
      //   funnelId: funnelId,
      //   appId: appId,
      //   appVersion: appVersion,
      //   platform: platform,
      //   fromDate: fromDate,
      //   toDate: toDate
      // }
        
      // const response = await axios.post(url, { headers , body});
      // console.log("testingResponse 1", response.data!=null);
      
      // console.log("testingResponse", response.data!=null);
      // return response.data;

      
      

      const requestData = {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtdWJpbkB1c2VyZXhwZXJpb3IuY29tIiwiZXhwIjoxNzE4Njk2NzQxLCJpYXQiOjE3MTg2MTAzNDF9.8whq3eLBUSfTyY--m2wYV3XysFGlgYxOMm0hEQG2q4thHycnsuHgu856RtFsac_20o2uT44CeHfRNq_xxVa4aQ',
          'Content-Type': 'application/json'
        },
        body: {
          funnelId: '1866',
          appId: 1821,
          appVersion: '0',
          platform: 1,
          fromDate: '2024-06-06 18:30:00',
          toDate: '2024-06-14 09:23:03'
        }
      };
      axios.post('https://app.userexperior.com/funnelrest/api/v1/funnel/graph', requestData)
  .then(response => {
    console.log('testingResponse data:', response.data);
  })
  .catch(error => {
    if (error.response) {
      // The server responded with a status code outside the range of 2xx
      console.error('testingResponseServer responded with status:', error.response.status);
      console.error('testingResponseResponse data:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('testingResponseNo response received:', error.request);
    } else {
      // Something happened in setting up the request
    console.error('testingResponserequest configuration:', error.config);
    console.error('testingResponse Error setting up request:', error.message);
    }
    console.error('testingResponseRequest configuration:', error.config);
  });
    } catch (error: any) {
      console.error("testingResponse Error executing fetching insights", error);
      return "";
    }
  }
}
