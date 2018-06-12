const envVars = {
  default: {
    EXTRACTOR_SVC_URI: 'https://brave-wave-193121.appspot.com/0.1/',
    EMAIL_SVC_URI: 'https://email.dev.api.s3betaplatform.com/0.1/',
    EMAIL_INBOX_URI: 'https://dev.s3betaplatform.com/home/inbox',
    OUTLOOK_AUTH_URI: 'https://login.microsoftonline.com/common/',
    IDENTITY_SVC_URI: 'https://identity.dev.api.s3betaplatform.com/0.1',
  },
  local: {
    GRAPHQL_URI: 'http://local.s3betaplatform.com:3010/graphql',
    DOCUMENT_SVC_URI: 'https://document.dev.api.s3betaplatform.com/0.1/',
    EMAIL_SVC_URI: 'https://email.dev.api.s3betaplatform.com/0.1/',
    EMAIL_INBOX_URI: 'https://local.s3betaplatform.com:3000/home/inbox',
    EMAIL_CLIENT_ID: '32fef2dd-a4dc-4b8c-8ff7-a2536a419b94',
    CALLS_SVC_URI: 'https://call-center.dev.api.s3betaplatform.com/0.1/',
    PERSON_SVC_URI: 'https://person.dev.api.s3betaplatform.com/0.1/',
  },
  tmp: {
    GRAPHQL_URI: 'http://local.s3betaplatform.com:3010/graphql',
    DOCUMENT_SVC_URI: 'https://document.tmp.api.s3betaplatform.com/0.1/',
    EMAIL_SVC_URI: 'https://email.tmp.api.s3betaplatform.com/0.1/',
    EMAIL_INBOX_URI: 'https://tmp.s3betaplatform.com/home/inbox',
    EMAIL_CLIENT_ID: 'f36ce007-1f39-43c7-b001-0ee68132d03b',
    CALL_SVC_URI: 'https://call-center.tmp.api.s3betaplatform.com/0.1/',
    PERSON_SVC_URI: 'https://person.tmp.api.s3betaplatform.com/0.1/',
    IDENTITY_SVC_URI: 'https://identity.tmp.api.s3betaplatform.com/0.1/',
  },
  test: {
    GRAPHQL_URI: 'http://test.s3betaplatform.com:3010/graphql',
    DOCUMENT_SVC_URI: 'https://document.test.api.s3betaplatform.com/0.1/',
    EMAIL_SVC_URI: 'https://email.test.api.s3betaplatform.com/0.1/',
    EMAIL_INBOX_URI: 'https://test.s3betaplatform.com/home/inbox',
    EMAIL_CLIENT_ID: 'f36ce007-1f39-43c7-b001-0ee68132d03b',
    CALL_SVC_URI: 'https://call-center.test.api.s3betaplatform.com/0.1/',
    PERSON_SVC_URI: 'https://person.test.api.s3betaplatform.com/0.1/',
    IDENTITY_SVC_URI: 'https://identity.test.api.s3betaplatform.com/0.1/',
  },
  qa: {
    GRAPHQL_URI: 'http://qa.s3betaplatform.com:3010/graphql',
    DOCUMENT_SVC_URI: 'https://document.qa.api.s3betaplatform.com/0.1/',
    EMAIL_SVC_URI: 'https://email.qa.api.s3betaplatform.com/0.1/',
    EMAIL_INBOX_URI: 'https://qa.s3betaplatform.com:3000/home/inbox',
  },
  dev: {
    GRAPHQL_URI: 'http://conduit.dev.api.s3betaplatform.com/graphql',
    DOCUMENT_SVC_URI: 'https://document.dev.api.s3betaplatform.com/0.1/',
    EMAIL_CLIENT_ID: 'f36ce007-1f39-43c7-b001-0ee68132d03b',
    PERSON_SVC_URI: 'https://person.dev.api.s3betaplatform.com/0.1/',
    EMAIL_SVC_URI: 'https://email.dev.api.s3betaplatform.com/0.1/',
    EMAIL_INBOX_URI: 'https://dev.s3betaplatform.com/home/inbox',
  },
  production: {
    GRAPHQL_URI: 'http://conduit.dev.api.s3betaplatform.com/graphql',
    EXTRACTOR_SVC_URI: 'https://brave-wave-193121.appspot.com/0.1/',
    DOCUMENT_SVC_URI: 'https://document.api.s3betaplatform.com/0.1/',
    EMAIL_SVC_URI: 'https://email.api.s3betaplatform.com/0.1/',
    EMAIL_INBOX_URI: 'https://s3betaplatform.com/home/inbox',
  },
}

module.exports = (env = 'production') => {
    return Object.assign(envVars.default, envVars[env])
}
