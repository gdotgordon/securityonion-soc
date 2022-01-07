// Copyright 2019 Jason Ertel (jertel). All rights reserved.
// Copyright 2020-2021 Security Onion Solutions, LLC. All rights reserved.
//
// This program is distributed under the terms of version 2 of the
// GNU General Public License.  See LICENSE for further details.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

const i18n = {
  translations: {
    "en-US": {
      __missing__: '*Missing',
      acknowledged: 'Acknowledged',
      ackMultipleTip: 'Acknowledging groups of alerts may take a while and will continue in the background.',
      ackPartialSuccess: 'The acknowledge request encountered an unexpected problem. Some events may not have been acknowledged.',
      ackSingleTip: 'Acknowledged alert and removed from view.',
      ackUndoMultipleTip: 'Reverting acknowledgment on groups of alerts may take a while and will continue in the background.',
      ackUndoSingleTip: 'Reverted acknowledgement and removed from view.',
      actions: 'Actions',
      actionAlert: 'Alert',
      actionAlertHelp: 'Create an alert for this event',
      actionCorrelate: 'Correlate',
      actionCorrelateHelp: 'Show related events',
      actionCyberChef: 'CyberChef',
      actionCyberChefHelp: 'Analyze this field using CyberChef',
      actionFailure: 'Action failed (check browser console for more error details): ',
      actionGoogle: 'Google',
      actionGoogleHelp: 'Perform a Google search on this field',
      actionHunt: 'Hunt',
      actionHuntHelp: 'Hunt for this field',
      actionPcap: 'PCAP',
      actionPcapHelp: 'Show PCAP for this event',
      actionSuccess: 'Action completed: ',
      actionVirusTotal: 'VirusTotal',
      actionVirusTotalHelp: 'Analyze this field at virustotal.com',
      add: 'Add',
      addObservable: 'Add as new observable...',
      address: 'Address',
      admin: 'Administration',
      alertAcknowledge: 'Acknowledge',
      alertEscalated: 'This alert has already been escalated',
      alertUndoAcknowledge: 'Undo Acknowledge',
      alerts: 'Alerts',
      artifactDescription: 'Description',
      artifactDescriptionHelp: 'Provide an optional description',
      artifactIoc: 'IOC',
      artifactIocHelp: 'Enable this field if this is an Indicator of Compromise',
      artifactGroupType: 'Group Type',
      artifactGroupId: 'Group ID',
      artifactDescription: 'Description',
      artifactType: 'Type',
      artifactTypeHelp: 'Select a type for classification purposes (Note: choose "file" type to upload a file)',
      artifactValue: 'Value (hash, filename, etc.)',
      artifactValueHelp: 'Specify the observed value',
      attachments: 'Attachments',
      attachmentAdd: 'Add Attachment',
      attachmentHelp: 'Click to attach a file to upload. (Note: max upload size is {maxUploadSizeBytes} bytes)',
      attempt: 'Attempt',
      author: 'Author',
      autohunt: 'Automatically Hunt after changing filters, groupings, and date-ranges',
      autoRefresh: 'Automatic refresh interval',
      beginTime: 'Filter Begin',
      beginTimeHelp: 'Filter start time in RFC 3339 format (Ex: 2020-10-16 13:00:00.230-04:00). Unused for imported PCAPs.',
      blog: 'Blog',
      bytes: 'Bytes',
      cancel: 'Cancel',
      case: 'Case',
      cases: 'Cases',
      caseAssignee: 'Assignee',
      caseAssigneeHelp: 'Designate the assignee for this case',
      caseCategory: 'Category',
      caseCategoryHelp: 'Category used for organizing and grouping similar cases',
      caseCreateFailed: 'Unable to create new case - request a system administrator review SOC logs',
      caseDefaultTitle: 'Case title not yet provided - click here to update this title',
      caseDefaultDescription: 'Case description not yet provided - click here to update this description',
      caseEscalatedDescription: 'Review escalated event details in the Events tab below. Click here to update this description.',
      caseEventIdAggregation: '(aggregation)',
      caseDescription: 'Description',
      caseDescriptionHelp: 'Detailed description of the case',
      caseId: 'Case Id',
      casePap: 'PAP',
      casePapHelp: 'Permissible Actions Protocol',
      casePriority: 'Priority',
      casePriorityHelp: 'Lower values typically indicate increasing importance.',
      caseSeverity: 'Severity',
      caseSeverityHelp: 'The severity classification for this case',
      caseStatus: 'Status',
      caseStatusHelp: 'Indicates the state of the case',
      caseTags: 'Tags',
      caseTagsHelp: 'Annotate with multiple optional tags',
      caseTitle: 'Title',
      caseTitleHelp: 'Brief summary of the case',
      caseTlp: 'TLP',
      caseTlpHelp: 'Traffic Light Protocol',
      caseExcludeToggle: 'Exclude case data',
      category: 'Category',

      chartTitleBottom: 'Fewest Occurrences',
      chartTitleTimeline: 'Timeline',
      chartTitleTop: 'Most Occurrences',
      cheatsheet: 'Cheat Sheet',
      clear: 'Clear',
      collapse: 'Collapse',
      collapseHelp: 'Collapse all packet data',
      comment: 'Comments',
      comments: 'Comments',
      commentAdd: 'Add Comment',
      commentDescription: 'Comment',
      commentDescriptionHelp: 'Provide follow-up information to this case',
      completed: 'Completed',
      continue: 'Would you like to continue?',
      copyEventToClipboardAsJson: 'Copy full event as JSON',
      copyEventToClipboardAsKvp: 'Copy full event as field:value pairs',
      copyFieldToClipboard: 'Copy this value only',
      copyFieldValueToClipboard: 'Copy as field:value',
      copyToClipboard: 'Copy to clipboard',
      create: 'Create',
      custom: 'Custom',
      darkMode: 'Dark Mode',
      dataset: 'Dataset',
      dateClosed: 'Closed',
      dateCompleted: 'Date Completed',
      dateCreated: 'Created',
      dateDataEpoch: 'Earliest PCAP',
      dateFailed: 'Date Failed',
      dateModified: 'Updated',
      dateOnline: 'Online Since:',
      dateQueued: 'Date Queued',
      datePreselectToday: 'Today',
      datePreselectYesterday: 'Yesterday',
      datePreselectThisWeek: 'This Week',
      datePreselectLastWeek: 'Last Week',
      datePreselectThisMonth: 'This Month',
      datePreselectLastMonth: 'Last Month',
      datePreselectPrevious3d: 'Previous 3 Days',
      datePreselectPrevious4d: 'Previous 4 Days',
      datePreselectPrevious7d: 'Previous 7 Days',
      datePreselectPrevious30d: 'Previous 30 Days',
      datePreselect3dToNow: '3 Days ago to Now',
      datePreselect4dToNow: '4 Days ago to Now',
      datePreselect7dToNow: '7 Days ago to Now',
      datePreselect30dToNow: '30 Days ago to Now',
      dateTimeFormat: 'lll',
      dateUnknown: '',
      dateUpdated: 'Date Updated',
      days: 'days',
      delete: 'Delete',
      deleted: 'Deleted',
      deleteUserTitle: 'Delete User',
      deleteUserConfirm: 'You are about to permanently delete this user:',
      description: 'Description',
      details: 'Details',
      disconnected: 'Disconnected from manager',
      downloads: 'Downloads',
      downloadsFirewallTip: 'When installing packages such as osquery or beats onto remote systems be sure to run <code>so-allow</code> on the Security Onion Manager node to allow network access through the firewall.',
      downloadsInfo: 'These packages and configs are osquery files, customized for this specific Fleet install and will only be generated if Fleet has been installed. Due to macOS packaging constraints, the macOS PKG has not been customized for this Fleet install - osquery/Launcher will need to be configured post-deployment. These files are not signed. Signed, non-customized osquery packages can be obtained directly from <a href="https://osquery.io/downloads">osquery.io</a>. For further Fleet & osquery information, view our online help.',
      downloadsElastic: 'Elasticsearch Utilities',
      downloadsOsquery: 'osquery Packages and Configs',
      downloadsWazuh: 'Wazuh Agents',
      downloadPackets: 'Download the packets as a PCAP file',
      dstIp: 'Destination IP',
      dstIpHelp: 'Optional destination IP address to include in this job filter',
      dstPort: 'Destination Port',
      dstPortHelp: 'Optional destination TCP port to include in this job filter',
      edit: 'Edit',
      edited: '(edited)',
      email: 'Email Address',
      emailHelp: 'Specify a valid email address. Contact your administrator for new account creation.',
      emailRequired: 'An email address must be specified.',
      endTime: 'Filter End',
      endTimeHelp: 'Filter end time in RFC 3339 format (Ex: 2020-10-16 15:30:00.230-04:00). Unused for imported PCAPs.',
      eps: 'EPS',
      epsProduction: 'Production EPS:',
      epsConsumption: 'Consumption EPS:',
      error: 'Error',
      escalate: 'Escalate',
      escalationInvalid: 'Invalid alert - cannot escalate to a case due to insufficient alert information',
      escalateExistingCase: 'Attach event to a recently viewed case:',
      escalateExistingCaseHelp: 'Attach event to this existing case',
      escalateNewCase: 'Escalate to new case',
      escalateNewCaseHelp: 'Escalate this event to a new case (a new case will be created)',
      escalated: 'Escalated',
      escalatedEventTip: 'Escalated event(s).',
      escalatedMultipleTip: 'Escalating groups of alerts may take a while and will continue in the background.',
      escalatedSingleTip: 'Escalated alert and removed from view.',
      event: 'Event',
      events: 'Events',
      eventCaseTitle: 'Event Escalation from SOC',
      eventExpandHelp: 'Show all event fields',
      eventFetchTook: 'The backend data fetch took ',
      eventLookupFailed: 'The event lookup could not be completed.',
      eventRoundTripTook: 'The total round trip took ',
      eventTotal: 'Total Found: ',
      evidence: 'Observables',
      evidenceAdd: 'Add Observable',
      evidenceHelp: 'Important data relevant to this case',
      expand: 'Expand',
      expandHelp: 'Expand and show detailed data',
      incomplete: 'Incomplete',
      failedEvents: 'Failed Events',
      fault: 'Fault',
      fetchLimit: 'Fetch Limit',
      
      'field_case.createTime': 'Create Date',
      'field_case.severity': 'Severity',
      'field_case.status': 'Status',
      'field_case.title': 'Title',
      field_count: 'Count',
      field_soc_id: 'Event ID',
      field_soc_timestamp: 'Timestamp',

      filename: 'Filename',
      fileTooLarge: 'The chosen file is too large to upload; max file size is {maxUploadSizeBytes} bytes',
      fileEmpty: 'The chosen file appears to have no content; consider using a "filename" artifact instead',

      filterDrilldown: 'Drilldown',
      filterDrilldownHelp: 'Drilldown into this value',
      filterExact: 'Only',
      filterExactHelp: 'Filters for only this value',
      filterExclude: 'Exclude',
      filterExcludeHelp: 'Excludes this value from the search',
      filterInclude: 'Include',
      filterIncludeHelp: 'Adds this value as a required match in the search',
      filterResults: 'Filter Results',
      firstName: 'First Name',
      flags: 'Flags',
      graphs: 'Graphs',
      grid: 'Grid',
      gridEps: 'Grid EPS:',
      groupedBy: 'Group:',
      groupInclude: "Group By",
      groupIncludeHelp: "Add as a group-by field",
      groups: 'Group Metrics',
      help: 'Help',
      hex: 'HEX',
      hexHelp: 'Include hexadecimal representation of packet data',
      history: 'History',
      home: 'Overview',
      hours: 'hours',
      hunt: 'Hunt',
      huntForEvent: 'Hunt for this event',
      huntForFieldValue: 'Hunt for this field\'s value',
      huntHelp: 'Start a new hunt based on the current filters',
      id: 'ID',
      importId: 'Import ID',
      importIdHelp: 'UUID value that is output from so-import-pcap. Only needed for imported PCAPs.',
      index: "Index",
      interval0s: "Never",
      interval5s: "5 seconds",
      interval10s: "10 seconds",
      interval15s: "15 seconds",
      interval30s: "30 seconds",
      interval1m: "1 minute",
      interval2m: "2 minutes",
      interval5m: "5 minutes",
      interval10m: "10 minutes",
      interval15m: "15 minutes",
      interval30m: "30 minutes",
      interval1h: "1 hour",
      interval2h: "2 hours",
      interval5h: "5 hours",
      interval10h: "10 hours",
      interval24h: "24 hours",
      job: 'Job',
      jobIncomplete: 'The job was unable to complete and will retry within a few minutes. Details are available below.',
      jobInProgress: 'This job is awaiting completion.',
      jobs: 'PCAP',
      kind: 'Kind',
      last: 'Last',
      lastName: 'Last Name',
      length: 'Length',
      license: 'License',
      licenseInfo: 'This product is licensed under the GNU General Public License version 2.0',
      loading: 'Loading, please wait...',
      loadMore: 'Load More',
      login: 'Login',
      loginDisabled: 'Locked',
      loginEnabled: 'Unlocked',
      loginExpired: 'The login session has expired. Refresh, or wait for the page to refresh automatically, and then try again.',
      loginInvalid: 'The provided credentials are invalid. Please try again.',
      loginTitle: 'Login to Security Onion',
      logout: 'Logout',
      logoutFailure: 'Unable to initiate logout. Ensure server is accessible.',
      md5: 'MD5',
      message: 'Message',
      minutes: 'minutes',
      model: 'Model',
      module: 'Module',
      months: 'months',
      mruQuery: 'Recently Used',
      mruQueryHelp: 'This query is a user-defined query and is only available on this browser.',
      na: 'N/A',
      no: 'No',
      noData: 'No information is currently available.',
      nodeExpandHelp: 'Show node details',
      nodeExpand: 'Expand',
      nodeImageUnavailable: 'Appliance images are only displayed for official Security Onion Solutions appliances.',
      nodeStatusConnection: 'Connection Status:',
      nodeStatusProcess: 'Process Status:',
      nodeStatusRaid: 'Raid Status:',
      noSearchResults: 'No search results were found.',
      note: 'Note',
      notFound: 'The selected item no longer exists',
      number: 'Num',
      ok: 'OK',
      offline: 'Offline',
      online: 'Online',
      operation: 'Operation',
      options: 'Options',
      order: 'Order',
      owner: 'Owner',
      packages: 'Packages',
      packets: 'Captured Packets',
      packetStreamHelp: 'Show all packet data instead of only the application-level data stream',
      password: 'Password',
      passwordConfirm: 'Confirm password',
      passwordHelp: 'Passwords must meet strength requirements',
      passwordMustMatch: 'Passwords must match',
      passwordChange: 'New password',
      passwordInstructions: 'You may be prompted to login again when updating your security settings. If so, login with the old password to verify your identity. This is a security measure to protect your account.',
      passwordRequired: 'A password must be specified.',
      profileInstructions: 'You may be prompted to login again when updating your profile. This is a security measure to protect your account.',
      pcap: 'PCAP',
      pending: 'Pending',
      product: 'Security Onion',
      profile: 'Profile',
      queriesHelp: 'Choose from several pre-defined queries',
      queryHelp: 'Specify a hunting query in Onion Query Language (OQL)',
      quickActions: 'Actions',
      quickDrilldown: 'Quick Drilldown',
      reason: 'Reason',
      reconnecting: 'Attempting to connect to manager',
      refresh: 'Refresh',
      related: 'Events',
      relatedEventId: 'Related Event ID',
      relativeTimeHelp: 'Click the clock icon to change to absolute time',
      required: 'Required.',
      resetDefaults: 'Reset Defaults',
      resetDefaultsHint: 'Reset all local user SOC settings back to their original default values. This must be done on each browser or device that you have used with SOC.',
      results: 'Results',
      role: 'Role(s)',
      roleAdmin: 'Administrator',
      roleAnalyst: 'Analyst',
      ruleMinLen: 'The provided value is too short',
      ruleMaxLen: 'The provided value is too long',
      save: 'Save',
      saveSuccess: 'Save successfull!',
      seconds: 'seconds',
      security: 'Security',
      sensor: 'Sensor',
      sensorId: 'Sensor ID',
      sensorIdRequired: 'The Sensor ID must be entered before adding a new job.',
      sensorIdHelp: 'The sensor ID must match an actual sensor ID in order for this job to be processed.',
      settings: 'Settings',
      settingsInvalid: 'Unable to save settings: ',
      settingsSaved: 'Your new settings have been saved.',
      settingsTitle: 'User Settings',
      sha1: 'SHA1',
      sha256: 'SHA256',
      share: 'Clipboard',
      'so-eval': 'Evaluation',
      'so-eval-keywords': 'Elastic, Elasticsearch, Fleet, Forward, Ingest, Manager, Master, Search, Sensor, Sensoroni, Soc, Stenographer, Web',
      'so-fleet': 'Fleet',
      'so-fleet-keywords': 'Fleet',
      'so-heavynode': 'Heavy',
      'so-heavynode-keywords': 'Elastic, Elasticsearch, Forward, Ingest, Search, Sensor, Sensoroni, Stenographer',
      'so-helix': 'Helix',
      'so-helix-keywords': 'Helix, Sensor, Sensoroni, Stenographer',
      'so-import': 'Import',
      'so-import-keywords': 'Import, Manager, Master, Soc, Web',
      'so-managersearch': 'ManagerSearch',
      'so-managersearch-keywords': 'Elastic, Elasticsearch, Ingest, Manager, Master, Search, Soc, Web',
      'so-manager': 'Manager',
      'so-manager-keywords': 'Manager, Master, Soc',
      'so-node': 'Search',
      'so-node-keywords': 'Elastic, Elasticsearch, Ingest, Search',
      'so-receiver': 'Receiver',
      'so-receiver-keywords': 'Receiver',
      'so-search': 'Search',
      'so-search-keywords': 'Elastic, Elasticsearch, Ingest, Search',
      'so-sensor': 'Forward',
      'so-sensor-keywords': 'Forward, Sensor, Sensoroni, Stenographer',
      'so-standalone': 'Standalone',
      'so-standalone-keywords': 'Elastic, Elasticsearch, Fleet, Forward, Ingest, Manager, Master, Search, Sensor, Sensoroni, Soc, Stenographer, Web',
      sortedBy: 'Sort:',
      sortInclude: "Sort By",
      sortIncludeHelp: "Add as a sort-by field",
      sponsorsIntro: 'Brought to you by:',
      srcIp: 'Source IP',
      srcIpHelp: 'Optional source IP address to include in this job filter',
      srcPort: 'Source Port',
      srcPortHelp: 'Optional source TCP port to include in this job filter',
      status: 'Status',
      summary: 'Summary',
      tcs: 'T&C\'s',
      terms: 'Terms and Conditions',
      termDetails: '<h3>Disclaimer of Warranty</h3>THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM .AS IS. WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.<p><h3>Limitation of Liability</h3>IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.',
      time: 'Time',
      timePickerHelp: 'Choose the timespan to search, or click the calendar icon to switch to relative time',
      timePickerFormat: 'YYYY/MM/DD hh:mm:ss A',
      timePickerSample: '2006/01/02 3:04:05 PM',
      timestamp: 'Timestamp',
      timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS Z',
      timezone: 'Time Zone:',
      timezoneHelp: 'Time Zone',
      toolCyberchef: 'CyberChef',
      toolCyberchefHelp: 'Data decoding and transformation tools',
      toolFleet: 'FleetDM',
      toolFleetHelp: 'Osquery Fleet Management',
      toolGrafana: 'Grafana',
      toolGrafanaHelp: 'Visualize Security Onion metrics',
      toolKibana: 'Kibana',
      toolKibanaHelp: 'Elasticsearch User Interface',
      toolNavigator: 'Navigator',
      toolNavigatorHelp: 'MITRE ATT@CK Navigator',
      toolPlaybook: 'Playbook',
      toolPlaybookHelp: 'Detection Playbook',
      toolTheHive: 'TheHive',
      toolTheHiveHelp: 'Case Management',
      transcriptCyberChefHelp: 'Send the transcript to CyberChef',
      type: 'Type',
      unassigned: 'unassigned',
      unknown: 'unknown',
      unwrapHelp: 'Unwrap packets from encapsulation (Ex: VXLAN)',
      update: 'Update',
      updatePassword: 'Update Password',
      updateProfile: 'Update Profile',
      updateSettings: 'Settings',
      updateSuccessful: 'Update successful',
      uptime: 'Uptime',
      user: 'User Details',
      username: 'User',
      users: 'Users',
      value: 'Value',
      version: 'Version',
      view: 'View',
      viewCase: 'Case Details',
      weeks: 'weeks',
      whatsnew: 'What\'s New',
      yes: 'Yes',

      CASE_MODULE_NOT_ENABLED: 'A case module has not been configured for this installation. Unable to proceed with request.',
      QUERY_INVALID__GROUP_EMPTY: 'The search query has an empty group.',
      QUERY_INVALID__GROUP_INCOMPLETE: 'The search query is missing an ending parenthesis.',
      QUERY_INVALID__GROUP_NOT_STARTED: 'The search query has an extra parenthesis.',
      QUERY_INVALID__GROUPBY_TERMS_MISSING: 'The search query is has a malformed groupby segment.',
      QUERY_INVALID__QUOTE_INCOMPLETE: 'The search query is missing an ending double quote.',
      QUERY_INVALID__SEARCH_MISSING: 'The search query is missing the search criteria.',
      QUERY_INVALID__SEARCH_TERMS_MISSING: 'The search query is missing search terms.',
      QUERY_INVALID__SEGMENT_EMPTY: 'The search query has an incomplete segment (pipe) function.',
      QUERY_INVALID__SEGMENT_UNSUPPORTED: 'The search query contains an unsupported segment (pipe) function.',
      QUERY_INVALID__TERM_MISSING: 'The search query is incomplete.',
    },
  },

  getLocalizedTranslations(lang) {
    var trans = this.translations[lang];
    if (trans == undefined) trans = this.translations['en-US'];
    return trans;
  },
}

if (typeof global !== 'undefined') global.i18n = i18n;
