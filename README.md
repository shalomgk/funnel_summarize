# \<Submission Title\>

## Team details

- Team name: Bomb.ai
- Team members:
  - Aman Jain
  - Shalom George
  - Shankar Igave
  - Abhinav Jangid
- T-shirt sizes:
  - Aman Jain           L
  - Shalom George       L
  - Shankar Igave       XL             
  - Abhinav Jangid      M

## Writeup

\<Writeup\>

### Agent

\<Goal\>

Give funnel summary and funnel analysis in human readable format so as to make the understanding of the funnel easier and help making decisions regarding the funnel

\<Guidance\>

Strictly use all the skills defined that is FetchFunnelAnalyticsSkill(), FetchConversionAppVersionSkill(),FetchFunnelEffortsSkill(), FetchFunnelAPIOverviewPartOneSkill(), FetchFunnelAPIOverviewPartTwoSkill(), FetchFunnelAPIOverviewPartThreeSkill(), GetFunnelDropoutSkill() and GetFunnelDataSkill() before providing a detailed summary of the funnel in paragraphs in human readable mode."

### Targeted personas

Product Managers and Analysts: Monitor and optimise the user journey, understanding funnel health, identifying dropout points, and analysing performance metrics.
Technical Teams (Developers and QA): Use detailed performance data to troubleshoot issues, enhance app stability, and ensure a smooth user experience.
Executives and Stakeholders: Utilise high-level summaries and key takeaways to make informed strategic decisions.

### Skills used in the agent

\<List of skills your agent may call. Please provide a brief description of all these skills.\>

FetchFunnelAnalyticsSkill :  This Skill provides time users spend in their journey, providing average, minimum, and maximum journey times, as well as counts of journey times that are considered outliers. It also reports on crashes, ANRs, rage clicks, and total error counts.

FetchConversionAppVersionSkill: This Skill reports the conversion rates across different app versions, highlighting performance differences based on the version used.

FetchFunnelEffortsSkill: This Skill provides statistics on user navigation through different screens, including the average, minimum, and maximum number of distinct screens visited, along with outlier counts.

FetchFunnelAPIOverviewPartOneSkill: This Skill provides an overview of API performance, including hit counts, failed API counts, average response times.

FetchFunnelAPIOverviewPartTwoSkill: This Skill offers detailed average response times for individual APIs, identifying the slowest performing ones.

FetchFunnelAPIOverviewPartThreeSkill: This Skill provides the percentage of API requests that return a certain status code, highlighting the success rate.

GetFunnelDropoutSkill : This Skill provides detailed data about each step in the funnel, including counts of sessions, rage clicks, ANRs (Application Not Responding), crashes, and API errors. It also includes the average response time for APIs at each step and the dropout percentage.

GetFunnelDataSkill: This Skill provides conversion rate of funnel and count of sessions  in each steps.
Impact of the solution


### Impact of the solution

The funnel analysis solution is ingenious due to its comprehensive and detailed approach. It collects granular data at each step of the user journey, including metrics on user behavior (rage clicks, ANRs, crashes) and technical performance (API response times, error rates). By analyzing performance across different app versions and tracking daily conversion rates, it provides a holistic view of both user experience and app stability. The solution's actionable insights help in pinpointing and addressing specific issues, optimizing user flow, and enhancing overall conversion rates. This multi-faceted approach ensures data-driven decision-making for continuous improvement.

### Ingenuity of the solution 

\<Ingenuity description\>

### Imminent use - how quickly can it be put to use

Currently it will take time to be in production because we need merging of UE and Devrev.

\<Imminent use description. How thoroughly your agent address the needs of the catered personas?\>

### Agent benchmarking

`This section is a must have to consider your submission eligible.`

\<Examples over which you tested your agent and the expected outputs.\>

goal = "Give funnel summary and funnel analysis in human readable mode"

guidance = "Strictly use all the skills defined that is FetchFunnelAnalyticsSkill(), FetchConversionAppVersionSkill(),FetchFunnelEffortsSkill(), FetchFunnelAPIOverviewPartOneSkill(), FetchFunnelAPIOverviewPartTwoSkill(), FetchFunnelAPIOverviewPartThreeSkill(), GetFunnelDropoutSkill() and GetFunnelDataSkill() before providing a detailed summary of the funnel in human readable mode."

Question: Summarize the conversion rate, dropout analysis, and funnel health, including API performance, screen navigation, journey time, and error metrics, followed by recommendations to improve conversion in a paragraph.

Excepted output: 
https://docs.google.com/document/d/1zRpj_9GyfKzuEGQj78n4kMkMNJCom6NUltala8rUadg/edit?usp=sharing

## How to try out your Agent?

https://colab.research.google.com/drive/1c4zWwa7_my2PF38GUct8Lq4vKBL2mx4c?usp=sharing

Run all the blocks and on user input ask for funnel summary and you will be able to see the output.

## Screenshots of the output

\<Images\>

https://docs.google.com/document/d/1J7wv0x2p1FM-W3V0DwIB_hJ_X0ClBBupS7OfP_44iac/edit?usp=sharing

## Video demonstration

\<Video link\>

Colab one: Successful one: 
https://drive.google.com/file/d/1j0hOaOLkmScrlY54TBcYf2Mxis9vor9n/view?usp=drive_link

Failed one	: 
https://drive.google.com/file/d/1GlvgnLaiRHmzYE4cw7CNYFPY4-Rx1EmX/view?usp=drive_link

## Link to the presentation

\<Presentation link\>

https://docs.google.com/presentation/d/1JxHBYLYd2aoFF53QbsjiA2KkKWorVmx4QvlI3wPUjKg/edit#slide=id.g2e610de6735_0_47


## Agent Platform feedback

### Did you create an agent using the platform?

#### If yes, please provide the ID of the agent which you created and the session object ID where you tested these agents.
\<Agent ID\>
\<List of Agent session IDs\>

Yes, we created the agent using the platform but were not able to get the response due to an unknown error. We were able to setup the snap-ins and everything required to run the agent on the platform. 
Attached images for your reference. 

https://docs.google.com/document/d/1KscTz5cbbaQRzf9QT6oTwzEbaYkbQh8Ac2lUnnvOLjM/edit?usp=sharing

#### If no, why did you choose not to use the platform?
\<Reasons\>


## (Optional) Any other information you would like to share

