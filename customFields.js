const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const allFields = [
  {
    "id": "fixVersions",
    "key": "fixVersions",
    "name": "Fix Version/s",
    "custom": false,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "fixVersion"
    ],
    "schema": {
      "type": "array",
      "items": "version",
      "system": "fixVersions"
    }
  },
  {
    "id": "resolution",
    "key": "resolution",
    "name": "Resolution",
    "custom": false,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "resolution"
    ],
    "schema": {
      "type": "resolution",
      "system": "resolution"
    }
  },
  {
    "id": "customfield_10104",
    "key": "customfield_10104",
    "name": "Request participants",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10104]",
      "Request participants"
    ],
    "schema": {
      "type": "array",
      "items": "user",
      "custom": "com.atlassian.servicedesk:sd-request-participants",
      "customId": 10104
    }
  },
  {
    "id": "customfield_10501",
    "key": "customfield_10501",
    "name": "Attached User",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "Attached User",
      "cf[10501]"
    ],
    "schema": {
      "type": "user",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:userpicker",
      "customId": 10501
    }
  },
  {
    "id": "customfield_10105",
    "key": "customfield_10105",
    "name": "Satisfaction",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10105]",
      "Satisfaction"
    ],
    "schema": {
      "type": "sd-feedback",
      "custom": "com.atlassian.servicedesk:sd-request-feedback",
      "customId": 10105
    }
  },
  {
    "id": "customfield_10106",
    "key": "customfield_10106",
    "name": "Satisfaction date",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10106]",
      "Satisfaction date"
    ],
    "schema": {
      "type": "datetime",
      "custom": "com.atlassian.servicedesk:sd-request-feedback-date",
      "customId": 10106
    }
  },
  {
    "id": "lastViewed",
    "key": "lastViewed",
    "name": "Last Viewed",
    "custom": false,
    "orderable": false,
    "navigable": true,
    "searchable": false,
    "clauseNames": [
      "lastViewed"
    ],
    "schema": {
      "type": "datetime",
      "system": "lastViewed"
    }
  },
  {
    "id": "priority",
    "key": "priority",
    "name": "Priority",
    "custom": false,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "priority"
    ],
    "schema": {
      "type": "priority",
      "system": "priority"
    }
  },
  {
    "id": "customfield_10221",
    "key": "customfield_10221",
    "name": "Quotation Accuracy",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10221]",
      "Quotation Accuracy"
    ],
    "schema": {
      "type": "string",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:textarea",
      "customId": 10221
    }
  },
  {
    "id": "customfield_10100",
    "key": "customfield_10100",
    "name": "[CHART] Date of First Response",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "[CHART] Date of First Response",
      "cf[10100]"
    ],
    "schema": {
      "type": "datetime",
      "custom": "com.atlassian.jira.ext.charting:firstresponsedate",
      "customId": 10100
    }
  },
  {
    "id": "customfield_10222",
    "key": "customfield_10222",
    "name": "Change Comparison",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10222]",
      "Change Comparison"
    ],
    "schema": {
      "type": "string",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:textarea",
      "customId": 10222
    }
  },
  {
    "id": "customfield_10101",
    "key": "customfield_10101",
    "name": "[CHART] Time in Status",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "[CHART] Time in Status",
      "cf[10101]"
    ],
    "schema": {
      "type": "any",
      "custom": "com.atlassian.jira.ext.charting:timeinstatus",
      "customId": 10101
    }
  },
  {
    "id": "customfield_10223",
    "key": "customfield_10223",
    "name": "Matter Accuracy",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10223]",
      "Matter Accuracy"
    ],
    "schema": {
      "type": "string",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:textarea",
      "customId": 10223
    }
  },
  {
    "id": "customfield_10102",
    "key": "customfield_10102",
    "name": "Team",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10102]",
      "Team"
    ],
    "schema": {
      "type": "any",
      "custom": "com.atlassian.teams:rm-teams-custom-field-team",
      "customId": 10102
    }
  },
  {
    "id": "labels",
    "key": "labels",
    "name": "Labels",
    "custom": false,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "labels"
    ],
    "schema": {
      "type": "array",
      "items": "string",
      "system": "labels"
    }
  },
  {
    "id": "customfield_10224",
    "key": "customfield_10224",
    "name": "Country",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10224]",
      "Country"
    ],
    "schema": {
      "type": "option",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:select",
      "customId": 10224
    }
  },
  {
    "id": "customfield_10103",
    "key": "customfield_10103",
    "name": "Request Type",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10103]",
      "Request Type"
    ],
    "schema": {
      "type": "sd-customerrequesttype",
      "custom": "com.atlassian.servicedesk:vp-origin",
      "customId": 10103
    }
  },
  {
    "id": "customfield_10214",
    "key": "customfield_10214",
    "name": "Industry",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10214]",
      "Industry"
    ],
    "schema": {
      "type": "string",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:textfield",
      "customId": 10214
    }
  },
  {
    "id": "customfield_10215",
    "key": "customfield_10215",
    "name": "Area",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "Area",
      "cf[10215]"
    ],
    "schema": {
      "type": "string",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:textfield",
      "customId": 10215
    }
  },
  {
    "id": "customfield_10216",
    "key": "customfield_10216",
    "name": "First Name",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10216]",
      "First Name"
    ],
    "schema": {
      "type": "string",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:textfield",
      "customId": 10216
    }
  },
  {
    "id": "customfield_10217",
    "key": "customfield_10217",
    "name": "Surname",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10217]",
      "Surname"
    ],
    "schema": {
      "type": "string",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:textfield",
      "customId": 10217
    }
  },
  {
    "id": "timeestimate",
    "key": "timeestimate",
    "name": "Remaining Estimate",
    "custom": false,
    "orderable": false,
    "navigable": true,
    "searchable": false,
    "clauseNames": [
      "remainingEstimate",
      "timeestimate"
    ],
    "schema": {
      "type": "number",
      "system": "timeestimate"
    }
  },
  {
    "id": "versions",
    "key": "versions",
    "name": "Affects Version/s",
    "custom": false,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "affectedVersion"
    ],
    "schema": {
      "type": "array",
      "items": "version",
      "system": "versions"
    }
  },
  {
    "id": "customfield_10219",
    "key": "customfield_10219",
    "name": "Cost",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10219]",
      "Cost"
    ],
    "schema": {
      "type": "number",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:float",
      "customId": 10219
    }
  },
  {
    "id": "issuelinks",
    "key": "issuelinks",
    "name": "Linked Issues",
    "custom": false,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [],
    "schema": {
      "type": "array",
      "items": "issuelinks",
      "system": "issuelinks"
    }
  },
  {
    "id": "assignee",
    "key": "assignee",
    "name": "Assignee",
    "custom": false,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "assignee"
    ],
    "schema": {
      "type": "user",
      "system": "assignee"
    }
  },
  {
    "id": "status",
    "key": "status",
    "name": "Status",
    "custom": false,
    "orderable": false,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "status"
    ],
    "schema": {
      "type": "status",
      "system": "status"
    }
  },
  {
    "id": "components",
    "key": "components",
    "name": "Component/s",
    "custom": false,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "component"
    ],
    "schema": {
      "type": "array",
      "items": "component",
      "system": "components"
    }
  },
  {
    "id": "issuekey",
    "key": "issuekey",
    "name": "Key",
    "custom": false,
    "orderable": false,
    "navigable": true,
    "searchable": false,
    "clauseNames": [
      "id",
      "issue",
      "issuekey",
      "key"
    ]
  },
  {
    "id": "customfield_10210",
    "key": "customfield_10210",
    "name": "Capture for JIRA URL",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "Capture for JIRA URL",
      "cf[10210]"
    ],
    "schema": {
      "type": "string",
      "custom": "com.atlassian.bonfire.plugin:bonfire-text",
      "customId": 10210
    }
  },
  {
    "id": "customfield_10211",
    "key": "customfield_10211",
    "name": "Capture for JIRA screen resolution",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "Capture for JIRA screen resolution",
      "cf[10211]"
    ],
    "schema": {
      "type": "string",
      "custom": "com.atlassian.bonfire.plugin:bonfire-text",
      "customId": 10211
    }
  },
  {
    "id": "customfield_10212",
    "key": "customfield_10212",
    "name": "Capture for JIRA jQuery version",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "Capture for JIRA jQuery version",
      "cf[10212]"
    ],
    "schema": {
      "type": "string",
      "custom": "com.atlassian.bonfire.plugin:bonfire-text",
      "customId": 10212
    }
  },
  {
    "id": "customfield_10213",
    "key": "customfield_10213",
    "name": "City",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10213]",
      "City"
    ],
    "schema": {
      "type": "string",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:textfield",
      "customId": 10213
    }
  },
  {
    "id": "customfield_10205",
    "key": "customfield_10205",
    "name": "Raised during",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10205]",
      "Raised during"
    ],
    "schema": {
      "type": "string",
      "custom": "com.atlassian.bonfire.plugin:bonfire-session-cft",
      "customId": 10205
    }
  },
  {
    "id": "customfield_10206",
    "key": "customfield_10206",
    "name": "Test sessions",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10206]",
      "Test sessions"
    ],
    "schema": {
      "type": "string",
      "custom": "com.atlassian.bonfire.plugin:bonfire-multi-session-cft",
      "customId": 10206
    }
  },
  {
    "id": "customfield_10207",
    "key": "customfield_10207",
    "name": "Capture for JIRA user agent",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "Capture for JIRA user agent",
      "cf[10207]"
    ],
    "schema": {
      "type": "string",
      "custom": "com.atlassian.bonfire.plugin:bonfire-text",
      "customId": 10207
    }
  },
  {
    "id": "customfield_10208",
    "key": "customfield_10208",
    "name": "Capture for JIRA browser",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "Capture for JIRA browser",
      "cf[10208]"
    ],
    "schema": {
      "type": "string",
      "custom": "com.atlassian.bonfire.plugin:bonfire-text",
      "customId": 10208
    }
  },
  {
    "id": "customfield_10209",
    "key": "customfield_10209",
    "name": "Capture for JIRA operating system",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "Capture for JIRA operating system",
      "cf[10209]"
    ],
    "schema": {
      "type": "string",
      "custom": "com.atlassian.bonfire.plugin:bonfire-text",
      "customId": 10209
    }
  },
  {
    "id": "creator",
    "key": "creator",
    "name": "Creator",
    "custom": false,
    "orderable": false,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "creator"
    ],
    "schema": {
      "type": "user",
      "system": "creator"
    }
  },
  {
    "id": "reporter",
    "key": "reporter",
    "name": "Reporter",
    "custom": false,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "reporter"
    ],
    "schema": {
      "type": "user",
      "system": "reporter"
    }
  },
  {
    "id": "customfield_10320",
    "key": "customfield_10320",
    "name": "Recommendation",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10320]",
      "Recommendation"
    ],
    "schema": {
      "type": "string",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:textarea",
      "customId": 10320
    }
  },
  {
    "id": "customfield_10321",
    "key": "customfield_10321",
    "name": "Date",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10321]",
      "Date"
    ],
    "schema": {
      "type": "date",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:datepicker",
      "customId": 10321
    }
  },
  {
    "id": "customfield_10322",
    "key": "customfield_10322",
    "name": "Phone Number",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10322]",
      "Phone Number"
    ],
    "schema": {
      "type": "string",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:textfield",
      "customId": 10322
    }
  },
  {
    "id": "customfield_10201",
    "key": "customfield_10201",
    "name": "SRA Number",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10201]",
      "SRA Number"
    ],
    "schema": {
      "type": "number",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:float",
      "customId": 10201
    }
  },
  {
    "id": "customfield_10202",
    "key": "customfield_10202",
    "name": "Role",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10202]",
      "Role"
    ],
    "schema": {
      "type": "string",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:textfield",
      "customId": 10202
    }
  },
  {
    "id": "customfield_10313",
    "key": "customfield_10313",
    "name": "Years of Experience",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10313]",
      "Years of Experience"
    ],
    "schema": {
      "type": "number",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:float",
      "customId": 10313
    }
  },
  {
    "id": "customfield_10314",
    "key": "customfield_10314",
    "name": "Overall Cost",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10314]",
      "Overall Cost"
    ],
    "schema": {
      "type": "number",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:float",
      "customId": 10314
    }
  },
  {
    "id": "customfield_10315",
    "key": "customfield_10315",
    "name": "Title",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10315]",
      "Title"
    ],
    "schema": {
      "type": "string",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:textfield",
      "customId": 10315
    }
  },
  {
    "id": "customfield_10317",
    "key": "customfield_10317",
    "name": "Matter Type",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10317]",
      "Matter Type"
    ],
    "schema": {
      "type": "option",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:select",
      "customId": 10317
    }
  },
  {
    "id": "customfield_10318",
    "key": "customfield_10318",
    "name": "Approach",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "Approach",
      "cf[10318]"
    ],
    "schema": {
      "type": "string",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:textarea",
      "customId": 10318
    }
  },
  {
    "id": "customfield_10319",
    "key": "customfield_10319",
    "name": "Conflicts",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10319]",
      "Conflicts"
    ],
    "schema": {
      "type": "array",
      "items": "string",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:labels",
      "customId": 10319
    }
  },
  {
    "id": "progress",
    "key": "progress",
    "name": "Progress",
    "custom": false,
    "orderable": false,
    "navigable": true,
    "searchable": false,
    "clauseNames": [
      "progress"
    ],
    "schema": {
      "type": "progress",
      "system": "progress"
    }
  },
  {
    "id": "votes",
    "key": "votes",
    "name": "Votes",
    "custom": false,
    "orderable": false,
    "navigable": true,
    "searchable": false,
    "clauseNames": [
      "votes"
    ],
    "schema": {
      "type": "votes",
      "system": "votes"
    }
  },
  {
    "id": "worklog",
    "key": "worklog",
    "name": "Log Work",
    "custom": false,
    "orderable": true,
    "navigable": false,
    "searchable": true,
    "clauseNames": [],
    "schema": {
      "type": "array",
      "items": "worklog",
      "system": "worklog"
    }
  },
  {
    "id": "issuetype",
    "key": "issuetype",
    "name": "Issue Type",
    "custom": false,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "issuetype",
      "type"
    ],
    "schema": {
      "type": "issuetype",
      "system": "issuetype"
    }
  },
  {
    "id": "timespent",
    "key": "timespent",
    "name": "Time Spent",
    "custom": false,
    "orderable": false,
    "navigable": true,
    "searchable": false,
    "clauseNames": [
      "timespent"
    ],
    "schema": {
      "type": "number",
      "system": "timespent"
    }
  },
  {
    "id": "project",
    "key": "project",
    "name": "Project",
    "custom": false,
    "orderable": false,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "project"
    ],
    "schema": {
      "type": "project",
      "system": "project"
    }
  },
  {
    "id": "customfield_10310",
    "key": "customfield_10310",
    "name": "Time Estimate",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10310]",
      "Time Estimate"
    ],
    "schema": {
      "type": "number",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:float",
      "customId": 10310
    }
  },
  {
    "id": "customfield_10311",
    "key": "customfield_10311",
    "name": "Cost Estimate",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10311]",
      "Cost Estimate"
    ],
    "schema": {
      "type": "number",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:float",
      "customId": 10311
    }
  },
  {
    "id": "customfield_10312",
    "key": "customfield_10312",
    "name": "Staffing",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10312]",
      "Staffing"
    ],
    "schema": {
      "type": "number",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:float",
      "customId": 10312
    }
  },
  {
    "id": "customfield_10302",
    "key": "customfield_10302",
    "name": "VAT Number",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10302]",
      "VAT Number"
    ],
    "schema": {
      "type": "number",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:float",
      "customId": 10302
    }
  },
  {
    "id": "customfield_10303",
    "key": "customfield_10303",
    "name": "Address",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "Address",
      "cf[10303]"
    ],
    "schema": {
      "type": "string",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:textarea",
      "customId": 10303
    }
  },
  {
    "id": "customfield_10304",
    "key": "customfield_10304",
    "name": "In House Legal Staff",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10304]",
      "In House Legal Staff"
    ],
    "schema": {
      "type": "number",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:float",
      "customId": 10304
    }
  },
  {
    "id": "customfield_10305",
    "key": "customfield_10305",
    "name": "Email",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10305]",
      "Email"
    ],
    "schema": {
      "type": "string",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:textfield",
      "customId": 10305
    }
  },
  {
    "id": "customfield_10306",
    "key": "customfield_10306",
    "name": "Organisation Size",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10306]",
      "Organisation Size"
    ],
    "schema": {
      "type": "option",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:select",
      "customId": 10306
    }
  },
  {
    "id": "customfield_10307",
    "key": "customfield_10307",
    "name": "Company Type",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10307]",
      "Company Type"
    ],
    "schema": {
      "type": "array",
      "items": "option",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:multiselect",
      "customId": 10307
    }
  },
  {
    "id": "resolutiondate",
    "key": "resolutiondate",
    "name": "Resolved",
    "custom": false,
    "orderable": false,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "resolutiondate",
      "resolved"
    ],
    "schema": {
      "type": "datetime",
      "system": "resolutiondate"
    }
  },
  {
    "id": "customfield_10308",
    "key": "customfield_10308",
    "name": "Billing Contact Name",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "Billing Contact Name",
      "cf[10308]"
    ],
    "schema": {
      "type": "string",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:textfield",
      "customId": 10308
    }
  },
  {
    "id": "customfield_10309",
    "key": "customfield_10309",
    "name": "Conclusion",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10309]",
      "Conclusion"
    ],
    "schema": {
      "type": "string",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:textarea",
      "customId": 10309
    }
  },
  {
    "id": "workratio",
    "key": "workratio",
    "name": "Work Ratio",
    "custom": false,
    "orderable": false,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "workratio"
    ],
    "schema": {
      "type": "number",
      "system": "workratio"
    }
  },
  {
    "id": "watches",
    "key": "watches",
    "name": "Watchers",
    "custom": false,
    "orderable": false,
    "navigable": true,
    "searchable": false,
    "clauseNames": [
      "watchers"
    ],
    "schema": {
      "type": "watches",
      "system": "watches"
    }
  },
  {
    "id": "thumbnail",
    "key": "thumbnail",
    "name": "Images",
    "custom": false,
    "orderable": false,
    "navigable": true,
    "searchable": false,
    "clauseNames": []
  },
  {
    "id": "created",
    "key": "created",
    "name": "Created",
    "custom": false,
    "orderable": false,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "created",
      "createdDate"
    ],
    "schema": {
      "type": "datetime",
      "system": "created"
    }
  },
  {
    "id": "customfield_10300",
    "key": "customfield_10300",
    "name": "Start Date",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10300]",
      "Start Date"
    ],
    "schema": {
      "type": "date",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:datepicker",
      "customId": 10300
    }
  },
  {
    "id": "customfield_10301",
    "key": "customfield_10301",
    "name": "End Date",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10301]",
      "End Date"
    ],
    "schema": {
      "type": "date",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:datepicker",
      "customId": 10301
    }
  },
  {
    "id": "updated",
    "key": "updated",
    "name": "Updated",
    "custom": false,
    "orderable": false,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "updated",
      "updatedDate"
    ],
    "schema": {
      "type": "datetime",
      "system": "updated"
    }
  },
  {
    "id": "timeoriginalestimate",
    "key": "timeoriginalestimate",
    "name": "Original Estimate",
    "custom": false,
    "orderable": false,
    "navigable": true,
    "searchable": false,
    "clauseNames": [
      "originalEstimate",
      "timeoriginalestimate"
    ],
    "schema": {
      "type": "number",
      "system": "timeoriginalestimate"
    }
  },
  {
    "id": "description",
    "key": "description",
    "name": "Description",
    "custom": false,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "description"
    ],
    "schema": {
      "type": "string",
      "system": "description"
    }
  },
  {
    "id": "timetracking",
    "key": "timetracking",
    "name": "Time Tracking",
    "custom": false,
    "orderable": true,
    "navigable": false,
    "searchable": true,
    "clauseNames": [],
    "schema": {
      "type": "timetracking",
      "system": "timetracking"
    }
  },
  {
    "id": "customfield_10005",
    "key": "customfield_10005",
    "name": "Epic Link",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10005]",
      "Epic Link"
    ],
    "schema": {
      "type": "any",
      "custom": "com.pyxis.greenhopper.jira:gh-epic-link",
      "customId": 10005
    }
  },
  {
    "id": "customfield_10401",
    "key": "customfield_10401",
    "name": "Match Best Price",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10401]",
      "Match Best Price"
    ],
    "schema": {
      "type": "option",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:radiobuttons",
      "customId": 10401
    }
  },
  {
    "id": "security",
    "key": "security",
    "name": "Security Level",
    "custom": false,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "level"
    ],
    "schema": {
      "type": "securitylevel",
      "system": "security"
    }
  },
  {
    "id": "attachment",
    "key": "attachment",
    "name": "Attachment",
    "custom": false,
    "orderable": true,
    "navigable": false,
    "searchable": true,
    "clauseNames": [
      "attachments"
    ],
    "schema": {
      "type": "array",
      "items": "attachment",
      "system": "attachment"
    }
  },
  {
    "id": "summary",
    "key": "summary",
    "name": "Summary",
    "custom": false,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "summary"
    ],
    "schema": {
      "type": "string",
      "system": "summary"
    }
  },
  {
    "id": "customfield_10120",
    "key": "customfield_10120",
    "name": "Rank",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10120]",
      "Rank"
    ],
    "schema": {
      "type": "any",
      "custom": "com.pyxis.greenhopper.jira:gh-lexo-rank",
      "customId": 10120
    }
  },
  {
    "id": "customfield_10000",
    "key": "customfield_10000",
    "name": "Development",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10000]",
      "development"
    ],
    "schema": {
      "type": "any",
      "custom": "com.atlassian.jira.plugins.jira-development-integration-plugin:devsummarycf",
      "customId": 10000
    }
  },
  {
    "id": "customfield_10001",
    "key": "customfield_10001",
    "name": "Organizations",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10001]",
      "Organizations"
    ],
    "schema": {
      "type": "any",
      "custom": "com.atlassian.servicedesk:sd-customer-organizations",
      "customId": 10001
    }
  },
  {
    "id": "customfield_10002",
    "key": "customfield_10002",
    "name": "Epic Name",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10002]",
      "Epic Name"
    ],
    "schema": {
      "type": "string",
      "custom": "com.pyxis.greenhopper.jira:gh-epic-label",
      "customId": 10002
    }
  },
  {
    "id": "customfield_10003",
    "key": "customfield_10003",
    "name": "Epic Status",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10003]",
      "Epic Status"
    ],
    "schema": {
      "type": "option",
      "custom": "com.pyxis.greenhopper.jira:gh-epic-status",
      "customId": 10003
    }
  },
  {
    "id": "customfield_10004",
    "key": "customfield_10004",
    "name": "Epic Color",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10004]",
      "Epic Color"
    ],
    "schema": {
      "type": "string",
      "custom": "com.pyxis.greenhopper.jira:gh-epic-color",
      "customId": 10004
    }
  },
  {
    "id": "customfield_10400",
    "key": "customfield_10400",
    "name": "Service Cost Information",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10400]",
      "Service Cost Information"
    ],
    "schema": {
      "type": "option",
      "custom": "com.atlassian.jira.plugin.system.customfieldtypes:radiobuttons",
      "customId": 10400
    }
  },
  {
    "id": "environment",
    "key": "environment",
    "name": "Environment",
    "custom": false,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "environment"
    ],
    "schema": {
      "type": "string",
      "system": "environment"
    }
  },
  {
    "id": "customfield_10117",
    "key": "customfield_10117",
    "name": "Approvals",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "Approvals",
      "cf[10117]"
    ],
    "schema": {
      "type": "sd-approvals",
      "custom": "com.atlassian.servicedesk.approvals-plugin:sd-approvals",
      "customId": 10117
    }
  },
  {
    "id": "customfield_10118",
    "key": "customfield_10118",
    "name": "Parent Link",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10118]",
      "Parent Link"
    ],
    "schema": {
      "type": "any",
      "custom": "com.atlassian.jpo:jpo-custom-field-parent",
      "customId": 10118
    }
  },
  {
    "id": "customfield_10119",
    "key": "customfield_10119",
    "name": "Sprint",
    "custom": true,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "cf[10119]",
      "Sprint"
    ],
    "schema": {
      "type": "array",
      "items": "string",
      "custom": "com.pyxis.greenhopper.jira:gh-sprint",
      "customId": 10119
    }
  },
  {
    "id": "duedate",
    "key": "duedate",
    "name": "Due Date",
    "custom": false,
    "orderable": true,
    "navigable": true,
    "searchable": true,
    "clauseNames": [
      "due",
      "duedate"
    ],
    "schema": {
      "type": "date",
      "system": "duedate"
    }
  },
  {
    "id": "comment",
    "key": "comment",
    "name": "Comment",
    "custom": false,
    "orderable": true,
    "navigable": false,
    "searchable": true,
    "clauseNames": [
      "comment"
    ],
    "schema": {
      "type": "comments-page",
      "system": "comment"
    }
  }
];

const output = allFields
  .filter( field => field.custom )
  .map( field => ({ [field.id]: field.name.replace(/ /g,'').toLowerCase() }))
  .reduce( (prev, curr) => Object.assign(prev, curr));


fs.writeFileSync(path.resolve(__dirname, './output.js'), JSON.stringify(output, null, 2));
