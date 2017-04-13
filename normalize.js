const normalizr = require('normalizr');
const R = require('ramda');

const myData = {
  "expand": "renderedFields,names,schema,operations,editmeta,changelog,versionedRepresentations",
  "id": "10501",
  "self": "https://27developers.atlassian.net/rest/api/2/issue/10501",
  "key": "ALD-28",
  "fields": {
    "issuetype": {
      "self": "https://27developers.atlassian.net/rest/api/2/issuetype/10102",
      "id": "10102",
      "description": "",
      "iconUrl": "https://27developers.atlassian.net/secure/viewavatar?size=xsmall&avatarId=10322&avatarType=issuetype",
      "name": "Matter",
      "subtask": false,
      "avatarId": 10322
    },
    "timespent": null,
    "project": {
      "self": "https://27developers.atlassian.net/rest/api/2/project/10000",
      "id": "10000",
      "key": "ALD",
      "name": "Alacrity Dev",
      "avatarUrls": {
        "48x48": "https://27developers.atlassian.net/secure/projectavatar?pid=10000&avatarId=10330",
        "24x24": "https://27developers.atlassian.net/secure/projectavatar?size=small&pid=10000&avatarId=10330",
        "16x16": "https://27developers.atlassian.net/secure/projectavatar?size=xsmall&pid=10000&avatarId=10330",
        "32x32": "https://27developers.atlassian.net/secure/projectavatar?size=medium&pid=10000&avatarId=10330"
      }
    },
    "fixVersions": [],
    "resolution": null,
    "customfield_10104": [],
    "customfield_10105": null,
    "customfield_10106": null,
    "resolutiondate": null,
    "workratio": -1,
    "lastViewed": "2017-03-13T12:44:29.378+0000",
    "watches": {
      "self": "https://27developers.atlassian.net/rest/api/2/issue/ALD-28/watchers",
      "watchCount": 1,
      "isWatching": true
    },
    "created": "2017-03-13T12:44:00.454+0000",
    "customfield_10100": null,
    "priority": {
      "self": "https://27developers.atlassian.net/rest/api/2/priority/3",
      "iconUrl": "https://27developers.atlassian.net/images/icons/priorities/medium.svg",
      "name": "Medium",
      "id": "3"
    },
    "customfield_10101": null,
    "customfield_10102": null,
    "labels": [],
    "customfield_10103": null,
    "timeestimate": null,
    "issuelinks": [],
    "assignee": null,
    "updated": "2017-03-13T12:44:00.454+0000",
    "status": {
      "self": "https://27developers.atlassian.net/rest/api/2/status/10000",
      "description": "",
      "iconUrl": "https://27developers.atlassian.net/images/icons/status_generic.gif",
      "name": "To Do",
      "id": "10000",
      "statusCategory": {
        "self": "https://27developers.atlassian.net/rest/api/2/statuscategory/2",
        "id": 2,
        "key": "new",
        "colorName": "blue-gray",
        "name": "To Do"
      }
    },
    "components": [],
    "timeoriginalestimate": null,
    "description": "This is a test matter with all fields filled in, created on Jira.",
    "customfield_10210": null,
    "customfield_10211": null,
    "customfield_10212": null,
    "timetracking": {},
    "customfield_10005": null,
    "customfield_10205": null,
    "customfield_10206": null,
    "customfield_10207": null,
    "attachment": [],
    "customfield_10208": null,
    "customfield_10209": null,
    "summary": "Test Matter on Jira",
    "creator": {
      "self": "https://27developers.atlassian.net/rest/api/2/user?username=claire.mitchell",
      "name": "claire.mitchell",
      "key": "claire.mitchell",
      "emailAddress": "claire.mitchell@27partners.com",
      "avatarUrls": {
        "48x48": "https://27developers.atlassian.net/secure/useravatar?ownerId=claire.mitchell&avatarId=10500",
        "24x24": "https://27developers.atlassian.net/secure/useravatar?size=small&ownerId=claire.mitchell&avatarId=10500",
        "16x16": "https://27developers.atlassian.net/secure/useravatar?size=xsmall&ownerId=claire.mitchell&avatarId=10500",
        "32x32": "https://27developers.atlassian.net/secure/useravatar?size=medium&ownerId=claire.mitchell&avatarId=10500"
      },
      "displayName": "Claire Mitchell",
      "active": true,
      "timeZone": "Europe/London"
    },
    "customfield_10120": "0|i0003j:",
    "reporter": {
      "self": "https://27developers.atlassian.net/rest/api/2/user?username=claire.mitchell",
      "name": "claire.mitchell",
      "key": "claire.mitchell",
      "emailAddress": "claire.mitchell@27partners.com",
      "avatarUrls": {
        "48x48": "https://27developers.atlassian.net/secure/useravatar?ownerId=claire.mitchell&avatarId=10500",
        "24x24": "https://27developers.atlassian.net/secure/useravatar?size=small&ownerId=claire.mitchell&avatarId=10500",
        "16x16": "https://27developers.atlassian.net/secure/useravatar?size=xsmall&ownerId=claire.mitchell&avatarId=10500",
        "32x32": "https://27developers.atlassian.net/secure/useravatar?size=medium&ownerId=claire.mitchell&avatarId=10500"
      },
      "displayName": "Claire Mitchell",
      "active": true,
      "timeZone": "Europe/London"
    },
    "customfield_10000": "{}",
    "customfield_10001": null,
    "customfield_10321": null,
    "customfield_10322": null,
    "customfield_10117": null,
    "environment": null,
    "customfield_10315": "Test Matter",
    "customfield_10118": null,
    "customfield_10119": null,
    "customfield_10317": {
      "self": "https://27developers.atlassian.net/rest/api/2/customFieldOption/10105",
      "value": "Employee Law",
      "id": "10105"
    },
    "duedate": "2017-03-17",
    "customfield_10319": null,
    "progress": {
      "progress": 0,
      "total": 0
    },
    "comment": {
      "comments": [],
      "maxResults": 0,
      "total": 0,
      "startAt": 0
    },
    "votes": {
      "self": "https://27developers.atlassian.net/rest/api/2/issue/ALD-28/votes",
      "votes": 0,
      "hasVoted": false
    },
    "worklog": {
      "startAt": 0,
      "maxResults": 20,
      "total": 0,
      "worklogs": []
    }
  }
};

const user = new normalizr.schema.Entity('users', {}, { idAttribute: 'name' });
const project = new normalizr.schema.Entity('projects');
const issueType = new normalizr.schema.Entity(
  'issueTypes',
  {},
  {
    idAttribute: 'name'
  }
);
const priority = new normalizr.schema.Entity('priorities');
const status = new normalizr.schema.Entity('statuses');
const issue = new normalizr.schema.Entity(
  'issues',
  {
    fields: {
      issuetype: issueType,
      status,
      priority,
      creator: user,
      reporter: user,
      project
    }
  },
  { idAttribute: 'key' }
);
// const mySchema = {
//   issues: [ issue ],
//   users: [ user ]
// };
const normalizeData = normalizr.normalize(myData, issue);

console.log(JSON.stringify(normalizeData, null, 4));
