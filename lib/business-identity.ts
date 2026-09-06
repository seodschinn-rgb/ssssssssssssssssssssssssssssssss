/** Business location confirmed by the owner on 6 September 2026.
 * Munich and Bavaria are service areas, not branch-office addresses.
 */
export const BUSINESS_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Ulmenweg 15',
  postalCode: '51766',
  addressLocality: 'Engelskirchen',
  addressRegion: 'Nordrhein-Westfalen',
  addressCountry: 'DE',
} as const

export const BUSINESS_SERVICE_AREAS = [
  { '@type': 'City', name: 'München' },
  { '@type': 'State', name: 'Bayern' },
] as const
