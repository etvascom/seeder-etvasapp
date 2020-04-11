const reservedSlugs = [
  'www',
  'ftp',
  'mail',
  'web',
  'adm',  
  'admin',
  'manage',
  'service',
  'business',
  'id',
  'account',
  'identity',
  'root',
  'aws',
  'check',
  'online',
  'deploy',
  'deployment',
  'demo',
  'build',
  'staging',
  'prod',
  'production',
  'me',
  'self',
  'subdomain',
  'example'
  // TODO: any other forbidden subdomains
]

const slugRegex = /^[a-z0-9-_]+$/
export default value => value && (reservedSlugs.includes(value) || !slugRegex.test(value)) ? 'Invalid slug' : false
